/**
 * Tunisian Food Catalog Ingestion & Local Export Script
 *
 * Queries Open Food Facts (OFF) for:
 * 1. Countries tag: 'tunisia'
 * 2. Origins tag: 'tunisia'
 * 3. GS1 Tunisia barcode prefix: '619...'
 *
 * Normalizes all records and outputs:
 * packages/domain/data/tunisian_catalog_export.json
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Product, NutriScoreGrade, NovaGroup, Additive } from '../src/types/product.js';
import { createProductScore } from '../src/scoring.js';
import { SEED_PRODUCTS } from '../src/mockData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface RawOffProduct {
  code: string;
  product_name?: string;
  product_name_fr?: string;
  product_name_ar?: string;
  brands?: string;
  categories?: string;
  origins?: string;
  countries_tags?: string[];
  image_front_url?: string;
  image_url?: string;
  nutriscore_grade?: string;
  nova_group?: number;
  additives_tags?: string[];
  allergens_tags?: string[];
  ingredients_text_fr?: string;
  ingredients_text?: string;
  nutriments?: {
    'energy-kcal_100g'?: number;
    sugars_100g?: number;
    'saturated-fat_100g'?: number;
    salt_100g?: number;
    fiber_100g?: number;
    proteins_100g?: number;
  };
}

function normalizeProduct(raw: RawOffProduct): Product | null {
  if (!raw.code || raw.code.trim().length < 6) return null;

  const rawName = raw.product_name_fr || raw.product_name || raw.product_name_ar;
  if (!rawName || rawName.trim().length < 2) return null;

  const name = rawName.trim();
  const brand = raw.brands?.split(',')[0]?.trim() || 'Produit Tunisien';
  const category = raw.categories?.split(',')[0]?.trim() || 'Alimentation générale';

  // Nutri-Score calculation
  const rawGrade = (raw.nutriscore_grade || '').toLowerCase();
  const nutriScore: NutriScoreGrade = ['a', 'b', 'c', 'd', 'e'].includes(rawGrade)
    ? (rawGrade as NutriScoreGrade)
    : 'c';

  // NOVA Group
  const rawNova = Number(raw.nova_group);
  const novaGroup: NovaGroup = [1, 2, 3, 4].includes(rawNova)
    ? (rawNova as NovaGroup)
    : 3;

  // Nutrition
  const energyKcal = Math.max(0, Math.round(raw.nutriments?.['energy-kcal_100g'] || 0));
  const sugars = Math.max(0, Number((raw.nutriments?.sugars_100g || 0).toFixed(1)));
  const saturatedFat = Math.max(0, Number((raw.nutriments?.['saturated-fat_100g'] || 0).toFixed(1)));
  const salt = Math.max(0, Number((raw.nutriments?.salt_100g || 0).toFixed(2)));

  // Base score calculation
  let scoreVal = 60;
  if (nutriScore === 'a') scoreVal = 88;
  else if (nutriScore === 'b') scoreVal = 74;
  else if (nutriScore === 'c') scoreVal = 58;
  else if (nutriScore === 'd') scoreVal = 42;
  else if (nutriScore === 'e') scoreVal = 24;

  const isLocal = raw.code.startsWith('619') || Boolean(raw.countries_tags?.includes('en:tunisia'));
  if (isLocal) scoreVal += 5; // Local terroir bonus

  // Additives
  const additives: Additive[] = (raw.additives_tags || []).map((tag) => {
    const code = tag.replace('en:', '').toUpperCase();
    const isMod = code.startsWith('E150') || code.startsWith('E25') || code.startsWith('E21');
    return {
      code,
      nameFr: code,
      nameAr: code,
      risk: isMod ? 'moderate' : 'safe',
      functionCategory: 'Additif alimentaire',
    };
  });

  // Allergens
  const allergens = (raw.allergens_tags || []).map((t) =>
    t.replace('en:', '').charAt(0).toUpperCase() + t.replace('en:', '').slice(1)
  );

  return {
    id: `tn-${raw.code}`,
    barcode: raw.code.trim(),
    name,
    brand,
    category,
    origin: raw.origins || 'Tunisie',
    isLocal,
    isBio: Boolean(raw.categories?.toLowerCase().includes('bio')),
    image: raw.image_front_url || raw.image_url,
    score: createProductScore(scoreVal),
    nutriScore,
    novaGroup,
    nutrition: {
      energyKcal,
      sugars,
      saturatedFat,
      salt,
      fiber: raw.nutriments?.fiber_100g,
      proteins: raw.nutriments?.proteins_100g,
    },
    additives,
    allergens,
    ingredientsSummary: raw.ingredients_text_fr || raw.ingredients_text,
  };
}

async function fetchOffPage(url: string): Promise<RawOffProduct[]> {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'EatsmartTunisie - Web/Mobile OpenData Ingestion - contact@eatsmart.tn',
      },
    });
    if (!res.ok) {
      console.warn(`HTTP ${res.status} for ${url}`);
      return [];
    }
    const data = (await res.json()) as { products?: RawOffProduct[] };
    return data.products || [];
  } catch (err) {
    console.warn(`Fetch error for ${url}:`, err);
    return [];
  }
}

async function main() {
  console.log('--- Starting Tunisian Catalog Ingestion ---');
  const catalogMap = new Map<string, Product>();

  // 1. First add our curated Tunisian seed products (highest fidelity)
  for (const p of SEED_PRODUCTS) {
    catalogMap.set(p.barcode, p);
  }
  console.log(`[Seed Data] Loaded ${catalogMap.size} curated Tunisian items.`);

  // 2. Fetch from Open Food Facts API (multi-page queries)
  const queries = [
    'https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=countries&tag_contains_0=contains&tag_0=tunisia&page_size=100&page=1&json=true',
    'https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=countries&tag_contains_0=contains&tag_0=tunisia&page_size=100&page=2&json=true',
    'https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=origins&tag_contains_0=contains&tag_0=tunisia&page_size=100&page=1&json=true',
    'https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=origins&tag_contains_0=contains&tag_0=tunisia&page_size=100&page=2&json=true',
  ];

  for (let i = 0; i < queries.length; i++) {
    console.log(`[Query ${i + 1}/${queries.length}] Fetching Open Food Facts page...`);
    const rawItems = await fetchOffPage(queries[i]);
    let addedCount = 0;

    for (const raw of rawItems) {
      const normalized = normalizeProduct(raw);
      if (normalized && !catalogMap.has(normalized.barcode)) {
        catalogMap.set(normalized.barcode, normalized);
        addedCount++;
      }
    }
    console.log(`  -> Fetched ${rawItems.length} raw products, added ${addedCount} new unique items.`);
  }

  const allProducts = Array.from(catalogMap.values());

  // 3. Export to JSON file
  const outDir = path.resolve(process.cwd(), 'data');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outFile = path.join(outDir, 'tunisian_catalog_export.json');
  fs.writeFileSync(outFile, JSON.stringify(allProducts, null, 2), 'utf-8');

  // Statistics calculation
  const brands = new Set(allProducts.map((p) => p.brand));
  const categories = new Set(allProducts.map((p) => p.category));
  const local619Count = allProducts.filter((p) => p.barcode.startsWith('619')).length;
  const withAdditivesCount = allProducts.filter((p) => p.additives.length > 0).length;

  console.log('\n======================================================');
  console.log(' TUNISIAN CATALOG EXPORT COMPLETE');
  console.log('======================================================');
  console.log(`Total Products Exported : ${allProducts.length}`);
  console.log(`GS1 Tunisia (619 prefix): ${local619Count}`);
  console.log(`Unique Brands           : ${brands.size}`);
  console.log(`Unique Categories       : ${categories.size}`);
  console.log(`Products with Additives : ${withAdditivesCount}`);
  console.log(`Output File             : ${outFile}`);
  console.log('======================================================\n');
}

main().catch((err) => {
  console.error('Fatal error during catalog export:', err);
  process.exit(1);
});

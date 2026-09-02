/**
 * Open Food Facts (OFF) Tunisian Food Catalog Ingestion Script
 *
 * Fetches products tagged with 'Tunisia' or prefix '619...' from the public
 * Open Food Facts API, normalizes the data, and validates the schema.
 */

import type { Product, NutriScoreGrade, NovaGroup, Additive } from '../src/types/product.js';
import { createProductScore } from '../src/scoring.js';

interface RawOffProduct {
  code: string;
  product_name?: string;
  product_name_fr?: string;
  product_name_ar?: string;
  brands?: string;
  categories?: string;
  origins?: string;
  countries_tags?: string[];
  nutriscore_grade?: string;
  nova_group?: number;
  additives_tags?: string[];
  allergens_tags?: string[];
  ingredients_text_fr?: string;
  nutriments?: {
    'energy-kcal_100g'?: number;
    sugars_100g?: number;
    'saturated-fat_100g'?: number;
    salt_100g?: number;
    fiber_100g?: number;
    proteins_100g?: number;
  };
}

export function normalizeOffProduct(raw: RawOffProduct): Product | null {
  if (!raw.code || (!raw.product_name && !raw.product_name_fr)) {
    return null;
  }

  const name = raw.product_name_fr || raw.product_name || 'Produit alimentaire';
  const brand = raw.brands?.split(',')[0]?.trim() || 'Marque tunisienne';
  const category = raw.categories?.split(',')[0]?.trim() || 'Épicerie';

  const nutriGrade = (raw.nutriscore_grade?.toLowerCase() || 'c') as NutriScoreGrade;
  const validNutriGrade: NutriScoreGrade = ['a', 'b', 'c', 'd', 'e'].includes(nutriGrade)
    ? nutriGrade
    : 'c';

  const nova = (raw.nova_group || 3) as NovaGroup;
  const validNova: NovaGroup = [1, 2, 3, 4].includes(nova) ? nova : 3;

  const energyKcal = Math.round(raw.nutriments?.['energy-kcal_100g'] || 0);
  const sugars = Number((raw.nutriments?.sugars_100g || 0).toFixed(1));
  const saturatedFat = Number((raw.nutriments?.['saturated-fat_100g'] || 0).toFixed(1));
  const salt = Number((raw.nutriments?.salt_100g || 0).toFixed(2));

  // Score computation approximation
  let scoreVal = 70;
  if (validNutriGrade === 'a') scoreVal = 88;
  else if (validNutriGrade === 'b') scoreVal = 74;
  else if (validNutriGrade === 'c') scoreVal = 58;
  else if (validNutriGrade === 'd') scoreVal = 42;
  else if (validNutriGrade === 'e') scoreVal = 24;

  const additives: Additive[] = (raw.additives_tags || []).map((tag) => {
    const code = tag.replace('en:', '').toUpperCase();
    return {
      code,
      nameFr: code,
      nameAr: code,
      risk: code.startsWith('E150') || code.startsWith('E25') ? 'moderate' : 'safe',
      functionCategory: 'Additif',
    };
  });

  const allergens = (raw.allergens_tags || []).map((t) =>
    t.replace('en:', '').charAt(0).toUpperCase() + t.replace('en:', '').slice(1)
  );

  return {
    id: `off-${raw.code}`,
    barcode: raw.code,
    name,
    brand,
    category,
    origin: raw.origins || 'Tunisie',
    isLocal: raw.code.startsWith('619') || Boolean(raw.countries_tags?.includes('en:tunisia')),
    isBio: false,
    score: createProductScore(scoreVal),
    nutriScore: validNutriGrade,
    novaGroup: validNova,
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
    ingredientsSummary: raw.ingredients_text_fr,
  };
}

export async function fetchTunisianProductsFromOff(limit = 50): Promise<Product[]> {
  try {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=countries&tag_contains_0=contains&tag_0=tunisia&page_size=${limit}&json=true`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);

    const data = (await res.json()) as { products: RawOffProduct[] };
    return data.products.map(normalizeOffProduct).filter((p): p is Product => p !== null);
  } catch (err) {
    console.warn('Could not fetch from OFF online, falling back to local dataset.', err);
    return [];
  }
}

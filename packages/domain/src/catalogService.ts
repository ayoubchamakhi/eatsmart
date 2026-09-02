import type { Product } from './types/product.js';
import { SEED_PRODUCTS } from './mockData.js';

export function findProductByBarcode(barcode: string): Product | undefined {
  const clean = barcode.trim();
  return SEED_PRODUCTS.find((p) => p.barcode === clean);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return SEED_PRODUCTS;

  return SEED_PRODUCTS.filter(
    (p) =>
      p.barcode.includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.origin.toLowerCase().includes(q)
  );
}

import { NextResponse } from 'next/server';
import { SEED_PRODUCTS } from '@eatsmart/domain';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get('q') || '').trim().toLowerCase();

  if (!q) {
    return NextResponse.json({
      success: true,
      count: SEED_PRODUCTS.length,
      data: SEED_PRODUCTS,
    });
  }

  const matches = SEED_PRODUCTS.filter(
    (p) =>
      p.barcode.includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );

  return NextResponse.json({
    success: true,
    count: matches.length,
    data: matches,
  });
}

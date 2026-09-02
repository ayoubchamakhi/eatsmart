import { NextResponse } from 'next/server';
import { SEED_PRODUCTS } from '@eatsmart/domain';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ barcode: string }> }
) {
  const { barcode } = await params;
  const product = SEED_PRODUCTS.find((p) => p.barcode === barcode.trim());

  if (!product) {
    return NextResponse.json(
      {
        success: false,
        error: `Aucun produit tunisien trouvé pour le code-barres ${barcode}`,
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: product,
  });
}

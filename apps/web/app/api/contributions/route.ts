import { NextResponse } from 'next/server';

// Staging in-memory / persistent contributions store (ready for Prisma/PostgreSQL migration)
const contributionsStore: Array<{
  id: string;
  barcode: string;
  name: string;
  brand: string;
  category: string;
  frontImage?: string;
  nutriImage?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}> = [];

export async function GET() {
  return NextResponse.json({
    success: true,
    count: contributionsStore.length,
    data: contributionsStore,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { barcode, name, brand, category, frontImage, nutriImage } = body;

    if (!barcode || !name || !brand) {
      return NextResponse.json(
        { success: false, error: 'Champs obligatoires manquants (barcode, name, brand)' },
        { status: 400 }
      );
    }

    const contribution = {
      id: `contrib-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      barcode: String(barcode).trim(),
      name: String(name).trim(),
      brand: String(brand).trim(),
      category: String(category || 'Épicerie').trim(),
      frontImage,
      nutriImage,
      status: 'pending' as const,
      createdAt: new Date().toISOString(),
    };

    contributionsStore.unshift(contribution);

    return NextResponse.json(
      {
        success: true,
        message: 'Contribution enregistrée avec succès pour modération.',
        data: contribution,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: 'Erreur lors de l\'enregistrement de la contribution' },
      { status: 500 }
    );
  }
}

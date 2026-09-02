export type ScoreTier = 'great' | 'good' | 'mid' | 'bad';

export interface ScoreLabel {
  fr: string;
  ar: string;
}

export interface ProductScore {
  value: number; // 0 - 100
  tier: ScoreTier;
  label: ScoreLabel;
  nutritionScore: number; // 60%
  additivesScore: number; // 40%
  confidence: number;     // 0 - 100
}

export type AdditiveRisk = 'safe' | 'low' | 'moderate' | 'high';

export type NutriScoreGrade = 'a' | 'b' | 'c' | 'd' | 'e';
export type NovaGroup = 1 | 2 | 3 | 4;

export interface Additive {
  code: string; // e.g. E250, E150d
  nameFr: string;
  nameAr: string;
  risk: AdditiveRisk;
  functionCategory: string; // 'Conservateur', 'Colorant', etc.
  descriptionFr?: string;
  descriptionAr?: string;
}

export interface NutritionFacts {
  servingSize?: string;
  energyKcal: number;
  sugars: number;
  saturatedFat: number;
  salt: number;
  fiber?: number;
  proteins?: number;
}

export interface Product {
  id: string;
  barcode: string;
  name: string;
  brand: string;
  category: string;
  origin: string;
  isLocal: boolean;
  isBio: boolean;
  image?: string;
  score: ProductScore;
  nutrition: NutritionFacts;
  nutriScore: NutriScoreGrade;
  novaGroup: NovaGroup;
  additives: Additive[];
  allergens?: string[];
  ingredientsSummary?: string;
}

export interface ProductAlternative {
  originalProductId: string;
  betterProduct: Product;
  gainScore: number;
  reasonFr: string;
  reasonAr: string;
}

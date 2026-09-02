import { colors } from '@eatsmart/design-tokens';
import type { ScoreTier, ScoreLabel, ProductScore } from './types/product.js';

export function getScoreTier(score: number): ScoreTier {
  if (score >= 80) return 'great';
  if (score >= 60) return 'good';
  if (score >= 40) return 'mid';
  return 'bad';
}

export function getScoreLabel(tier: ScoreTier): ScoreLabel {
  switch (tier) {
    case 'great':
      return { fr: 'Excellent choix', ar: 'اختيار ممتاز' };
    case 'good':
      return { fr: 'Bon choix', ar: 'اختيار جيد' };
    case 'mid':
      return { fr: 'Choix mitigé', ar: 'اختيار متوسط' };
    case 'bad':
      return { fr: 'À limiter', ar: 'يُستحسن تجنبه' };
  }
}

export function getScoreColor(tier: ScoreTier): string {
  switch (tier) {
    case 'great':
      return colors.scoreGreat;
    case 'good':
      return colors.scoreGood;
    case 'mid':
      return colors.scoreMid;
    case 'bad':
      return colors.scoreBad;
  }
}

export function createProductScore(
  rawScore: number,
  nutritionScore = rawScore,
  additivesScore = rawScore,
  confidence = 90
): ProductScore {
  const value = Math.max(0, Math.min(100, Math.round(rawScore)));
  const tier = getScoreTier(value);
  return {
    value,
    tier,
    label: getScoreLabel(tier),
    nutritionScore,
    additivesScore,
    confidence,
  };
}

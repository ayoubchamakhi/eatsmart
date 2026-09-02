import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getScoreTier, getScoreLabel, createProductScore, getScoreColor } from './scoring.js';
import { SEED_PRODUCTS, SEED_ALTERNATIVES } from './mockData.js';

describe('Scoring Rules & Tier Classification', () => {
  it('should correctly classify score tiers', () => {
    assert.equal(getScoreTier(100), 'great');
    assert.equal(getScoreTier(80), 'great');
    assert.equal(getScoreTier(79), 'good');
    assert.equal(getScoreTier(60), 'good');
    assert.equal(getScoreTier(59), 'mid');
    assert.equal(getScoreTier(40), 'mid');
    assert.equal(getScoreTier(39), 'bad');
    assert.equal(getScoreTier(0), 'bad');
  });

  it('should provide bilingual score labels for all tiers', () => {
    const great = getScoreLabel('great');
    assert.equal(great.fr, 'Excellent choix');
    assert.ok(great.ar.length > 0);

    const bad = getScoreLabel('bad');
    assert.equal(bad.fr, 'À limiter');
    assert.ok(bad.ar.length > 0);
  });

  it('should provide valid hex colors for each tier', () => {
    assert.match(getScoreColor('great'), /^#[0-9A-Fa-f]{6}$/);
    assert.match(getScoreColor('good'), /^#[0-9A-Fa-f]{6}$/);
    assert.match(getScoreColor('mid'), /^#[0-9A-Fa-f]{6}$/);
    assert.match(getScoreColor('bad'), /^#[0-9A-Fa-f]{6}$/);
  });

  it('should clip raw scores into [0, 100] interval', () => {
    const overflow = createProductScore(150);
    assert.equal(overflow.value, 100);
    assert.equal(overflow.tier, 'great');

    const underflow = createProductScore(-25);
    assert.equal(underflow.value, 0);
    assert.equal(underflow.tier, 'bad');
  });
});

describe('Tunisian Food Seed Catalog Integrity', () => {
  it('should contain valid Tunisian seed products', () => {
    assert.ok(SEED_PRODUCTS.length >= 6);

    for (const prod of SEED_PRODUCTS) {
      assert.ok(prod.id.startsWith('tn-'));
      assert.ok(prod.barcode.length >= 8);
      assert.ok(prod.name.length > 0);
      assert.ok(prod.brand.length > 0);
      assert.ok(prod.origin.includes('Tunisie'));
      assert.ok(prod.score.value >= 0 && prod.score.value <= 100);
      assert.ok(['a', 'b', 'c', 'd', 'e'].includes(prod.nutriScore));
      assert.ok([1, 2, 3, 4].includes(prod.novaGroup));
      assert.ok(prod.nutrition.energyKcal >= 0);
    }
  });

  it('should link valid alternatives with positive score gains', () => {
    for (const alt of SEED_ALTERNATIVES) {
      assert.ok(alt.gainScore > 0);
      assert.ok(alt.reasonFr.length > 10);
      assert.ok(alt.reasonAr.length > 10);
    }
  });
});

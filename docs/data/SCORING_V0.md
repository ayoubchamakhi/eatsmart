# Provisional scoring v0

This is an explainable interim product-selection aid, not a medical, safety, or diagnosis system. It must be versioned as `v0` and replaced only through an ADR.

## Inputs and gate

Nutrition is available only when energy, sugars, saturated fat, and salt are normalized per 100 g/ml. Ingredient/additive assessment is available only when a canonical ingredient list has accepted evidence. Data confidence combines evidence quality, source freshness, normalization validity, and review state.

Show an overall score only when both dimensions are available and data confidence is at least 80/100. Otherwise show `Insufficient data` and display missing facts and evidence quality plainly.

## Aggregate and labels

```text
overall = nutrition * 0.60 + ingredients_and_additives * 0.40
```

- `Good choice` for 75–100
- `Mixed choice` for 45–74
- `To limit` for 0–44

Display each contributing dimension and the confidence state. Do not convert uncertainty into a better health result. Alternatives use independent recommendation logic and must never be inferred solely from the aggregate score.

# Design system

## Token architecture

The single source of truth is structured token data in `packages/design-tokens`:

```text
primitives -> semantic tokens -> component tokens -> web/native mappings
```

Generate CSS custom properties for web and typed token maps for React Native. Token families include typography, color, spacing, sizing, radii, borders, elevation, motion, opacity, iconography, focus/interaction, score states, and data-quality states.

Build documented, accessible primitives before compositions: typography, buttons, links, inputs, search, navigation, tabs, sheets, dialogs, banners/toasts, list rows, product tiles, score visualization, nutrition, ingredients, allergens, scan states, loading/empty/error/permission states, contribution, and moderation.

`/design-system` documents purpose, anatomy, variants, states, accessibility, responsive behavior, motion behavior, platform deviations, and usage guidance for each component.

## Platform direction

Web is editorial, spacious, and visual-first. Do not default to repeated card grids or SaaS dashboards. iOS uses native navigation and selective Liquid Glass only where it clarifies hierarchy; Android follows Material 3/Expressive principles. Share language and tokens, not pixel-identical layouts.

`assets_v2/` is reusable brand reference material. It does not approve its illustrated screens, numerical score presentation, or card-heavy compositions. Product-result screens must reflect the confidence-gated dimensional score contract.

# Architecture

## Monorepo

```text
apps/web       Next.js App Router public web and admin surface
apps/mobile    Expo / React Native mobile concepts and scan flow
apps/api       Fastify API and background worker entry points
packages/domain          pure domain types and rules
packages/validation      Zod schemas for all boundaries
packages/api-client      typed shared client contracts
packages/design-tokens   token source and generated web/native outputs
packages/ui-web          accessible web components
packages/ui-native       native components and platform mappings
packages/config          shared runtime configuration
infra/                   container and staging deployment configuration
```

Fastify owns API, authorization, persistence, jobs, and provider adapters. Web and mobile consume typed API contracts and must not access PostgreSQL or provider SDKs directly. Domain rules and validation live in shared packages, not UI components.

## Interfaces and authority

Initial public contracts are anonymous barcode/product lookup and product detail. Authenticated contracts create ingredient-evidence contributions and correction suggestions. Admin-only contracts review contributions and edit canonical product facts. API details evolve behind versioned schemas.

Use Better Auth with a Drizzle/PostgreSQL adapter. Email/password accounts require verified email; Google and Facebook identities may link only under safe verified-email rules. Central capabilities include `product.read`, `product.suggest_update`, `product.edit`, `contribution.review`, `audit.read`, and `system.manage`.

## Jobs and providers

Use a PostgreSQL-backed job queue for imports, media processing, extraction, judging, reconciliation, indexing, notifications, and backup verification. Define `EvidenceExtractor` and `EvidenceJudge` interfaces. Google Cloud Vision and Vertex/Gemini implement them initially; UI and domain code receive only structured results, never provider response shapes.

`price_observation`, location, entitlement, syncable catalog subset, and food-log contracts remain separate from canonical product facts. Do not build their complete features in this milestone.

# eatsmart implementation contract

Status: approved for private-staging implementation
Audience: Gemini implementation agent and maintainers

## Outcome

Deliver a private OVH staging environment for the full first milestone: a token-driven web and mobile exploration, a Tunisian-relevant product-data foundation, an evidence-backed contribution/review slice, and reproducible operations. Public launch is not in scope.

## Fixed decisions

- Use a pnpm + Turborepo monorepo with Next.js, Expo/React Native, Fastify, PostgreSQL, Drizzle, Zod, and a modular monolith.
- Support French and Tunisian-influenced Arabic written in Arabic script. RTL is first-class; production Arabic copy requires Tunisian-editor approval.
- The catalog is a Tunisian-relevant OFF seed: Tunisia-tagged candidates plus a versioned registry of Tunisian brands, producers, and export barcodes. It is not a full OFF mirror.
- Mobile provides real barcode scanning. Web explains scanning and accepts typed or pasted barcodes.
- Anonymous users may browse and look up products. A verified account is required for contributions; admins alone operate review in this milestone.
- Authenticate with verified email/password, Google, and Facebook sign-in. Facebook sign-in fails safely when no usable email is returned.
- Google Cloud Vision and Vertex/Gemini are the first evidence-extraction/judging provider, behind replaceable internal interfaces.
- Store evidence privately on encrypted VPS storage for private staging only. Accepted evidence is retained for two years; rejected/abandoned evidence for 90 days. Object storage is mandatory before public beta.
- The provisional overall score is nutrition (60%) plus ingredients/additives (40%), only when data confidence is at least 80/100 and required facts are complete. Otherwise show `Insufficient data`. Use only `Good choice`, `Mixed choice`, and `To limit` labels; never make medical or safety claims.
- Supplied image assets are loose visual references, not approved screen specifications.

## Required deliverables

1. Eight responsive web routes: `/`, `/scan`, `/product/demo`, `/how-it-works`, `/alternatives`, `/contribute`, `/about`, and `/design-system`.
2. Four materially different mobile concepts: scan-first, product-first, editorial, and utility.
3. Shared tokens and domain/API contracts, with representative French/Arabic and LTR/RTL proof.
4. OFF candidate import, canonical provenance, registry, search, and data-quality reporting.
5. Unknown-barcode ingredient evidence capture, model-assisted review, admin accept/reject, correction suggestions, and direct admin corrections.
6. CI, reproducible private staging, health/logging, and tested database/evidence recovery.

## Delivery workflow

Work one unblocked GitHub issue at a time and commit directly to `main`. Every commit must reference its issue and contain only that issue's scope. Run the issue's required checks before pushing. CI runs after every push; a red result freezes new work until the failing issue is fixed or reverted. Deployments run only from green commits.

Read `AGENTS.md`, `GEMINI.md`, the project brief, and linked ADRs before implementation. ADRs resolve durable technical choices; the project brief resolves product choices. Stop and request maintainer direction for conflicting product, legal, or security requirements.

## Explicit non-scope

No public beta, billing, full offline synchronization, price maps, food logging, public moderation program, or full OFF mirror. Preserve domain boundaries for these capabilities without building their user-facing features.

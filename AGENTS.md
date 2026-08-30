# eatsmart repository instructions

## Source of truth

1. `EATSMART_PROJECT_BRIEF.md` defines product decisions.
2. `docs/adr/` defines durable technical decisions and their rationale.
3. `EATSMART_IMPLEMENTATION_PLAN.md` defines the approved milestone and delivery sequence.
4. Issue acceptance criteria define the current unit of work.

Do not silently invent, reverse, or broaden product requirements. If sources conflict, stop and ask a maintainer; do not resolve product conflicts in code.

## Delivery discipline

- Work one unblocked issue at a time and keep a commit scoped to that issue.
- Commit directly to `main` only after running the issue's required checks. Reference `#<issue>` in the commit message.
- A failed CI run freezes new work. Fix or revert the failing change before beginning another issue.
- Do not commit secrets, credentials, production exports, private evidence, or generated dependency folders.
- Never use destructive Git commands to discard unrelated work.

## Engineering rules

- Share domain rules, validation schemas, tokens, and API contracts. Do not duplicate business logic across web, native, and API.
- Validate every untrusted boundary with Zod and use centralized capability checks, not scattered role checks.
- Treat LLM and vision providers as replaceable infrastructure. Persist provenance, confidence, model/prompt versions, and review status.
- Keep product facts separate from user data, price observations, and future food logs.
- Build RTL, accessible semantics, keyboard/touch behavior, reduced motion, and reduced transparency into components rather than patching pages.
- Use mature dependencies where they fit; justify significant new dependencies in the relevant ADR or issue.

## Security and operations

- Anonymous users may read public product data; verified accounts are required for contributions; internal admins review and edit canonical data.
- Evidence is private. Enforce MIME, size, dimension, rate, and authorization limits before any model call.
- Never log secrets or unnecessary personal data. Use environment configuration and least-privilege credentials.
- Private VPS evidence storage is temporary. Object storage is required before public beta.

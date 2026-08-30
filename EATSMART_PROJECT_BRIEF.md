# eatsmart — Project Brief, Decision Grill, and Execution Contract

Status: Ready for architecture and design kickoff
Last reviewed: 2026-08-30

## 0. Purpose

This document is the project-specific source of truth for eatsmart.

It records settled product decisions, defines the first design and engineering milestone, identifies decisions that still need technical validation, and gives the implementation agent a bounded execution sequence.

Do not move settled decisions back into the unresolved list. Do not silently invent product requirements that are not stated here. When a technical choice remains open, propose a default, record the tradeoff, and make the choice easy to change.

The companion `PROJECT_CONSTITUTION_TEMPLATE.md` contains only rules intended to survive across projects. Project-specific facts belong here or in ADRs.

## 1. Product thesis

**eatsmart helps Tunisian shoppers choose packaged food more intelligently.**

The core loop is:

```text
discover -> scan/search -> understand -> compare -> trust -> contribute
```

The product is inspired by the useful product loop of Yuka, but it is not a visual or scoring clone. It is adapted to:

- Tunisian products
- Tunisian shoppers
- French and Arabic
- products exported from Tunisia and found abroad
- imperfect local labeling and data quality
- community contribution with human verification

The primary launch user is a **health-conscious shopper** who wants practical help choosing between packaged products.

The product should primarily help users:

1. choose products smartly
2. find better alternatives
3. understand why a product received its score
4. improve the database over time

## 2. Product family

Initial surfaces:

- public website / landing experience
- iOS application
- Android application
- backend API and data platform
- internal moderation and data-quality panel

Future product capabilities already anticipated by the architecture:

- price observed at the current scan location
- map-based store/location context
- local price history
- calorie tracking and food logging using the existing product data
- richer comparisons and recommendations

These are architectural constraints for extensibility, not first-milestone feature requirements.

## 3. Settled product decisions

### 3.1 Languages

Launch languages:

- French
- Arabic

The architecture must support true RTL from the beginning. Arabic is not a future CSS patch.

Do not assume Tunisian Arabic and Modern Standard Arabic are interchangeable. The first content strategy should define the Arabic register used by the product before substantial copy is authored.

### 3.2 Retail context

Important Tunisian supermarket examples:

- Monoprix
- Aziza
- Carrefour

The database should not limit products to those sold in these chains. The product universe is **any food product that can be found and validated**, with Tunisian relevance modeled separately.

### 3.3 Data coverage

Initial catalog goal:

**Import a Tunisian-relevant Open Food Facts seed catalog, then manually review and curate it.**

The seed is the union of products tagged as sold in Tunisia and products discovered through a versioned internal registry of Tunisian brands, producers, and known export barcodes. This deliberately replaces a full OFF mirror for the initial private-staging milestone.

A Tunisian product may appear outside Tunisia because it is exported. Store provenance and relevance as separate concepts.

### 3.4 Community contributions

When a user scans a product that is not known or not sufficiently complete, the user should be guided to contribute evidence.

The first contribution flow focuses on:

**ingredients only.**

The architecture should remain extensible to front-of-pack, nutrition, packaging, barcode, and price evidence later, but those do not need to be forced into the first contribution UI.

### 3.5 Verification hierarchy

Human reviewers are the final authority.

The intended pipeline is:

```text
user evidence
   |
   v
vision / extraction model
   |
   v
LLM judge
   |
   +---- uncertain / conflicting ----> human review
   |
   +---- internally consistent ------> provisional result
   |
   v
canonical product data
```

The LLM is an assistant and judge, not the source of truth.

Every important derived value must retain evidence, model/version metadata, confidence, and review status.

### 3.6 Correction model

Users must have a way to suggest an update.

Superadmins must have a way to update product data directly from the admin panel.

The correction system must preserve the previous value and its provenance where practical rather than silently destroying history.

### 3.7 Premium

Offline access is a premium capability.

The first release should not overbuild offline infrastructure. The architecture should make product caching and offline lookup possible later without redesigning the domain model.

## 4. Product score and methodology

The app will have a product score that improves over time.

The score should be inspired by the clarity and usefulness of Yuka, but must be independently specified rather than copied.

The methodology should be:

- explainable
- evidence-backed
- versioned
- deterministic where possible
- explicit about missing data
- tolerant of imperfect Tunisian labeling realities without becoming arbitrary

The product should follow relevant EU food-labeling and nutrition principles as the reference baseline, with documented local adaptations for Tunisia where needed.

Do not make medical claims.

A score must never hide uncertainty. A user should be able to understand which underlying product facts drove the result.

Recommended internal model:

```text
source facts
  -> normalized facts
  -> derived dimensions
  -> scoring methodology version
  -> score + explanation
```

Keep recommendation logic separate from the score so the two systems can evolve independently.

## 5. Future product capabilities to design for

### 5.1 Scan-location price

A future scan should be able to record:

- observed product
- observed price
- currency
- store / merchant
- geographic location
- observation timestamp
- evidence / source

This implies price observations should be modeled as an append-only observation stream rather than a single mutable `product.price` field.

### 5.2 Maps

Future price observations should be mappable by location.

Do not bind the domain model directly to one maps provider. Store canonical location data and keep provider-specific map rendering at the client/infrastructure boundary.

### 5.3 Calorie tracking

Future tracking should be built on product nutrition data already stored in eatsmart.

Do not mix product facts with user consumption events.

Future model direction:

```text
product nutrition facts
        |
        +---- serving definitions
        |
        +---- nutrient values

user food log
        |
        +---- consumed product
        +---- quantity
        +---- timestamp
```

This is a planned extensibility requirement, not first-milestone implementation scope.

## 6. Design direction

### 6.1 Experience principles

The product should feel:

- useful before clever
- editorial rather than enterprise
- premium without being flashy
- distinctly Tunisian without clichés
- calm, confident, and direct
- visual-first
- spacious and immersive on the web
- tactile and platform-native on mobile

### 6.2 What to reject

Do not use the default AI/SaaS visual language:

- dashboard-first consumer pages
- endless repeated card grids
- decorative metric walls
- gradient-heavy backgrounds with little purpose
- a rounded rectangle around every object
- arbitrary glass effects
- generic onboarding illustrations unrelated to the product
- dense admin UI patterns on public pages
- platform-neutral mobile UI that makes both iOS and Android look identical

Use the whole viewport when the composition calls for it.

### 6.3 Writing style

Product copy should be:

- direct
- factual
- compact
- useful
- confident about supported facts
- explicit about uncertainty
- natural in both launch languages

Avoid obvious AI-generated writing patterns:

- em dashes used as connective glue
- repetitive bullet lists
- fake enthusiasm
- empty startup language
- exaggerated claims
- repeated conclusions

Prefer a strong sentence over a paragraph of filler.

## 7. Design-system mandate

The design system is a primary milestone, not a side effect of page development.

The architecture is:

```text
primitives -> semantic tokens -> component tokens -> components -> compositions -> pages/screens
```

### 7.1 Token-first iteration

Tokens are expected to change during design iteration.

The implementation must make a token change propagate across the system without editing dozens of components manually.

Required token layers:

1. primitives
2. semantic tokens
3. component tokens
4. themes / platform mappings

Initial token families:

- typography
- color
- spacing
- sizing
- radii
- borders
- elevation / depth
- motion
- opacity
- iconography
- focus / interaction
- score states
- data-quality states

### 7.2 Design-system playground

The first implementation milestone must include a complete playground covering at least:

- typography
- color
- spacing
- shape
- depth
- motion
- icons
- buttons
- links
- inputs
- search
- navigation
- tabs
- sheets
- dialogs
- banners / toasts
- chips only where justified
- cards and list rows
- product tiles
- product score visualization
- nutrition facts
- ingredients
- allergens
- barcode scan states
- loading
- empty
- error
- permissions
- contribution
- moderation
- RTL
- accessibility

For each component document:

- purpose
- anatomy
- variants
- states
- accessibility
- responsive behavior
- motion behavior
- platform deviations
- usage guidance

## 8. First web milestone

Create **8 HTML routes** as a deliberate design exploration.

These pages are not the final marketing site. They are a proving ground for the design system, visual identity, typography, content hierarchy, and data presentation.

| Route | Purpose |
|---|---|
| `/` | Brand and product landing experience |
| `/scan` | Explain the scan journey |
| `/product/demo` | Rich product analysis with realistic data |
| `/how-it-works` | Explain scoring, ingredients, nutrition, and trust |
| `/alternatives` | Show better-product comparison concept |
| `/contribute` | Explain community contribution and review |
| `/about` | Mission, provenance, Tunisia focus |
| `/design-system` | Token and component playground |

At least three routes must have substantially different composition models.

Do not satisfy the milestone by repeating one generic page template.

## 9. First mobile exploration

Build **4 materially different concepts** around the same core flow before selecting the implementation direction.

Required flows:

- onboarding / first value proposition
- home
- scan entry
- scanning state
- product result
- ingredients detail
- contribution entry

Concept directions:

### A. Scan-first

Scan is the primary action and dominates the starting experience.

### B. Product-first

Search and recently seen products are primary, with scan one tap away.

### C. Editorial

The home experience emphasizes explanations, discovery, and trusted product guidance alongside scan.

### D. Utility

The experience emphasizes speed, scan history, cache/offline readiness, and correction/contribution tools.

These concepts must differ in information architecture and interaction model, not just color.

## 10. Mobile platform direction

### iOS

Use current iOS design conventions and Liquid Glass where functionally appropriate.

The current Expo stack provides a native `GlassView` path for iOS 26+ and falls back on unsupported platforms. Expo also documents iOS 26 Liquid Glass navigation behavior. citeturn348809search0turn348809search6

Therefore:

- prefer native-feeling navigation
- use Liquid Glass selectively
- let content remain visually primary
- support reduced transparency
- support reduced motion
- do not make the whole app glass

### Android

Use current Android platform conventions and Material 3 / Material 3 Expressive principles.

The Android implementation should not be a stretched iOS experience.

### Cross-platform rule

A React Native application is acceptable for both platforms.

Share the domain model, data contracts, business rules, and design language.

Do not force pixel-identical UI where platform conventions should differ.

## 11. Technology recommendation

This is the baseline unless implementation evidence invalidates it.

### Repository

**pnpm + Turborepo monorepo**

```text
apps/
  web/
  mobile/
  api/
packages/
  design-tokens/
  ui-web/
  ui-native/
  domain/
  api-client/
  validation/
  config/
  eslint-config/
  typescript-config/
infra/
docs/
```

### Web

**Next.js App Router** with React and server rendering where it improves SEO and performance.

Keep client-side state intentional.

### Mobile

**Expo + React Native**.

Use the current stable Expo / React Native pairing at implementation kickoff rather than hard-coding an old version in this document. Expo documents native Liquid Glass support for current iOS 26 builds. citeturn348809search0turn348809search9

### API

**Fastify + TypeScript** in a modular monolith.

### Database

**PostgreSQL**.

Use migrations and keep SQL-readable schema definitions.

### ORM

**Drizzle** where it improves developer ergonomics, without hiding the relational model.

### Validation

**Zod** at untrusted boundaries.

### Server state

**TanStack Query** for client-side server state where appropriate.

### Search

Start with PostgreSQL search, normalized search columns, and trigram indexing where useful.

Do not add Elasticsearch/OpenSearch without measured relevance or scale requirements.

### Queue / jobs

Start with Postgres-backed jobs where adequate.

Do not add Redis only because it is common in SaaS templates.

### Observability

Start with:

- structured logs
- error tracking
- health checks
- basic metrics

## 12. Why this stack

The goal is not to find the most fashionable stack. The goal is to maximize:

- maturity
- open-source availability
- agent friendliness
- ecosystem quality
- maintainability
- low duplication
- low infrastructure complexity
- easy hiring / handoff later

The codebase should prefer established libraries rather than recreating primitives.

Agents must be explicitly told to use the selected library when it covers the need.

## 13. Infrastructure

Initial deployment target:

**OVHcloud VPS**.

Target:

```text
Phase 1
single OVH VPS
  + reverse proxy / TLS
  + web
  + API
  + worker(s)
  + PostgreSQL
  + monitoring
  + backups

Phase 2
split compute / database / worker capacity as traffic and operations justify
```

The architecture must not depend on the database being on the same host forever.

### Backup

OVHcloud currently offers automatic VPS backups, including a daily standard option, and its current PostgreSQL guidance recommends separate database dumps plus server-level backups; PITR can be implemented with WAL-G and object storage. citeturn348809search2turn348809search1

For eatsmart, use **two backup layers**:

1. OVH VPS automated backup
2. PostgreSQL logical backups stored separately from the database host

Do not treat one backup mechanism as the whole disaster-recovery strategy.

### Domain and email

Target domain:

**eatsmart.tn** if legally and operationally available.

Email can be hosted with OVH if it fits the operational needs. Do not couple transactional email delivery to the VPS itself.

Configure:

- SPF
- DKIM
- DMARC

## 14. Open Food Facts ingestion strategy

Open Food Facts is the initial external dataset, not the final source of truth.

Current OFF documentation recommends API v3 for new integrations and explicitly warns that its community-provided data can be incomplete or inaccurate. The database is under ODbL, individual contents under DbCL, and product images are generally CC BY-SA. citeturn348809search11turn348809search4

### 14.1 Ingest a Tunisian-relevant seed, curate locally

The first external-data job should ingest the Tunisia-tagged OFF candidate set and candidate records discovered through the curated Tunisian registry. It must support future scope expansion without a domain-model rewrite, but it is not a full OFF mirror.

### 14.2 Tunisian relevance

Tunisian relevance should be a first-class derived concept built from multiple signals, for example:

- countries
- brands
- manufacturers
- manufacturing places
- origins
- known Tunisian brands / producers
- exporter mappings
- barcode / GTIN evidence
- store observations
- human curation

Store a relevance score and explanation rather than one opaque boolean.

### 14.3 Canonical data model

Separate:

```text
raw external record
  -> normalized record
  -> canonical product
  -> derived facts
  -> score / recommendation
```

Each important field set should preserve:

- source
- source ID / barcode
- import timestamp
- source snapshot/version where available
- transformation version
- confidence
- review state

### 14.4 Deduplication

Products must be deduplicated before becoming canonical.

Use stable identifiers where reliable, then layered matching across:

- GTIN
- normalized brand
- normalized product name
- package size
- ingredient similarity
- manufacturer
- image evidence where available

Do not merge records solely because their names look similar.

### 14.5 Updating external data

The initial ingest is a seed.

The system must support future imports and reconciliation without simply overwriting local truth.

For conflicts, preserve source evidence and create a resolution path.

### 14.6 Legal and attribution

Open Food Facts licensing and attribution obligations must be reviewed before commercial launch. Do not assume that copying data into a private database removes the original licensing obligations. citeturn348809search4

Create an explicit ADR / legal review for:

- attribution UI
- database share-alike implications
- image licensing
- derived-data boundaries
- user-contributed data licensing

## 15. Cross-cutting production requirements

These requirements apply across web, mobile, API, data ingestion, moderation, and infrastructure. They are not optional polish to be added after the MVP.

### 15.1 Identity, authentication, and authorization

Use a low-friction account boundary. The recommended default is:

- anonymous users can browse, search, and use the core scan/value loop
- an account is required for contribution history, synchronized data, saved state, premium entitlements, and moderation participation
- staff capabilities require authenticated staff accounts

This default should be validated during UX design before account-dependent features are implemented.

Initial role vocabulary:

```text
anonymous
user
premium_user
contributor
moderator
admin
superadmin
```

Authorization must use centralized capabilities rather than scattered role checks. Example capabilities:

```text
product.read
product.suggest_update
product.edit
product.approve
product.reject
contribution.review
user.suspend
audit.read
system.manage
```

Authentication must plan for verified email where email login is used, secure password reset, session revocation, brute-force protection, rate limiting, account deletion, and data export where required.

Use a mature authentication solution rather than inventing a protocol. Passwords, where applicable, should use a modern memory-hard password hashing algorithm such as Argon2id.

### 15.2 Security baseline

Security follows an OWASP-aligned baseline covering:

- strict input validation at trust boundaries
- parameterized database access
- XSS protections and safe output encoding
- CSRF protection where cookie-authenticated browser actions require it
- secure HTTP headers and an appropriate content-security policy
- rate limiting and abuse controls
- secure file upload validation
- image processing isolation and resource limits
- SSRF protection for server-side fetches
- safe error handling without leaking internals
- dependency vulnerability scanning

Secrets must never be committed to Git, embedded in client bundles, or copied into tickets. This includes database credentials, LLM keys, OAuth secrets, signing keys, SSH keys, and production environment variables.

Implementation agents must never receive unrestricted production credentials merely to build or debug a feature.

### 15.3 Infrastructure security

The initial OVH VPS should use at least:

- key-based SSH
- restricted firewall rules
- non-root application processes
- controlled security patching
- TLS everywhere
- externalized secrets/configuration
- least-privilege database users
- no unnecessary public database exposure
- auditable administrative access

### 15.4 Privacy and data governance

Keep product/catalog data separate from user data.

Potential user data includes:

- account identifiers
- scan history
- contribution history
- saved products
- location observations
- premium status
- future food-log data

Support data minimization, purpose limitation, retention policies, deletion, anonymization/aggregation where appropriate, consent/preferences where required, and separation of analytics from core product records.

Do not collect precise location merely because it might be useful later. Collect it only when a user-facing feature requires it.

Before launch, review applicable Tunisian legal requirements and any applicable EU/GDPR obligations for the markets served.

### 15.5 Canonical data model, provenance, and product identity

The canonical database must distinguish external source records from eatsmart truth.

Recommended conceptual chain:

```text
external/raw record
        -> normalized record
        -> canonical product
        -> product facts
        -> derived score / recommendations
```

Important entities should be modeled separately rather than flattened into one product table:

```text
product
brand
manufacturer
product_variant
barcode / GTIN
product_source
ingredient
nutrition_snapshot
retailer
store_location
price_observation
contribution
review
score_snapshot
```

Do not treat a barcode as proof that all regional or historical formulations are identical forever. Model variants and historical facts when evidence requires it.

For significant fields and derived values preserve, where practical:

- source
- source record identifier
- import timestamp
- transformation version
- confidence
- verification state
- reviewer
- review timestamp

Prefer append-only evidence and change records over destructive edits. The system should be able to answer: what was the value, where did it come from, who changed it, and why is the current value trusted?

### 15.6 Moderation and audit trail

Because AI assists with product validation, the system must maintain an auditable review lifecycle:

```text
submission
  -> extraction
  -> AI validation
  -> human review
  -> accepted / rejected / needs-more-evidence
  -> canonical fact
```

Every moderation action should record actor, action, target entity, previous value when applicable, new value when applicable, evidence reference, and timestamp.

AI-produced information may be provisional. Human approval is authoritative.

### 15.7 LLM and computer-vision architecture

LLMs and vision models are replaceable infrastructure. Provider-specific calls must not be scattered through product code.

Use a stable internal abstraction:

```text
media / evidence
      -> vision extraction
      -> structured result
      -> validation
      -> judge
      -> moderation decision
```

Record enough metadata to audit model-assisted decisions:

- provider
- model identifier/version
- prompt or policy version
- input reference
- structured output
- confidence
- validation outcome
- latency/cost metadata where useful

The product must remain operable if the preferred model provider changes.

### 15.8 AI abuse and cost controls

AI-triggering paths require:

- rate limits and abuse controls
- file size and dimension limits
- preprocessing/compression
- caching and deduplication before expensive inference
- bounded retries
- asynchronous processing for long jobs
- per-user and system spend visibility

### 15.9 Media and evidence storage

Ingredient photos and future evidence should use object storage, not large PostgreSQL blobs.

Require file type validation, size limits, generated identifiers, image dimension limits, controlled access, retention policy, and provenance metadata.

Uploaded files must not become publicly accessible by default.

### 15.10 Search and discovery

Search must support barcode/GTIN, product name, brand, French terms, Arabic terms, and normalized aliases.

Start with PostgreSQL search and appropriate indexing. Add a dedicated search engine only after measured relevance or scale requirements justify it.

French and Arabic must be treated as first-class search inputs.

### 15.11 Offline architecture boundary

Offline is premium, but the first architecture must preserve the option without a rewrite.

Future direction:

```text
canonical server catalog
       -> syncable subset
       -> local device store
       -> local barcode lookup
```

The exact synchronization mechanism is deferred. Do not make core domain logic assume permanent connectivity.

### 15.12 Background jobs

Long-running or retryable work must not block ordinary API requests.

Likely jobs include OFF import, normalization, deduplication, image processing, AI extraction, AI judging, moderation notifications, search indexing, backup verification, and analytics aggregation.

Start with the least complex reliable mechanism. A PostgreSQL-backed queue is acceptable at initial scale.

### 15.13 Observability

Production telemetry must answer at least:

- Is the service healthy?
- What is failing?
- Are scans failing?
- Are AI jobs stuck?
- Are database operations slow?
- Are backups succeeding?
- Are authentication attacks occurring?
- Is moderation backlog growing?

Initial baseline:

- structured logs
- error tracking
- health checks
- basic application/database metrics
- administrative audit events

Never log secrets or unnecessary personal data.

### 15.14 Environments, CI/CD, and release discipline

Use at least:

```text
local
staging
production
```

CI should gate merges with formatting, lint, type checking, relevant tests, build validation, migration checks, and dependency/security checks.

Production changes must be reproducible from Git and deployment configuration.

Implementation agents should work through branches and pull requests and must not bypass the review pipeline.

### 15.15 Backup, recovery, and disaster readiness

The initial system should have:

1. OVH infrastructure-level backup
2. separate PostgreSQL backups
3. a documented restore procedure
4. periodic restore verification

The database backup path must not depend on the only copy of the database living on the same VPS.

Recovery objectives can be refined later, but the restoration workflow must exist early.

### 15.16 Pricing and location model

Do not put price directly on `product`. Prices are observations.

Future model direction:

```text
price_observation
  product_id
  retailer_id
  store_id
  amount
  currency
  observed_at
  location
  source
  submitted_by
  verification_status
```

This supports price history, retailer comparison, maps, and community corrections without corrupting product identity.

### 15.17 Subscription and premium entitlement boundary

Premium must be modeled as an entitlement system rather than scattered boolean checks.

Future conceptual entities:

```text
subscription
entitlement
purchase_reference
platform
status
starts_at
expires_at
```

Do not build billing into the first design-system milestone. Keep platform purchase handling behind a service boundary.

### 15.18 Accessibility

Accessibility is part of the design system, including:

- semantic HTML
- screen-reader labels
- keyboard navigation
- sufficient contrast
- scalable typography
- accessible touch targets
- reduced motion
- reduced transparency where supported
- correct RTL behavior
- status indications that do not rely only on color

### 15.19 Testing strategy

Use layered testing:

```text
unit
integration
API contract
component
visual regression where valuable
end-to-end
mobile smoke
security
data-import
migration
```

Create a curated set of golden product fixtures that exercise:

```text
input evidence
  -> extraction
  -> normalization
  -> scoring
  -> explanation
  -> recommendation
```

Use this corpus as a regression suite whenever models, prompts, normalization logic, or scoring rules change.

### 15.20 Dependency governance

Prefer mature, well-maintained open-source libraries over custom implementations.

Before adding a significant dependency, record its purpose, license, maintenance health, security history where relevant, ecosystem adoption, runtime/bundle impact, and alternatives considered.

Do not add a library merely because an implementation agent finds it convenient. Avoid duplicate libraries for the same concern.

### 15.21 Legal and intellectual-property review

Before commercial launch, explicitly review:

- Open Food Facts licensing and attribution
- Open Food Facts image licensing
- user-contributed content terms
- privacy/data-processing obligations
- terms of service
- retailer and brand marks
- independent visual identity and scoring methodology

The product can learn from category conventions without copying protected branding, copy, assets, or proprietary implementation.



## 16. Contribution and moderation model

Initial unknown-product flow:

```text
barcode unknown
    |
    v
ask user for ingredient evidence
    |
    v
vision / OCR extraction
    |
    v
LLM judge checks evidence against extraction
    |
    v
human review when required
    |
    v
canonical ingredient data
```

### Authority

**Human is king.**

A human-approved correction should be able to supersede an LLM result.

### Review record

For every reviewed contribution keep:

- contributor
- evidence reference
- model used
- model output
- confidence
- reviewer
- reviewer decision
- timestamps
- previous value
- accepted value

## 17. Scan architecture

The scan domain should be designed as a reusable capability that later supports:

- barcode identification
- location-aware price observation
- ingredient contribution
- product corrections
- scan history
- offline cached product access

Do not tie scanning directly to a screen component.

The domain boundary should support multiple acquisition sources:

```text
barcode
image
search
manual lookup
```

## 18. GitHub delivery model

The project will be planned in ChatGPT / high-reasoning planning mode and executed by Gemini or another implementation agent.

Therefore every GitHub issue must be sufficiently explicit that an implementation agent can act without reconstructing product decisions from chat history.

Each non-trivial ticket must contain:

```text
Goal
Context
Scope
Non-scope
Dependencies
Acceptance criteria
Test expectations
References
Files / packages likely to change
Open decisions
```

### Ticket writing rule

Do not write tickets like:

> Build the scan flow.

Write tickets like an executable engineering contract with observable acceptance criteria.

## 19. Initial GitHub epic structure

### EPIC A — Foundation

- repository bootstrap
- CI quality gates
- local development
- environment configuration
- base OVH deployment
- logging / errors / health checks

### EPIC B — Design system

- token schema
- token build pipeline
- web/native token outputs
- typography
- semantic colors
- spacing / shape / depth
- motion
- web primitives
- native primitives
- component catalog
- accessibility / RTL foundations
- playground

### EPIC C — Web exploration

- route shell
- landing concepts
- product analysis page
- scan explainer
- alternatives page
- how it works
- contribution page
- about page
- design-system playground

### EPIC D — Mobile exploration

- app shell
- scan-first concept
- product-first concept
- editorial concept
- utility concept
- platform adaptation review

### EPIC E — Data foundation

- OFF raw ingest
- normalized schema
- provenance
- Tunisian relevance engine
- brand / producer registry
- deduplication
- reconciliation
- search
- data-quality report

### EPIC F — Contribution

- barcode lookup
- unknown barcode state
- ingredient capture
- extraction pipeline
- LLM judge
- review queue
- human approval
- correction workflow

### EPIC G — Product intelligence

- scoring methodology spec
- deterministic scoring engine
- explanation model
- evidence display
- alternative / recommendation logic
- score versioning

### EPIC H — Future extensibility foundations

Not first-release feature work. Only create underlying domain structures when they are cheap and clearly useful:

- price observation model
- location model
- map provider boundary
- calorie / food-log domain boundary
- offline cache boundary

Do not build full price tracking, calorie tracking, or paid subscription systems in the first milestone unless explicitly reprioritized.

## 20. Definition of done for the first major milestone

The milestone is complete when:

- 8 web routes exist as working explorations
- 4 mobile concepts exist as working flows
- token changes visibly propagate
- the design system is documented and used by the pages/screens
- French and Arabic are represented in the content system
- RTL is proven on representative screens
- a real OFF-derived sample is loaded into the local database
- Tunisian relevance is represented explicitly
- provenance survives normalization
- an unknown barcode can enter the contribution flow
- ingredient evidence can be captured
- an LLM-assisted review result can be produced
- a human can approve or reject it in the review surface
- users can submit a correction suggestion
- superadmins can directly correct product data
- critical score and normalization rules have tests
- local development is documented
- the first OVH deployment is reproducible
- PostgreSQL backups are tested, not merely configured
- no known duplicated business logic exists across web, mobile, and API

## 21. What is still intentionally open

These are the remaining decisions worth resolving before later implementation accelerates.

### 20.1 Score methodology

The product has chosen to have a score, but the exact scientific formula is not yet fixed.

Create a scoring ADR before implementation of the final score.

### 20.2 Arabic register

Arabic is a launch language, but the exact copy register needs a deliberate decision:

- Modern Standard Arabic
- Tunisian-influenced Arabic
- a controlled combination by context

This is a content-system decision, not an infrastructure blocker.

### 20.3 Account model

The project brief has not yet fixed whether scanning is possible anonymously, whether contribution requires an account, or when authentication enters the journey.

Default recommendation:

- anonymous scan/search for the core value loop
- account required for contribution history, moderation privileges, sync, and premium features

### 20.4 Exact premium model

Offline is premium, but the final subscription / entitlement model is not defined.

Do not implement billing in the first design-system milestone.

### 20.5 Exact scoped OFF import mechanism

Use the current documented OFF API / export mechanisms for the Tunisian-relevant candidate set. Choose the ingest method based on reproducibility, rate limits, and local storage requirements.

Do not make the entire architecture depend on live per-request OFF API calls.

## 22. Recommended defaults

| Decision | Default |
|---|---|
| Repo | pnpm + Turborepo monorepo |
| Web | Next.js App Router |
| Mobile | Expo + React Native |
| iOS glass | native Expo GlassView where appropriate |
| Android | Material 3 / Material 3 Expressive principles |
| API | Fastify + TypeScript |
| Database | PostgreSQL |
| ORM | Drizzle |
| Validation | Zod |
| Server state | TanStack Query |
| Search | PostgreSQL first |
| Jobs | Postgres-backed first |
| Architecture | modular monolith |
| Hosting | OVH VPS |
| Backup | OVH VPS backup + separate PostgreSQL backups |
| Domain | eatsmart.tn if available |
| Languages | French + Arabic |
| RTL | from day one |
| Data seed | Tunisian OFF candidate ingest + curated registry |
| Data authority | human review |
| AI role | extraction assistant + judge, never final authority |
| First web milestone | 8 routes |
| First mobile milestone | 4 directions |
| Design source of truth | tokens |
| Future price model | observation events |
| Future calorie model | product facts + user food-log events |

## 23. First execution sequence

The implementation agent must not start by building every feature.

### Step 1

Read:

- `PROJECT_CONSTITUTION_TEMPLATE.md`
- this file

### Step 2

Create ADRs for:

- architecture stack
- token pipeline
- OFF ingestion / licensing assumptions
- scoring methodology placeholder
- authentication boundary

### Step 3

Bootstrap the monorepo and quality gates.

### Step 4

Build the token source of truth and design-system playground.

### Step 5

Implement the first 3 web routes:

- `/`
- `/product/demo`
- `/design-system`

### Step 6

Build the 4 mobile concept flows using the same domain contracts and token system.

### Step 7

Stop for visual review.

### Step 8

Iterate tokens and compositions before expanding the remaining routes.

### Step 9

Build the first data pipeline against a small, reproducible OFF sample before attempting the broad import.

### Step 10

Only after the above is stable, create the full GitHub ticket breakdown and execute data / scan / scoring work in vertical slices.

## 24. Planning-agent instruction

The planning model should behave as a demanding product and engineering reviewer.

For every major decision, ask:

1. Is this actually necessary for the first milestone?
2. Is there already a vetted library that solves this?
3. Is this decision encoded at the correct layer?
4. Will this create duplication across web, mobile, and API?
5. Does this preserve future extensibility without building the future now?
6. What evidence would invalidate the decision?
7. Can Gemini implement it without guessing?

The planning model should generate GitHub tickets only after contradictions are resolved and acceptance criteria are observable.

## 25. Current project verdict

**The product direction is sufficiently defined to begin design-system and architecture work.**

The next high-value decisions are not “what framework?” questions. They are:

- exact score methodology
- Arabic content register
- authentication boundary
- OFF ingestion/legal implementation details
- the visual winner among the web and mobile concept directions

Those can be resolved without changing the core stack or the overall architecture.

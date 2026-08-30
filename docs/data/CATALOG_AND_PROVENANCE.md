# Catalog and provenance

## Catalog scope

Initial imports target a Tunisian-relevant OFF seed, not a complete OFF mirror:

1. OFF records tagged as sold in Tunisia.
2. Candidate records matched through a versioned registry of Tunisian brands, producers, and known export barcodes.
3. Human-curated candidates discovered from reliable evidence.

Each import run records source endpoint/export version, checksum or ETag, parameters, started/completed timestamps, transformation version, and outcomes. The design permits future expansion without reworking canonical identity.

## Canonical chain

```text
source record -> normalized record -> canonical product/variant -> product fact -> score snapshot
```

Keep source records, product variants, barcodes, brands, manufacturers, nutrition snapshots, ingredient facts, evidence assets, contributions, reviews, audit events, and score snapshots separate. A barcode does not prove a formulation is immutable across time or markets.

Every important fact records source, source identifier, timestamps, transformation version, confidence, verification state, and reviewer where applicable. Corrections preserve prior values and reasons. Deduplication layers stable identifiers before normalized brand/name, package size, manufacturer, ingredient similarity, and image evidence; name similarity alone never merges products.

OFF image copies used in private staging keep original URL, hash, timestamp, license, and attribution metadata. They cannot be made public until licensing/attribution review is complete.

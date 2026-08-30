# Security and operations

## Environment and deployment

Use local, private staging, and production environments. This milestone deploys only private staging on the smallest viable OVH VPS. Web, API, worker, reverse proxy, and PostgreSQL are containerized. The database endpoint and media abstraction must support later separation from the VPS.

Deploy only green `main` commits. CI checks formatting, linting, type checks, tests, builds, migration validation, and dependency/security scanning. A red CI result blocks deployment and new issue work.

## Evidence-storage exception

Private staging stores contribution evidence on an application-managed encrypted VPS volume. Files use generated IDs; access is authorized through the application; MIME, dimensions, file size, rate limits, and image-processing resource limits are enforced. Accepted evidence is kept for two years, rejected/abandoned evidence for 90 days.

This is not a public-launch design. Before public beta, migrate private evidence to object storage with controlled access and equivalent provenance. Never expose uploads by default.

## Backup and recovery

Enable OVH infrastructure backup and create daily encrypted logical PostgreSQL plus evidence archives stored off-host. Document a restore runbook and prove a full restore before the milestone closes. Record backup/restore outcomes in monitoring.

## Security baseline

Use TLS, key-only SSH, restrictive firewall rules, non-root services, least-privilege database users, secure headers, CSP, CSRF controls for cookie-authenticated actions, rate limits, safe errors, parameterized database access, SSRF protections, and no public database exposure. Secrets live only in environment/secret configuration and must never enter Git, logs, tickets, or clients.

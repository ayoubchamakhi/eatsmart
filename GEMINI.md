# Gemini operating guide

1. Select one open, unblocked `gemini-ready` issue at a time, starting with the lowest-numbered `priority:P0` issue.
2. Read the issue, `AGENTS.md`, `EATSMART_PROJECT_BRIEF.md`, `EATSMART_IMPLEMENTATION_PLAN.md`, and all linked ADRs before editing.
3. Implement only the issue scope. Preserve existing user changes and do not expand into future work.
4. Run every command listed in **Test expectations**. Add or update tests required by the issue.
5. Commit directly to `main` with `type(scope): summary (#issue-number)`.
6. Wait for CI. If it is red, fix or revert that issue before selecting another one. Do not deploy from a red commit.
7. Stop and ask a maintainer if an issue requires a product choice, production secret, legal judgment, destructive operation, or a new external service not already approved.

Keep UI copy factual, compact, and non-medical. Treat Arabic RTL and accessibility as acceptance criteria, not polish.

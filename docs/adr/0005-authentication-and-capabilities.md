# ADR 0005: authentication and capabilities

Status: accepted

Use Better Auth with PostgreSQL/Drizzle for verified email/password, Google, and Facebook identity. Password hashing uses Better Auth's documented memory-hard scrypt implementation. Anonymous users can browse; verified users contribute; internal admins review and edit. Authorization is centralized through capabilities rather than scattered role checks.

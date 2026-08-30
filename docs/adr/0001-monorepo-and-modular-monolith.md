# ADR 0001: pnpm monorepo and modular monolith

Status: accepted

Use pnpm and Turborepo with Next.js, Expo/React Native, Fastify, PostgreSQL, Drizzle, Zod, and shared domain/validation/token/client packages. Fastify is a modular monolith with worker entry points, not a microservice fleet. This minimizes duplicated rules and operational complexity while retaining clear boundaries for later extraction.

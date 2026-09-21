# ADR 0001: Use a small full-stack monorepo

- **Status:** Accepted
- **Date:** 2026-09-21

## Context
The portfolio needs to show frontend and backend engineering together while remaining easy for a recruiter or hiring manager to run.

## Decision
Use one repository with a React/Vite frontend, Spring Boot backend, shared product documentation, and Docker-based local orchestration.

## Consequences
The repository has a clear single-entry story and shared CI. It does not claim independent deployment pipelines or microservice complexity that the product does not need yet.

# Security Policy

## Supported versions

| Version / branch | Supported          |
| ------------------ | ------------------ |
| `master` (latest)  | :white_check_mark: |
| older deployments  | :x:                |

Security fixes apply to the default branch and whatever is currently deployed at [garretpatten.com](https://garretpatten.com).

## Reporting a vulnerability

Report a vulnerability directly to the maintainer at [garret.patten@proton.me](mailto:garret.patten@proton.me). Do not open public GitHub issues for security-sensitive reports.

If a vulnerability is accepted, updates will be given on meaningful status changes. If a report is declined, brief reasoning will be provided.

## Scope

This repository is a static personal portfolio (Vue + Vite, hosted on Cloudflare Pages). It has no server-side application code or user accounts. Still report issues that affect visitors—XSS, dependency vulnerabilities, misconfigured redirects, leaked secrets in the build or repo, or similar.

Do not commit secrets, credentials, or sensitive personal data. Pull requests run automated security checks (Semgrep, Trufflehog) via the [Security Guardrails](https://github.com/garretpatten/security-guardrails) workflow.

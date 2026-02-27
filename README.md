# QA API Portfolio — ReqRes (Manual) + JSONPlaceholder (CI Automation)

This repository demonstrates my QA workflow for a backend/API product:
- Manual QA documentation (test plan, test cases, bug reports)
- API test automation using **Node.js + Mocha + Chai + Supertest**
- CI execution using **GitHub Actions**

## Manual testing target (documentation)
- **ReqRes API**: https://reqres.in/

## Automated testing target (CI)
- **JSONPlaceholder API**: https://jsonplaceholder.typicode.com

## Why automation targets JSONPlaceholder
ReqRes is protected by Cloudflare and returns **403 (challenge)** from GitHub-hosted CI runners.
To keep a stable, green CI pipeline, automated tests run against JSONPlaceholder, while ReqRes is used for manual test planning/cases examples.

## Repository structure
- `test-plan/` — test plan and scope
- `test-cases/` — test cases (CSV)
- `bug-reports/` — example defect reports
- `api-tests/` — automated API tests (Mocha/Chai/Supertest)
- `.github/workflows/` — CI pipeline

## Run tests locally
```bash
cd api-tests
npm install
npm test
```

## Notes
Public APIs can change behavior without notice. This portfolio focuses on **test design, documentation quality, and automation practices**.

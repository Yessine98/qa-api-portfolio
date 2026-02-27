# Bug Report: Negative pagination value behavior not specified

## Environment
- API: https://reqres.in
- Endpoint: GET /api/users?page=-1
- Date: 2026-02-27

## Steps to reproduce
1. Send GET https://reqres.in/api/users?page=-1

## Expected
Defined behavior (e.g., 400 validation error or coercion to page=1) and documentation.

## Actual
Behavior is not clearly documented.

## Severity / Priority
Severity: Low
Priority: Low

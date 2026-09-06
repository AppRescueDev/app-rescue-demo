# Rescue Notes

This is a portfolio demonstration for an AI/vibe-coded app rescue service. It is not client work and does not reuse private project code.

## Original Symptoms

- Production deploy failed even though local preview looked fine.
- Authentication worked once, then looped or lost state after refresh.
- Database writes appeared successful but no records were created.
- Mobile layout clipped controls and long labels.

## Stabilization Approach

1. Reproduce the failure from logs and screenshots.
2. Separate symptoms into build, auth, API/database, and UI categories.
3. Fix root causes before adding or changing features.
4. Confirm production build.
5. Write handover notes with remaining risks.

## What This Shows

- React component cleanup.
- Deployment-focused debugging.
- Environment variable and API failure handling.
- Practical project scoping for small rescue jobs.

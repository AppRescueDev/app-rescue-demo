# Rescue Notes

This is a portfolio demonstration for an AI/vibe-coded app rescue service. It is not client work and does not reuse private project code.

## Original Symptoms

- Production deploy failed even though local preview looked fine.
- Authentication worked once, then looped or lost state after refresh.
- Database writes appeared successful but no records were created.
- Mobile layout clipped controls and long labels.

## Stabilization Approach

1. Reproduce the failure from logs and screenshots.
2. Separate visible symptoms from likely root causes.
3. Stabilize the app before changing or adding features.
4. Confirm production build.
5. Write handover notes with remaining risks.

## What This Shows

- React component cleanup.
- Deployment-focused debugging.
- Environment and API readiness checks.
- Practical project scoping for small rescue jobs.

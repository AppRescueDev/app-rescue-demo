# Broken State Snapshot

This document describes the fictional broken starting point for the demo. Use it when explaining the repo to buyers.

## Simulated Broken Issues

- Missing helper imports caused production builds to fail.
- Auth state was scattered across components and reset on refresh.
- Database writes swallowed errors, making failed saves look successful.
- Environment variables were not listed anywhere.
- Generated CSS used fixed widths that broke mobile layouts.

## Why The Main Branch Is Fixed

The public `main` branch stays deployable so clients can inspect the finished result quickly. A separate `broken-start` branch can be used to show a deliberately broken snapshot when we want the repo history to tell the rescue story.

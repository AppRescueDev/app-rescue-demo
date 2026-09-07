# Broken State Snapshot

This document describes the fictional broken starting point for the demo. Use it when explaining the repo to buyers.

## Simulated Broken Issues

- Production builds failed even though previews appeared to work.
- Users could hit a login loop or lose session state after refresh.
- Save actions appeared successful but did not reliably create records.
- Required environment setup was unclear.
- Mobile layouts clipped important controls and longer labels.

## Why The Main Branch Is Fixed

The public `main` branch stays deployable so clients can inspect the finished result quickly. A separate `broken-start` branch can be used to show a deliberately broken snapshot when we want the repo history to tell the rescue story.

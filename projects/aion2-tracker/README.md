# AION 2 Progress Tracker

A static, single-page checklist for AION 2:

- **Gearing**: the 45 → 1400 → 1600 → 2100 → 2500+ progression checklist, which shows where you are based on your item level
- **Dailies / Weeklies**: these clear automatically at the global reset (daily 07:00 UTC, weekly Wednesday 07:00 UTC)
- **Events**: time-limited event checklists that drop off the list once the event ends
- **World schedule**: the next Shugo Festival, Invasion, Rift, Siege and so on, shown in your local time
- Multiple characters, with progress saved in your browser and JSON export/import for backups

## Deploy to GitHub Pages

1. Create a new public repo on GitHub, e.g. `aion2-tracker`.
2. Upload `index.html`, `README.md` and `.nojekyll` (drag them onto the repo page, or push with git:
   `git init && git add . && git commit -m "init" && git branch -M main && git remote add origin https://github.com/<you>/aion2-tracker.git && git push -u origin main`).
3. In the repo, go to **Settings → Pages → Build and deployment**, set **Source: Deploy from a branch**, choose **Branch: `main` / `(root)`**, then click **Save**.
4. After about a minute the site is live at `https://<you>.github.io/aion2-tracker/`.

## Updating content

All checklist data sits at the top of the `<script>` in `index.html` (`PROGRESSION`, `DAILIES`, `WEEKLIES`, `EVENTS`, `SCHEDULE`).
Keep item `id`s stable so saved progress survives updates. To add a new event, add another entry to `EVENTS` with an `end` date.

The gearing checklist is adapted from the community gearing sheet:
https://docs.google.com/spreadsheets/d/1qcq5GwmxjeoXuVogtD0U-KhaUnzECAjAQnn-iTHyGXU

Unofficial fan tool, not affiliated with NCSOFT.

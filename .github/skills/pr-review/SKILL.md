---
name: pr-review
description: >
  Review a pull request on pnp/powerplatform-snippets against the repo's
  contribution guidance. Use when the user asks to "review a PR", "check a
  pull request", or "look at PR #N" in this repo. Checks structure, README
  template, sample.json metadata, and folder naming rules, and prints
  reviewer-ready comments.
---

# PR Review (powerplatform-snippets)

Review a pull request against `CONTRIBUTING.md` and template rules, then
report findings ready to post as review comments.

## Steps

1. Identify the PR: `gh pr view <number> --repo pnp/powerplatform-snippets --json title,body,files,commits,mergeable`
2. Get the diff: `gh pr diff <number> --repo pnp/powerplatform-snippets`
3. Check the changed files against these rules from `CONTRIBUTING.md`:
   - One sample/change per PR — flag if unrelated samples or docs are mixed together.
   - New sample has a `README.md` (exact casing) based on `/templates/*/README.md`, with a screenshot referenced in `/assets/`.
   - README ends with the telemetry tracking `<img>` tag with `src` pointing to
     `https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/<repository-relative-snippet-path>`,
     matching the snippet folder's repository-relative path.
   - Sample folder name: all lowercase, no `sample`/`powerapp`/`powerapps` in the name, no periods/dots.
     Copilot Studio plugin action snippets use `-ac`/`-txt`/`-ai` suffixes as appropriate.
   - If a `sample.json` (or similar asset metadata) is present, check `title`,
     `shortDescription`/`longDescription`, and preview `url` match the actual sample —
     do NOT flag `creationDateTime`/`updateDateTime` values as an issue by
     themselves; those are expected to shift when a PR sits open a long time
     before merge, and are not a meaningful review signal.
   - Preview image/gif URL should point at a real, permanent location (e.g.
     `raw.githubusercontent.com/pnp/powerplatform-snippets/main/...`), not a
     personal fork's blob URL or a branch/commit that can be force-pushed away.
4. Skim the commit list (`gh pr view <number> --json commits`) for a sense of what
   was fixed post-review (e.g. broken image links, wrong metadata/title) —
   useful context, not itself a blocker unless still unresolved in the latest diff.
5. Summarize findings as a short reviewer comment list: blocking issues first,
   then nits. Cite exact file paths and line content from the diff.

## Notes

- Prefer `gh` CLI over other GitHub tooling for this repo.
- This skill is read-only: it does not push commits or edit the PR unless the
  user explicitly asks for that as a follow-up.

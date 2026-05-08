---
name: pre-pr-review-fixes
description: Fix pull request feedback before opening or updating a PR. Use when the user asks to address reviewer comments, clean up docs/style issues before PR, or apply repeated feedback patterns (wording, headings, spacing, capitalization, markdown tables, and consistency fixes).
disable-model-invocation: true
---

# Pre-PR Review Fixes

Use this skill to systematically apply reviewer feedback before creating or updating a PR.

## When to use

- User asks to "fix PR comments" or "address review feedback"
- User asks to "prepare this for PR" or "clean this up before PR"
- Same reviewer repeatedly flags style/structure issues across multiple files

## Why this is a skill (not a rule)

- This workflow is task-specific and should run on demand.
- A global rule would trigger too often and add overhead to unrelated tasks.
- Skills are easier to extend with new reviewer patterns over time.

## Inputs expected

- PR URL or PR number
- Reviewer name(s) to prioritize (if applicable)
- Optional scope limits (files/folders)

## Workflow

1. Fetch review feedback
   - Pull top-level review summaries and inline comments.
   - Filter to actionable reviewer comments (ignore bot noise unless requested).
2. Build an action list
   - Group comments by file and section.
   - Normalize into concrete edits (wording, formatting, structure, examples, links).
   - Deduplicate repeated comments and mark global patterns to apply throughout.
3. Apply fixes in files
   - Edit only requested/scope-relevant files.
   - Keep existing technical intent; change style/clarity unless behavior changes are requested.
4. Validate
   - Run lints on edited files.
   - Re-read changed sections to ensure comment intent is fully addressed.
5. Report back
   - List updated files.
   - Map key edits to reviewer themes.
   - Call out any comments that were ambiguous or not applicable.

## Common docs fixes checklist

- Add a context paragraph before a heading/table when needed
- Avoid bold text as faux headings; use real heading levels
- Use italics (not bold) for light emphasis when requested
- Remove extra blank lines (keep one empty line between blocks)
- Fix incomplete/ambiguous phrasing
- Standardize reference style: "For ..., refer to [Link](url)."
- Replace vague endings like `etc.` with explicit wording
- Keep capitalization consistent across bullets/tables
- Ensure markdown tables are valid and readable

## Comment triage rules

- **Apply directly:** explicit suggestions and clear style requests
- **Apply throughout:** repeated reviewer guidance across multiple files
- **Ask user before changing:** unclear product intent, technical behavior changes, or conflicting reviewer guidance
- **Skip with note:** non-actionable comments (for example, design critique with no available source/update path)

## Output format to user

Use this structure:

1. Files changed
2. What was fixed (by reviewer theme)
3. What was not changed (and why)
4. Validation result (lint/tests run)

## Extension notes

To extend this skill, add:

- A `patterns.md` file with reviewer-specific conventions
- A `commands.md` file with reusable `gh` queries for PR feedback
- Team-specific wording conventions for docs pages

# Novu Documentation Site

A Next.js 15 documentation site built with Fumadocs, using pnpm.

## Cursor Cloud specific instructions

### Services

| Service | Command | Port | Notes |
|---|---|---|---|
| Next.js Dev Server | `pnpm dev` | 3010 | The only service needed for local development |

### Standard commands

See `package.json` scripts and `README.md` for the full list. Key commands:

- **Dev server:** `pnpm dev` (port 3010)
- **Lint:** `pnpm lint` (ESLint via `next lint`)
- **Build:** `pnpm build` (full static + SSR production build)
- **Format:** `pnpm format` / `pnpm format:check`

### Gotchas

- The `postinstall` script runs `fumadocs-mdx` to generate type definitions. If you see missing type errors after install, re-run `pnpm install` or `npx fumadocs-mdx`.
- `pnpm install` warns about ignored build scripts for `esbuild`, `sharp`, `@clerk/shared`, `vue-demi`. These do not block dev or build; do not run `pnpm approve-builds` (interactive).
- The root page (`/`) redirects (308) to `/platform`. Use `http://localhost:3010/platform` to verify the homepage loads.
- All external API keys (Inkeep, BetterStack, Clerk, Segment) are optional for local development. The site functions fully without them.
- Initial dev server compilation of a page may take 30-60s; subsequent hot reloads are fast.

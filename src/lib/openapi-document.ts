import { existsSync } from 'node:fs';
import path from 'node:path';

/** Relative to repo root; kept in sync with scripts/generate-docs.mjs */
export const OPENAPI_SPEC_RELATIVE = 'content/openapi/novu-spec.json';

const LEGACY_SPEAKEASY_SPEC =
  'https://spec.speakeasy.com/novu/novu/json-development-with-code-samples';

/**
 * Prefer the on-disk OpenAPI snapshot (written by `pnpm run build:docs`) so
 * `fumadocs-openapi` uses local I/O instead of refetching and dereferencing
 * the full remote spec on every dev navigation or cold server instance.
 */
export function resolveOpenApiDocument(document: unknown): unknown {
  if (typeof document !== 'string') {
    return document;
  }

  const localAbs = path.join(process.cwd(), OPENAPI_SPEC_RELATIVE);
  if (!existsSync(localAbs)) {
    return document;
  }

  const normalized = document.replaceAll('\\', '/');
  const isLegacyRemote =
    document === LEGACY_SPEAKEASY_SPEC ||
    (document.startsWith('https://') && document.includes('spec.speakeasy.com/novu/novu/'));
  const isSnapshotPath = normalized === OPENAPI_SPEC_RELATIVE;

  if (isLegacyRemote || isSnapshotPath) {
    return localAbs;
  }

  return document;
}

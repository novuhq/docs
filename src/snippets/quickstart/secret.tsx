import { DynamicCodeBlock } from '@/components/codeblock';

const code = `NOVU_SECRET_KEY=your_secret_key`;

export function SecretStep() {
  return <DynamicCodeBlock title=".env" code={code} lang="ts" />;
}

import { DynamicCodeBlock } from '@/components/codeblock';

const code = `npm install @novu/framework`;

export function PackagesStep() {
  return (
    <>
      <div className="mb-5">Install the Novu Framework package:</div>
      <DynamicCodeBlock code={code} lang="bash" />
      <div className="mt-5">
        This package provides all the necessary tools to build and manage your notification
        workflows.
      </div>
    </>
  );
}

import { DynamicCodeBlock, CodeBlock } from '@/components/codeblock';

const code = `import { workflow } from '@novu/framework';

export const testWorkflow = workflow('test-workflow', async ({ step }) => {
  await step.email('test-email', async () => {
    return {
      subject: 'Test Email',
      body: 'This is a test email from Novu Framework!',
    };
  });
});`;

export function WorkflowStep() {
  return (
    <>
      <DynamicCodeBlock title="app/novu/workflows.ts" code={code} lang="ts" />
      <br />
    </>
  );
}

import { DynamicCodeBlock } from '@/components/codeblock';

const code = `npx novu dev`;

export function StudioStep() {
  return (
    <>
      <div className="mb-5">Start the Local Studio by running:</div>
      <DynamicCodeBlock code={code} lang="bash" />
      <div className="mt-5">
        The Local Studio will be available at:{' '}
        <a href="http://localhost:2022" target="_blank">
          http://localhost:2022
        </a>
        . This is where you can preview and test your workflows.
      </div>
    </>
  );
}

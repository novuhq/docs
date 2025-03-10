import { DynamicCodeBlock } from '@/components/codeblock';

const code = `curl -X \
 POST https://api.novu.co/v1/events/trigger \
  -H 'Authorization: ApiKey YOUR_API_KEY' \
 \
  -H 'Content-Type: application/json' \
 \
  -d '{
    "name": "my-workflow",
    "to": "subscriber-id",
    "payload": {}
  }'`;

export function TestStep() {
  return (
    <>
      <div className="mb-5">
        Test your workflow by triggering it from the Local Studio or using the Novu API:
      </div>
      <DynamicCodeBlock code={code} lang="bash" />
      <div className="mt-5">
        You should see the notification being processed in your Local Studio.
      </div>
    </>
  );
}

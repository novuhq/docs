import { Step } from '@/components/steps';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CreateAccountStep() {
  return (
    <Step title="Create a Novu account">
      If you don&apos;t have a Novu account, you can create one{' '}
      <Link href="https://dashboard-v2.novu.co/auth/sign-up">here</Link>.
    </Step>
  );
}

export function BuildWorkflowStep() {
  return (
    <Step title="Next: Build a workflow">
      Navigate through the sections below to create your first custom workflow.
      <Button color="secondary" size="sm" className="h-8 px-4">
        Create a workflow
      </Button>
    </Step>
  );
}

export function CreateSubscriberStep() {
  return (
    <Step title="Create your first subscriber">
      Novu will automatically create a subscriber when a new `subscriberId` was detected from the
      `Inbox` component props.
    </Step>
  );
}

export function TriggerNotificationStep() {
  return (
    <Step title="Trigger your first notification">
      Now you have setup the Notification Center and created a subscriber, it&apos;s time to trigger
      your first notification workflow. <br />
      <Button color="primary" className="h-9 mt-4">
        Visit Dashboard
      </Button>
    </Step>
  );
}

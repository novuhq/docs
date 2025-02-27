'use client';

import { Step } from '@/components/steps';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { get } from '@/lib/novu-api';
import { useAuth, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Workflow = {
  _id: string;
  name: string;
  identifier: string;
};

type WorkflowsResponse = {
  data: Workflow[];
};

type Environment = {
  _id: string;
  name: string;
  identifier: string;
  apiKeys: {
    key: string;
    _id: string;
  }[];
};

type EnvironmentsResponse = {
  data: Environment[];
};

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
  const { isSignedIn, user } = useUser();
  const { getToken } = useAuth();
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isTriggering, setIsTriggering] = useState(false);
  const [triggerSuccess, setTriggerSuccess] = useState(false);
  const [environment, setEnvironment] = useState<Environment | null>(null);

  useEffect(() => {
    async function fetchEnvironment() {
      if (!isSignedIn) return;

      try {
        const token = await getToken();
        if (!token) {
          throw new Error('No authentication token available');
        }

        const { data } = await get<EnvironmentsResponse>('/environments', {
          token,
        });
        const devEnvironment = data.find((env: Environment) => env.name === 'Development');

        if (!devEnvironment) {
          throw new Error('Development environment not found');
        }

        setEnvironment(devEnvironment);
      } catch (err) {
        console.error('Error fetching environment:', err);
        setError('Failed to fetch environment. Please try again.');
      }
    }

    fetchEnvironment();
  }, [isSignedIn, getToken]);

  useEffect(() => {
    async function fetchWorkflows() {
      if (!isSignedIn || !environment) return;

      setIsLoading(true);
      setError(null);

      try {
        const token = await getToken();
        if (!token) {
          throw new Error('No authentication token available');
        }

        const response = await get<{ data: { workflows: Workflow[] } }>('/workflows', {
          token,
          version: 'v2',
          environment,
        });

        console.log('response', response);
        setWorkflows(response.data?.workflows || []);
      } catch (err) {
        console.error('Error fetching workflows:', err);
        setError('Failed to fetch workflows. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchWorkflows();
  }, [isSignedIn, getToken, environment]);

  const triggerWorkflow = async () => {
    if (!selectedWorkflow || !user || !environment) return;

    setIsTriggering(true);
    setTriggerSuccess(false);
    setError(null);

    try {
      const token = await getToken();
      if (!token) {
        throw new Error('No authentication token available');
      }

      // Call the Novu API to trigger the workflow
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NOVU_API_URL || 'https://api.novu.co'}/v1/events/trigger`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Novu-Environment-Id': environment._id,
          },
          body: JSON.stringify({
            name: selectedWorkflow.identifier,
            to: {
              subscriberId: user.id,
            },
            payload: {
              // You can add custom payload data here
              workflowName: selectedWorkflow.name,
              triggeredAt: new Date().toISOString(),
            },
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to trigger workflow');
      }

      setTriggerSuccess(true);
    } catch (err) {
      console.error('Error triggering workflow:', err);
      setError(
        typeof err === 'object' && err && 'message' in err
          ? String(err.message)
          : 'Failed to trigger workflow. Please try again.'
      );
    } finally {
      setIsTriggering(false);
    }
  };

  const handleWorkflowChange = (workflowId: string) => {
    const workflow = workflows.find((w) => w._id === workflowId);
    if (workflow) {
      setSelectedWorkflow(workflow);
    }
  };

  return (
    <Step title="Trigger your first notification">
      <p className="mb-4">
        Now you have setup the Notification Center and created a subscriber, it&apos;s time to
        trigger your first notification workflow.
      </p>

      {isSignedIn ? (
        <div className="space-y-4 w-full max-w-md">
          {!environment ? (
            <p className="text-sm text-fd-muted-foreground">Loading environment...</p>
          ) : isLoading ? (
            <p className="text-sm text-fd-muted-foreground">Loading workflows...</p>
          ) : error ? (
            <p className="text-sm text-red-500">{error}</p>
          ) : workflows.length === 0 ? (
            <p className="text-sm text-fd-muted-foreground">
              No workflows found. Create one first.
            </p>
          ) : (
            <>
              <Select onValueChange={handleWorkflowChange} value={selectedWorkflow?._id}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a workflow" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200">
                  <SelectGroup>
                    <SelectLabel>Available Workflows</SelectLabel>
                    {workflows.map((workflow) => (
                      <SelectItem key={workflow._id} value={workflow._id}>
                        {workflow.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button
                color="primary"
                className="w-full"
                disabled={!selectedWorkflow || isTriggering}
                onClick={triggerWorkflow}
              >
                {isTriggering
                  ? 'Triggering...'
                  : selectedWorkflow
                    ? `Trigger "${selectedWorkflow.name}"`
                    : 'Trigger Workflow'}
              </Button>

              {triggerSuccess && (
                <p className="text-sm text-green-500">Workflow triggered successfully!</p>
              )}
            </>
          )}
        </div>
      ) : (
        <Button color="primary" className="h-9 mt-4" href="https://dashboard-v2.novu.co">
          Visit Dashboard
        </Button>
      )}
    </Step>
  );
}

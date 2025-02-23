'use client';

import { get } from '@/lib/novu-api';
import { useAuth, useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { CodeBlock } from '../codeblock';

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

export function InboxCodeBlock() {
  const { user } = useUser();
  const { userId, getToken } = useAuth();
  const [environment, setEnvironment] = useState<Environment | null>(null);

  useEffect(() => {
    async function fetchNovuData() {
      if (!userId) {
        return;
      }

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
        console.error(err);
      }
    }

    void fetchNovuData();
  }, [userId, getToken]);

  const code = `'use client';
import React from 'react';
import { Inbox } from '@novu/nextjs';

export function NotificationInbox() {
  return (
    <Inbox
      applicationIdentifier="${environment?.identifier || 'YOUR_APPLICATION_IDENTIFIER'}"
      subscriberId="${user?.externalId || 'YOUR_SUBSCRIBER_ID'}"
    />
  );
}`;

  return (
    <>
      <CodeBlock title="components/inbox.tsx" code={code} />
    </>
  );
}

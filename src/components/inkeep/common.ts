import { InkeepModalSearchAndChatProps } from '@inkeep/cxkit-react';

export const inkeepConfig: InkeepModalSearchAndChatProps = {
  aiChatSettings: {
    aiAssistantAvatar: 'https://dashboard-v0.novu.co/static/images/novu.png',
    exampleQuestions: [
      'How to use Inbox in react project?',
      'What are topic subscriptions?',
      `How to manage user's notification preferences?`,
    ],
  },
  baseSettings: {
    apiKey: process.env.NEXT_PUBLIC_INKEEP_API_KEY,
    primaryBrandColor: '#DD2450',
    organizationDisplayName: 'Novu',
  },
  modalSettings: {
    // optional settings
  },
  searchSettings: {
    // optional settings
  },
};

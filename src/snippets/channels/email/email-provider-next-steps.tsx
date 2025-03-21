import { Card, Cards } from '@/components/card';

export const EmailProviderNextSteps = () => {
  return (
    <Cards>
      <Card
        title="Configure bcc, cc, and reply-to"
        href="/platform/integrations/email#sending-email-overrides"
      >
        Learn how to configure bcc, cc, and reply-to for your email notifications using email
        overrides
      </Card>
      <Card
        title="Sending email attachments"
        href="/platform/integrations/email#sending-email-attachments"
      >
        Learn how to send attachments with email notifications
      </Card>
      <Card
        title="Use different email integration"
        href="/platform/integrations/email#sending-email-overrides"
      >
        Learn how to use different email provider integrations to be used to send emails
      </Card>
    </Cards>
  );
};

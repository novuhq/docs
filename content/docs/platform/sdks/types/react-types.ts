import type {
  BellProps,
  InboxContentProps,
  InboxProps as InboxPropsInternal,
  NotificationProps,
  SubscriptionProps,
  SubscriptionAppearance,
} from '@novu/react';

import type { AllAppearance, AllElements, Variables } from '@novu/js/ui';

export type InboxProps = Omit<InboxPropsInternal, 'children'>;
export type { BellProps, InboxContentProps, NotificationProps };

export type InboxAppearanceProps = Omit<AllAppearance, 'elements'>;

export type InboxAppearanceVariables = Variables;
export type InboxAppearanceElements = AllElements;

export type { SubscriptionProps };

export type { SubscriptionAppearance };

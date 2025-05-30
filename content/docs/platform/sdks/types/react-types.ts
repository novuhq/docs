import type {
  BellProps,
  InboxContentProps,
  InboxProps as InboxPropsInternal,
  NotificationProps,
} from '@novu/react';

import type { Appearance, Elements, Variables } from '@novu/js/ui';

export type InboxProps = Omit<InboxPropsInternal, 'children'>;
export type { BellProps, InboxContentProps, NotificationProps };

export type InboxAppearanceProps = Omit<Appearance, 'elements'>;

export type InboxAppearanceVariables = Variables;
export type InboxAppearanceElements = Elements;

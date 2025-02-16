import type {
  Action,
  ChannelPreference,
  ListNotificationsResponse,
  Notification,
  NotificationButton as NotificationButtonType,
  NotificationFilter,
  NovuOptions,
  PreferencesResponse,
  Subscriber,
} from "@novu/js";

export type {
  Action,
  ChannelPreference,
  Notification,
  NotificationFilter,
  ListNotificationsResponse as NotificationsResponse,
  NovuOptions,
  PreferencesResponse as PreferenceResponse,
  Subscriber,
};

export type NotificationButton = typeof NotificationButtonType;

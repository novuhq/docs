import {
  ISubscriber,
  IChannelSettings,
  TopicDto,
  IMessage,
  IIntegration,
  ICredentials,
  IPreviousStepFilterPart,
  INotificationTemplate,
  IActor,
  IMessageCTA,
  IActivity,
  IActivityJob,
} from '@novu/shared';

// subscriber
export type Subscriber = ISubscriber;
export type ChannelSettings = IChannelSettings;

// topic
export type Topic = TopicDto;

// message
export type Message = IMessage;
export type NotificationTemplate = INotificationTemplate;
export type Actor = IActor;
export type MessageCTA = IMessageCTA;

// notification
export type Notification = IActivity;
export type ActivityJob = IActivityJob;

// integration
export type Integration = IIntegration;
export type Credentials = ICredentials;
export type PreviousStepFilterPart = IPreviousStepFilterPart;

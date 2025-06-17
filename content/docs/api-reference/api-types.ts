import {
  SubscriberResponseDto,
  ChannelSettingsDto,
  TopicResponseDto,
  MessageResponseDto,
  WorkflowResponse,
  MessageCTA as MessageCTAType,
  ActivityNotificationResponseDto,
  ActivityNotificationJobResponseDto,
  IntegrationResponseDto,
  CredentialsDto,
  StepFilterDto,
  TopicSubscriptionResponseDto,
  SubscriberPayloadDto,
  EnvironmentResponseDto,
} from '@novu/api/models/components';

// subscriber
export type Subscriber = SubscriberResponseDto;
export type ChannelSettings = ChannelSettingsDto;

// topic
export type Topic = TopicResponseDto;
export type TopicSubscription = TopicSubscriptionResponseDto;

// message
export type Message = MessageResponseDto;
export type Actor = SubscriberPayloadDto | string;
export type MessageCTA = MessageCTAType;

// notification
export type Notification = ActivityNotificationResponseDto;
export type ActivityJob = ActivityNotificationJobResponseDto;

// integration
export type Integration = IntegrationResponseDto;
export type Credentials = CredentialsDto;
export type StepFilter = StepFilterDto;

// environment
export type Environment = EnvironmentResponseDto;

// workflow
export type Workflow = WorkflowResponse;

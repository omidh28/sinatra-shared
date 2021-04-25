import { SmsProvider } from "./sms-provider.enum";

export interface TwilioSettings {
  account_sid: string;
  auth_token: string;
  virtual_number: string;
}

export interface KavehSettings {
  api_key: string;
  shared: boolean;
}

export interface MemberDetials {
  id: number;
  phone: string;
}

export interface SmsSettings {
  receipt_enabled: boolean;
  feedback_enabled: boolean;
  receipt_text?: string;
  feedback_text?: string;
  provider?: SmsProvider;
  twilio_settings?: TwilioSettings;
  kaveh_settings?: KavehSettings;
}

export interface TeamSettings {
  sms: SmsSettings;
  members?: MemberDetials[];
}
export type FeedbackPayload = {
  readonly score: number;
  readonly order: string;
  readonly comment?: string;
}
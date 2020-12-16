export type InvoicePayload = {
  readonly customerName: string;
  readonly customerPhone: string;
  readonly price: string;
  readonly quantity: string;
  readonly models: string[];
  readonly advancePay: number;
  readonly id: string;
  readonly submitDate: string;
  readonly dueDate: string;
}
export type DessertOrderInvoicePayload = {
  readonly customerName: string;
  readonly customerPhone: string;
  readonly items: Array<{
    readonly title: string;
    readonly measure: string;
    readonly quantity: string;
    readonly price: string;
  }>,
  readonly advancePay: number;
  readonly id: string;
  readonly teamId: string;
  readonly submitDate: string;
  readonly dueDate: string;
}
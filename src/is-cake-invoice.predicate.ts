import { CakeOrderInvoicePayload } from "./cake-order-invoice.payload";
import { DessertOrderInvoicePayload } from "./dessert-order-invoice.payload";

export function isCreateCakeOrderOptions(
  options: CakeOrderInvoicePayload | DessertOrderInvoicePayload,
): options is CakeOrderInvoicePayload {
  return 'quantity' in options;
}
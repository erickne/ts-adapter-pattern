
export interface PaymentPayload {
  amount: number;
  payerName: string;
  payerEmail: string;
}

export interface PaymentProvider {
  pay(data: PaymentPayload): PaymentResult;
}

export interface PaymentResult {
  transactionId: string;
  success: boolean;
}

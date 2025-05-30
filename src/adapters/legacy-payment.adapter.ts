import {LegacyPaymentSdk} from "../vendor/legacy-payment-sdk";
import {PaymentProvider, PaymentPayload, PaymentResult} from "../payment.interface";

export class LegacyPaymentAdapter implements PaymentProvider {
  constructor(private legacy: LegacyPaymentSdk) {}

  pay(data: PaymentPayload): PaymentResult {
    console.log('Adapter translating pay() to sendPayment()');
    // Only amount is used; legacy gateway does not support metadata
    this.legacy.sendPayment(data.amount);
    return { transactionId: 'legacy-123', success: true }; // Simulated response
  }
}

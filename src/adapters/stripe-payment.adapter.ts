import {StripeSdk} from "../vendor/stripe-sdk";
import {PaymentProvider, PaymentPayload, PaymentResult} from "../payment.interface";

export class StripeAdapter implements PaymentProvider {
  constructor(private stripe: StripeSdk) {}

  pay(data: PaymentPayload): PaymentResult {
    console.log('Adapter translating pay() to charge()');
    const metadata = {
      name: data.payerName,
      email: data.payerEmail
    };
    this.stripe.charge(data.amount, metadata);
    return { transactionId: 'stripe-456', success: true }; // Simulated response
  }
}

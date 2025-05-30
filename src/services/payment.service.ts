import { PaymentProvider, PaymentPayload, PaymentResult } from '../payment.interface';

export class PaymentService {
  constructor(private provider: PaymentProvider) {}

  handleCheckout(data: PaymentPayload): PaymentResult {
    console.log('Service initiating payment...');
    const result = this.provider.pay(data);
    console.log(`Service completed payment. Transaction ID: ${result.transactionId}, Success: ${result.success}`);
    return result;
  }
}

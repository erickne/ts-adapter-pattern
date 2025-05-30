import {PaymentService} from "./services/payment.service";
import {LegacyPaymentAdapter} from "./adapters/legacy-payment.adapter";
import {LegacyPaymentSdk} from "./vendor/legacy-payment-sdk";
import {StripeSdk} from "./vendor/stripe-sdk";
import {StripeAdapter} from "./adapters/stripe-payment.adapter";

const legacyAdapter = new LegacyPaymentAdapter(new LegacyPaymentSdk());
const stripeAdapter = new StripeAdapter(new StripeSdk());

const legacyService = new PaymentService(legacyAdapter);
const stripeService = new PaymentService(stripeAdapter);

legacyService.handleCheckout({
  amount: 100,
  payerName: 'Alice',
  payerEmail: 'alice@example.com'
});

stripeService.handleCheckout({
  amount: 200,
  payerName: 'Bob',
  payerEmail: 'bob@example.com'
});

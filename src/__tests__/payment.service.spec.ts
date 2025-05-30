import {PaymentPayload, PaymentProvider} from "../payment.interface";
import {PaymentService} from "../services/payment.service";


const mockPaymentProvider: jest.Mocked<PaymentProvider> = {
  pay: jest.fn().mockReturnValue({ transactionId: 'test-789', success: true })
};

describe('PaymentService', () => {
  let paymentService: PaymentService;

  beforeEach(() => {
    paymentService = new PaymentService(mockPaymentProvider);
  });

  it('should call pay method of the provider with correct data and return success', () => {
    const paymentData: PaymentPayload = {
      amount: 100,
      payerName: 'Test User',
      payerEmail: 'test@example.com'
    };

    const result = paymentService.handleCheckout(paymentData);

    expect(mockPaymentProvider.pay).toHaveBeenCalledWith(paymentData);
    expect(result).toEqual({ transactionId: 'test-789', success: true });
  });

  it('should log messages during the payment process', () => {
    console.log = jest.fn();

    const paymentData: PaymentPayload = {
      amount: 100,
      payerName: 'Test User',
      payerEmail: 'test@example.com'
    };

    paymentService.handleCheckout(paymentData);

    expect(console.log).toHaveBeenCalledWith('Service initiating payment...');
    expect(console.log).toHaveBeenCalledWith('Service completed payment. Transaction ID: test-789, Success: true');
  });
});

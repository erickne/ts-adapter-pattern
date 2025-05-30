
export class StripeSdk {
  charge(value: number, metadata: Record<string, any>) {
    console.log(`Charged $${value} via Stripe with metadata:`, metadata);
  }
}

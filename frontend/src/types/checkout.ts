export type Country = "US" | "VN" | "UK" | "CA"
export type PaymentMethod =
  | "credit_card"
  | "paypal"
  | "cod"

export interface Checkout {
  id?: string
  fullName: string
  email: string
  phoneNumber: string
  shippingAddress: string
  city: string
  postalCode: string
  country: Country
  paymentMethod: PaymentMethod
  termsAccepted: boolean
  cardNumber?: string
  expiryDate?: string
  cvv?: string
}

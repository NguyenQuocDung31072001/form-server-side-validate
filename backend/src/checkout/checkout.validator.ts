// checkout.validator.ts
export const checkoutFieldValidators: Record<string, string> = {
  fullName: `
      async function(value) {
        if (typeof value !== 'string') return Promise.reject('Full name must be a string');
        if (value.length < 2) return Promise.reject('Full name is too short (min 2)');
        if (value.length > 50) return Promise.reject('Full name is too long (max 50)');
        return Promise.resolve();
      }
    `,

  email: `
      async function(value) {
        const emailRegex = /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/;
        if (!emailRegex.test(value)) return Promise.reject('Invalid email address');
        return Promise.resolve();
      }
    `,

  phoneNumber: `
      async function(value) {
        const phoneRegex = /^\\+?\\d{9,15}$/;
        if (!phoneRegex.test(value)) return Promise.reject('Invalid phone number format');
        return Promise.resolve();
      }
    `,

  shippingAddress: `
      async function(value) {
        if (typeof value !== 'string') return Promise.reject('Shipping address must be a string');
        if (value.length < 10) return Promise.reject('Shipping address is too short (min 10)');
        return Promise.resolve();
      }
    `,

  city: `
      async function(value) {
        if (typeof value !== 'string') return Promise.reject('City must be a string');
        return Promise.resolve();
      }
    `,

  postalCode: `
      async function(value) {
        if (typeof value !== 'string') return Promise.reject('Postal code must be a string');
        if (value.length < 4 || value.length > 10) return Promise.reject('Postal code length must be between 4 and 10');
        return Promise.resolve();
      }
    `,

  country: `
      async function(value) {
        const allowed = ['US', 'VN', 'UK', 'CA'];
        if (!allowed.includes(value)) return Promise.reject('Invalid country');
        return Promise.resolve();
      }
    `,

  paymentMethod: `
      async function(value) {
        const allowed = ['credit_card', 'paypal', 'cod'];
        if (!allowed.includes(value)) return Promise.reject('Invalid payment method');
        return Promise.resolve();
      }
    `,

  termsAccepted: `
      async function(value) {
        if (value !== true) return Promise.reject('You must accept the terms');
        return Promise.resolve();
      }
    `,

  cardNumber: `
      async function(value, formData) {
        if (formData.paymentMethod === 'credit_card') {
          const cardRegex = /^\\d{16}$/;
          if (!cardRegex.test(value)) return Promise.reject('Card number must be 16 digits');
        }
        return Promise.resolve();
      }
    `,

  expiryDate: `
      async function(value, formData) {
        if (formData.paymentMethod === 'credit_card') {
          const expiryRegex = /^\\d{2}\\/\\d{2}$/;
          if (!expiryRegex.test(value)) return Promise.reject('Expiry date must be in MM/YY format');
        }
        return Promise.resolve();
      }
    `,

  cvv: `
      async function(value, formData) {
        if (formData.paymentMethod === 'credit_card') {
          const cvvRegex = /^\\d{3,4}$/;
          if (!cvvRegex.test(value)) return Promise.reject('CVV must be 3 or 4 digits');
        }
        return Promise.resolve();
      }
    `,
};

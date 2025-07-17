import {
  Checkbox,
  Form,
  Input,
  Select,
  type FormProps,
} from "antd"

export const CoreFormComponent: React.FC<{
  formProps: FormProps
}> = ({ formProps }) => {
  return (
    <Form {...formProps} layout="vertical">
      <Form.Item
        label="Full Name"
        name="fullName"
      >
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phoneNumber"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Shipping Address"
        name="shippingAddress"
      >
        <Input />
      </Form.Item>
      <Form.Item label="City" name="city">
        <Input />
      </Form.Item>
      <Form.Item
        label="Postal Code"
        name="postalCode"
      >
        <Input />
      </Form.Item>
      <Form.Item label="Country" name="country">
        <Select>
          <Select.Option value="US">
            US
          </Select.Option>
          <Select.Option value="VN">
            VN
          </Select.Option>
          <Select.Option value="UK">
            UK
          </Select.Option>
          <Select.Option value="CA">
            CA
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Payment Method"
        name="paymentMethod"
      >
        <Select>
          <Select.Option value="credit_card">
            Credit Card
          </Select.Option>
          <Select.Option value="paypal">
            PayPal
          </Select.Option>
          <Select.Option value="cod">
            Cash on Delivery
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prev, curr) =>
          prev.paymentMethod !==
          curr.paymentMethod
        }
      >
        {({ getFieldValue }) =>
          getFieldValue("paymentMethod") ===
            "credit_card" && (
            <>
              <Form.Item
                label="Card Number"
                name="cardNumber"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Expiry Date"
                name="expiryDate"
              >
                <Input placeholder="MM/YY" />
              </Form.Item>
              <Form.Item label="CVV" name="cvv">
                <Input />
              </Form.Item>
            </>
          )
        }
      </Form.Item>
      <Form.Item
        name="termsAccepted"
        valuePropName="checked"
      >
        <Checkbox>I accept the terms</Checkbox>
      </Form.Item>
    </Form>
  )
}

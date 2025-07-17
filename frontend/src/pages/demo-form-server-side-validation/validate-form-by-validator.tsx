import { useForm } from "@refinedev/antd"
import {
  Checkbox,
  Form,
  Input,
  Select,
} from "antd"
import axios from "axios"
import React from "react"

export const ValidateFormByValidator = () => {
  const { formProps } = useForm({
    resource: "checkout",
    action: "create",
  })
  const [validators, setValidators] =
    React.useState<
      Record<
        string,
        (
          value: any,
          formData?: any,
        ) => Promise<void>
      >
    >()

  React.useEffect(() => {
    axios
      .get(
        "http://localhost:3000/checkout/get-validators",
      )
      .then((res) => {
        try {
          const _validators = res.data

          for (const [
            key,
            fnString,
          ] of Object.entries(res.data)) {
            _validators[key] = eval(
              `(${fnString})`,
            )
          }
          setValidators(_validators)
        } catch (error) {
          console.error(error)
          alert(
            "lỗi khi parsed validator rồi ông cố",
          )
        }
      })
  }, [])

  return (
    <div className="max-h-[600px] min-h-[300px] overflow-y-scroll">
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[
            {
              validator: (_, value) => {
                return validators?.fullName(value)
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              validator: (_, value) => {
                return validators?.email(value)
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            {
              validator: (_, value) => {
                return validators?.phoneNumber(
                  value,
                )
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Shipping Address"
          name="shippingAddress"
          rules={[
            {
              validator: (_, value) => {
                return validators?.shippingAddress(
                  value,
                )
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="City"
          name="city"
          rules={[
            {
              validator: (_, value) => {
                return validators?.city(value)
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Postal Code"
          name="postalCode"
          rules={[
            {
              validator: (_, value) => {
                return validators?.postalCode(
                  value,
                )
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Country"
          name="country"
          rules={[
            {
              validator: (_, value) => {
                return validators?.country(value)
              },
            },
          ]}
        >
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
          rules={[
            {
              validator: (_, value) => {
                return validators?.paymentMethod(
                  value,
                )
              },
            },
          ]}
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
                  rules={[
                    {
                      validator: (_, value) => {
                        return validators?.cardNumber(
                          value,
                        )
                      },
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Expiry Date"
                  name="expiryDate"
                  rules={[
                    {
                      validator: (_, value) => {
                        return validators?.expiryDate(
                          value,
                        )
                      },
                    },
                  ]}
                >
                  <Input placeholder="MM/YY" />
                </Form.Item>
                <Form.Item
                  label="CVV"
                  name="cvv"
                  rules={[
                    {
                      validator: (_, value) => {
                        return validators?.cvv(
                          value,
                        )
                      },
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </>
            )
          }
        </Form.Item>
        <Form.Item
          name="termsAccepted"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) => {
                return validators?.termsAccepted(
                  value,
                )
              },
            },
          ]}
        >
          <Checkbox>I accept the terms</Checkbox>
        </Form.Item>
      </Form>
    </div>
  )
}

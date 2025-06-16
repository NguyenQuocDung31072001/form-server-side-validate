import { useShow } from "@refinedev/core"
import { Descriptions } from "antd"
import type { Checkout } from "../../types/checkout"

export const CheckoutShow = () => {
  const { queryResult } = useShow<Checkout>()
  const record = queryResult.data?.data

  return (
    <Descriptions
      title="Checkout Details"
      bordered
    >
      <Descriptions.Item label="Full Name">
        {record?.fullName}
      </Descriptions.Item>
      <Descriptions.Item label="Email">
        {record?.email}
      </Descriptions.Item>
      <Descriptions.Item label="Phone Number">
        {record?.phoneNumber}
      </Descriptions.Item>
      <Descriptions.Item label="Shipping Address">
        {record?.shippingAddress}
      </Descriptions.Item>
      <Descriptions.Item label="City">
        {record?.city}
      </Descriptions.Item>
      <Descriptions.Item label="Postal Code">
        {record?.postalCode}
      </Descriptions.Item>
      <Descriptions.Item label="Country">
        {record?.country}
      </Descriptions.Item>
      <Descriptions.Item label="Payment Method">
        {record?.paymentMethod}
      </Descriptions.Item>
      {record?.paymentMethod ===
        "credit_card" && (
        <>
          <Descriptions.Item label="Card Number">
            {record?.cardNumber}
          </Descriptions.Item>
          <Descriptions.Item label="Expiry Date">
            {record?.expiryDate}
          </Descriptions.Item>
          <Descriptions.Item label="CVV">
            {record?.cvv}
          </Descriptions.Item>
        </>
      )}
      <Descriptions.Item label="Terms Accepted">
        {record?.termsAccepted ? "Yes" : "No"}
      </Descriptions.Item>
    </Descriptions>
  )
}

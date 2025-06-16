import { useTable } from "@refinedev/antd"
import { Table } from "antd"
import type { Checkout } from "../../types/checkout"
import { Link } from "react-router-dom"

export const CheckoutList = () => {
  const { tableProps } = useTable<Checkout>()

  return (
    <Table {...tableProps} rowKey="id">
      <Table.Column
        dataIndex="fullName"
        title="Full Name"
      />
      <Table.Column
        dataIndex="email"
        title="Email"
      />
      <Table.Column
        dataIndex="country"
        title="Country"
      />
      <Table.Column
        title="Actions"
        render={(_, record: Checkout) => (
          <>
            <Link
              to={`/checkout/show/${record.id}`}
            >
              Show
            </Link>{" "}
            |{" "}
            <Link
              to={`/checkout/edit/${record.id}`}
            >
              Edit
            </Link>
          </>
        )}
      />
    </Table>
  )
}

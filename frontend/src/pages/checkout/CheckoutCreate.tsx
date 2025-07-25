import { useForm, Create } from "@refinedev/antd"
import {
  Form,
  Input,
  Select,
  Checkbox,
} from "antd"
import type { Checkout } from "../../types/checkout"
import { CoreFormComponent } from "../demo-form-server-side-validation/core-form-component"

export const CheckoutCreate = () => {
  const { formProps, form } = useForm<Checkout>({
    resource: "checkout",
    action: "create",
    onMutationError: (error) => {
      const apiErrors: Record<string, string[]> =
        error.response.data.errors
      form.setFields(
        Object.entries(apiErrors).map(
          ([name, message]) => ({
            name,
            errors: message,
          }),
        ),
      )
    },
  })

  return (
    <Create
      saveButtonProps={{
        onClick: () => {
          form.submit()
        },
      }}
    >
      <div className="max-h-[600px] min-h-[300px] overflow-y-scroll">
        <CoreFormComponent
          formProps={formProps}
        />
      </div>
    </Create>
  )
}

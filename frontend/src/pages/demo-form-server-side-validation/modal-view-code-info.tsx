import { Button, Modal } from "antd"
import React from "react"
import {
  ViewJsonSchemaForm,
  ViewRealtimeValidateServerSide,
} from "./view-raw-code"
import { ViewValidateByValidatorCb } from "./view-raw-code/view-validate-by-validator-cb"

export const ModalViewCodeInfo: React.FC<{
  tab:
    | "realtime"
    | "json-schema"
    | "validate-form-by-validator"
}> = ({ tab }) => {
  const [isModalOpen, setIsModalOpen] =
    React.useState(false)
  return (
    <div>
      <Button
        onClick={() => setIsModalOpen(true)}
      >
        View Code
      </Button>
      <Modal
        centered
        width={"100%"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className="h-[90vh] overflow-y-scroll">
          {tab === "realtime" && (
            <ViewRealtimeValidateServerSide />
          )}
          {tab === "json-schema" && (
            <ViewJsonSchemaForm />
          )}
          {tab ===
            "validate-form-by-validator" && (
            <ViewValidateByValidatorCb />
          )}
        </div>
      </Modal>
    </div>
  )
}

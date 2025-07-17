import React from "react"
import { RealtimeValidateServerSide } from "./realtime-validate-server-side"
import { Tabs } from "antd"
import { JsonSchemaValidation } from "./json-schema-validation"
import { ValidateFormByValidator } from "./validate-form-by-validator"
import { ModalViewCodeInfo } from "./modal-view-code-info"

export const DemoFormServerSideValidation =
  () => {
    const [tab, setTab] = React.useState<
      | "realtime"
      | "json-schema"
      | "validate-form-by-validator"
    >("realtime")
    return (
      <div>
        <Tabs
          destroyOnHidden
          activeKey={tab}
          onChange={(key) =>
            setTab(
              key as
                | "realtime"
                | "json-schema"
                | "validate-form-by-validator",
            )
          }
          tabBarExtraContent={
            <ModalViewCodeInfo tab={tab} />
          }
        >
          <Tabs.TabPane
            tab="Realtime"
            key="realtime"
          >
            <RealtimeValidateServerSide />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="Json Schema"
            key="json-schema"
          >
            <JsonSchemaValidation />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="Validate Form By Validator"
            key="validate-form-by-validator"
          >
            <ValidateFormByValidator />
          </Tabs.TabPane>
        </Tabs>
      </div>
    )
  }

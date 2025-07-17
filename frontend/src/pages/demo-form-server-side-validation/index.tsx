import React from "react"
import { RealtimeValidateServerSide } from "./realtime-validate-server-side"
import { Tabs } from "antd"
import { JsonSchemaValidation } from "./json-schema-validation"

export const DemoFormServerSideValidation =
  () => {
    const [tab, setTab] =
      React.useState<string>("realtime")
    return (
      <div>
        <Tabs
          activeKey={tab}
          onChange={(key) => setTab(key)}
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
        </Tabs>
      </div>
    )
  }

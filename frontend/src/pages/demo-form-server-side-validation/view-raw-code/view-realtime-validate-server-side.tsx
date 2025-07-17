import { Tabs } from "antd"
import { CodeViewerContainer } from "../../../components/code-viewer-container"
import checkoutDto from "../../../../../backend/src/checkout/checkout.dto.ts?raw"
import realtimeValidateServerSide from "../realtime-validate-server-side.tsx?raw"

export const ViewRealtimeValidateServerSide =
  () => {
    return (
      <Tabs title="Realtime" key="realtime">
        <Tabs.TabPane tab="DTO" key="dto">
          <CodeViewerContainer
            code={checkoutDto}
            language="typescript"
          />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab="Frontend"
          key="frontend"
        >
          <CodeViewerContainer
            code={realtimeValidateServerSide}
            language="tsx"
          />
        </Tabs.TabPane>
      </Tabs>
    )
  }

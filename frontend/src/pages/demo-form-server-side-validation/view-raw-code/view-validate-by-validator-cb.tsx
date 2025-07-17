import { Tabs } from "antd"
import { CodeViewerContainer } from "../../../components/code-viewer-container"
import validateFormByValidator from "../validate-form-by-validator.tsx?raw"
import checkoutValidator from "../../../../../backend/src/checkout/checkout.validator.ts?raw"

export const ViewValidateByValidatorCb = () => {
  return (
    <Tabs
      title="Validate by Validator"
      key="validate-by-validator-cb"
    >
      <Tabs.TabPane tab="Backend" key="backend">
        <Tabs>
          <Tabs.TabPane
            tab="Controller"
            key="controller"
          >
            <CodeViewerContainer
              code={`
@Get('get-validators')
getCheckoutValidators() {
    return checkoutFieldValidators;
}
          `}
              language="typescript"
            />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="Validator"
            key="validator"
          >
            <CodeViewerContainer
              code={checkoutValidator}
              language="typescript"
            />
          </Tabs.TabPane>
        </Tabs>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Frontend" key="frontend">
        <CodeViewerContainer
          code={validateFormByValidator}
          language="tsx"
        />
      </Tabs.TabPane>
    </Tabs>
  )
}

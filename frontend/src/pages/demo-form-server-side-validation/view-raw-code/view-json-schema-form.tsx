import { Tabs } from "antd"
import { CodeViewerContainer } from "../../../components/code-viewer-container"
import jsonSchemaValidation from "../json-schema-validation.tsx?raw"

export const ViewJsonSchemaForm = () => {
  return (
    <Tabs title="Json Schema" key="json-schema">
      <Tabs.TabPane tab="Backend" key="backend">
        <CodeViewerContainer
          code={`
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';

@Get('schema')
    getSchema() {
    const schemas = validationMetadatasToSchemas();
    return schemas['CheckoutDto'];
}
                `}
          language="typescript"
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Frontend" key="frontend">
        <CodeViewerContainer
          code={jsonSchemaValidation}
          language="tsx"
        />
      </Tabs.TabPane>
    </Tabs>
  )
}

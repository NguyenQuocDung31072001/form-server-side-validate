import React, { useState } from "react"
import Form from "@rjsf/antd"
import validator from "@rjsf/validator-ajv8"
import axios from "axios"
import type { RJSFSchema } from "@rjsf/utils"

export const JsonSchemaValidation = () => {
  const [schema, setSchema] =
    useState<RJSFSchema | null>(null)
  const [formData, setFormData] =
    useState<unknown>({})

  React.useEffect(() => {
    axios
      .get(
        "http://localhost:3000/checkout/schema",
      )
      .then((response) =>
        setSchema(response.data),
      )
      .catch((error) =>
        console.error(
          "Error fetching schema:",
          error,
        ),
      )
  }, [])

  const handleSubmit = (data: {
    formData?: unknown
  }) => {
    console.log("Submitted data:", data.formData)
    // Send to backend using axios
    axios
      .post(
        "http://localhost:3000/checkout",
        data.formData,
      )
      .then((response) => {
        console.log(
          "Form submitted successfully:",
          response.data,
        )
      })
      .catch((error) => {
        console.error(
          "Error submitting form:",
          error,
        )
      })
  }

  const handleChange = (data: {
    formData?: unknown
  }) => {
    setFormData(data.formData)
  }

  if (!schema) return <p>Loading...</p>

  return (
    <div>
      <h2>Json Schema Validation</h2>
      <Form
        schema={schema}
        formData={formData}
        validator={validator}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

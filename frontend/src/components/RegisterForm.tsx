import React from "react"
import {
  Form,
  Input,
  Button,
  message,
} from "antd"
import axios from "axios"

interface RegisterFormValues {
  username: string
  email: string
  password: string
}

export const RegisterForm: React.FC = () => {
  const [form] =
    Form.useForm<RegisterFormValues>()

  const onFinish = async (
    values: RegisterFormValues,
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        values,
      )
      message.success(response.data.message)
      form.resetFields()
    } catch (error: unknown) {
      if (
        axios.isAxiosError(error) &&
        error.response?.data?.errors
      ) {
        // Assume errors is an array of { field: string, message: string }
        const apiErrors =
          error.response.data.errors
        form.setFields(
          apiErrors.map(
            (err: {
              field: string
              message: string
            }) => ({
              name: err.field,
              errors: [err.message],
            }),
          ),
        )
      } else if (
        axios.isAxiosError(error) &&
        error.response?.data?.message
      ) {
        message.error(error.response.data.message)
      } else {
        message.error(
          "An error occurred during registration",
        )
      }
    }
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="max-w-md mx-auto p-4"
    >
      <Form.Item label="Username" name="username">
        <Input />
      </Form.Item>

      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password">
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  )
}

import { Button, Form, Input } from "antd";
import React from "react";
import axios from "axios";

const App = () => {
  const onFinish = (name) => {

    axios
      .post("http://localhost:4000/add", { name })
      .then(() => console.log("data posted"))
      .catch(() => {
        console.log("errr");
      });
    console.log("Success:", name);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8
      }}
      wrapperCol={{
        span: 16
      }}
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!"
          }
        ]}
      >
        <Input />
      
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
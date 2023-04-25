import { Button, Form, Input } from "antd";
import { Data } from "../types/front-page";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function FormFrontPage() {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    navigate({
      pathname: "/front-page",
      search: createSearchParams(values).toString(),
    });
    localStorage.setItem("front-page", JSON.stringify(values));
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const data: Data = {
    student: "Your Name",
    roll: "Your Roll No.",
    code: "Course Code",
    sub: "Subject",
    teacher: "Teacher's Name",
  };
  const defaultValues: Data = JSON.parse(
    localStorage.getItem("front-page") || "{}"
  );
  return (
    <Form
      name="basic"
      initialValues={{ remember: true, ...defaultValues }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {Object.keys(data).map(key => {
        return (
          <Form.Item
            key={key}
            label={data[key]}
            name={key}
            rules={[{ message: "Please input " + data[key] }]}
            labelCol={{ span: 12 }}
          >
            <Input />
          </Form.Item>
        );
      })}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Generate Front Page
        </Button>
      </Form.Item>
    </Form>
  );
}

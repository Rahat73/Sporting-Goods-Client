import { Button, Form, Input } from "antd";

type FieldType = {
  name?: string;
  email?: string;
  description?: string;
};

const { TextArea } = Input;

const ContactUsSection = () => {
  return (
    <div className="grid grid-cols-2 bg-white w-10/12 mx-auto p-10 rounded-r-lg my-20">
      <div className="col-span-1 flex justify-center items-center pr-10 border-r border-gray-300">
        <span className="text-5xl font-semibold underline">Contact Us</span>
      </div>
      <div className="pl-10">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input your description!" },
            ]}
          >
            <TextArea />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactUsSection;

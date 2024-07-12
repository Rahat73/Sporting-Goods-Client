import { Button, Form, FormProps, Input, message, Steps } from "antd";
import { useEffect, useState } from "react";
import { FaStripe } from "react-icons/fa6";
import { IoMdCash } from "react-icons/io";
import { useNavigate } from "react-router-dom";
type FieldType = {
  name: string;
  email?: string;
  phone: string;
  address: string;
  description?: string;
};
const { TextArea } = Input;
const steps = [
  {
    title: "User details",
  },
  {
    title: "Payment method",
  },
  {
    title: "Checkout",
  },
];
const items = steps.map((item) => ({ key: item.title, title: item.title }));

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [current, setCurrent] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<FieldType>();
  const [form] = Form.useForm();
  console.log(formValues);
  const navigate = useNavigate();
  const next = () => {
    if (current === 0) {
      form
        .validateFields()
        .then((values) => {
          setFormValues(values);
          setCurrent(current + 1);
        })
        .catch((info) => {
          console.log("Validate Failed:", info);
        });
    } else {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const handleSelection = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
  };

  return (
    <div className="w-10/12 mx-auto bg-white rounded-lg p-10 my-10">
      <p className="text-3xl font-bold mb-8 text-center">Checkout</p>
      <Steps current={current} items={items} />
      {current === 0 && (
        <div className="min-h-[350px] pt-10">
          <Form
            form={form}
            className="mx-auto"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
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
              rules={[{ message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Phone"
              name="phone"
              rules={[
                { required: true, message: "Please input your phone no.!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Address"
              name="address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Description"
              name="description"
              rules={[{ message: "Please input your description!" }]}
            >
              <TextArea />
            </Form.Item>
          </Form>
        </div>
      )}
      {current === 1 && (
        <div className="min-h-[350px] pt-20 py-10 flex justify-center item-center">
          <div className="flex space-x-5">
            <Button
              className={`w-[150px] h-[150px] shadow-md flex flex-col justify-center items-center ${
                selectedPayment === "cash"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleSelection("cash")}
            >
              <IoMdCash className="text-5xl" />
              <p>Cash on Delivery</p>
            </Button>
            <Button
              className={`w-[150px] h-[150px] shadow-md flex flex-col justify-center items-center ${
                selectedPayment === "stripe"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleSelection("stripe")}
            >
              <FaStripe className="text-5xl" />
              <p>Stripe Payment</p>
            </Button>
          </div>
        </div>
      )}
      {current === 2 && (
        <div className="min-h-[350px] pt-20 py-10 flex justify-center item-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            <div className="flex flex-col space-y-2 col-span-1">
              <p className="font-semibold text-xl">User Details</p>
              <p>
                <strong>Name: </strong> {formValues?.name}
              </p>
              <p>
                <strong>Phone: </strong> {formValues?.phone}
              </p>
              <p>
                <strong>Address: </strong> {formValues?.address}
              </p>
            </div>
            <div className="col-span-1 space-y-2">
              <p className="font-semibold text-xl">Order Details</p>
              <p>
                <strong>Product Name: </strong> Shoes
              </p>
              <p>
                <strong>Quantity: </strong> 2
              </p>
            </div>
            <div className="col-span-1 space-y-2">
              <p className="font-semibold text-xl">Payment Details</p>
              <p>
                <strong>Total amount </strong> $100
              </p>
              <p>
                <strong>Payment method: </strong> {selectedPayment}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-end" style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => next()}
            disabled={current == 1 && !selectedPayment}
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
              message.success("Processing complete!");
              navigate("/order-success");
            }}
          >
            Submit
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default Checkout;

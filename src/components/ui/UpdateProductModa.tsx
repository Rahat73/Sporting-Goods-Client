import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  notification,
  Select,
  Space,
  Spin,
  Upload,
} from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { UploadOutlined } from "@ant-design/icons";
import { TProduct } from "../../types/types";
import { getBase64 } from "../../utility/utilities";

type TUpdateProductModalProps = TProduct & {
  setIsUpdateModalOpen: Dispatch<SetStateAction<boolean>>;
} & { isUpdateModalOpen: boolean };

type FieldType = {
  name: string;
  category: string;
  instock: number;
  brand: string;
  rating: number;
  description: string;
  price: number;
  image: File[];
};

const { TextArea } = Input;

const UpdateProductModal = ({
  id,
  name,
  category,
  instock,
  brand,
  rating,
  description,
  price,
  image,
  isUpdateModalOpen,
  setIsUpdateModalOpen,
}: TUpdateProductModalProps) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const img_hosting_token = import.meta.env.VITE_IMG_BB_KEY;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  //   const [addProduct, { isLoading }] = useAddProductMutation();

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = async (values: FieldType) => {
    setLoading(true);
    const { image } = values;

    if (image[0]?.size > 1048576) {
      message.error("Image size should be less than 1MB");
    }

    try {
      const base64Image = await getBase64(image[0].originFileObj);
      const formData = new FormData();
      formData.append("image", base64Image.split(",")[1]); // Removing the "data:image/png;base64," part

      const response = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      });

      const imgRes = await response.json();

      if (imgRes.success) {
        const imageUrl = imgRes.data.display_url;
        // addProduct({ ...values, image: imageUrl });
        // setIsModalOpen(false);
        form.resetFields();
        openNotification();
      } else {
        message.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image: ", error);
      message.error("Error uploading image");
    }

    setLoading(false);
  };

  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: (
        <div className="text-green-600 flex items-center space-x-3">
          <FaCheckCircle />
          <p>Successful!</p>
        </div>
      ),
      description: "The product has been added successfully!",
      duration: 3,
    });
  };

  return (
    <Modal
      title="Add a product"
      open={isUpdateModalOpen}
      //   onOk={() => setIsModalOpen(false)}
      onCancel={() => setIsUpdateModalOpen(false)}
      width={800}
      footer={null}
    >
      {contextHolder}
      <Spin size="large" className="" spinning={isLoading || loading}>
        <Form
          form={form}
          name="addProduct"
          className="mx-auto"
          labelCol={{ span: 12 }}
          //   wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className=" grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <Form.Item<FieldType>
                label="Name"
                name="name"
                rules={[
                  { required: true, message: "Please input product name!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Category"
                name="category"
                rules={[
                  { required: true, message: "Please input product category!" },
                ]}
              >
                <Select
                  //   className="w-56"
                  // onSelect={(value) => setCategory(value)}
                  // defaultValue={null}
                  // value={category}
                  options={[
                    {
                      value: "Accessories-and-Equipment",
                      label: <span>Accessories and Equipment</span>,
                    },
                    {
                      value: "Athletic-Apparel-and-Footwear",
                      label: <span>Athletic Apparel and Footwear</span>,
                    },
                    {
                      value: "Fitness-and-Exercise",
                      label: <span>Fitness and Exercise</span>,
                    },
                  ]}
                />
              </Form.Item>

              <Form.Item<FieldType>
                label="Brand"
                name="brand"
                rules={[
                  { required: true, message: "Please input product brand!" },
                ]}
              >
                <Select
                  //   className="w-56"
                  // onSelect={(value) => setCategory(value)}
                  // defaultValue={null}
                  // value={category}
                  options={[
                    {
                      value: "nike",
                      label: <span>Nike</span>,
                    },
                    {
                      value: "adidas",
                      label: <span>Adidas</span>,
                    },
                    {
                      value: "puma",
                      label: <span>Puma</span>,
                    },
                    {
                      value: "reebok",
                      label: <span>Reebok</span>,
                    },
                    {
                      value: "newBalance",
                      label: <span>New Balance</span>,
                    },
                  ]}
                />
              </Form.Item>

              <Form.Item<FieldType>
                label="Stock quantity"
                name="instock"
                rules={[
                  {
                    required: true,
                    message: "Please input product stock quantity!",
                  },
                ]}
              >
                <InputNumber className="w-full" min={1} />
              </Form.Item>

              <Form.Item<FieldType>
                label="Rating"
                name="rating"
                rules={[
                  {
                    required: true,
                    message: "Please input product rating!",
                  },
                ]}
              >
                <InputNumber className="w-full" min={0} max={5} />
              </Form.Item>
            </div>

            <div className="col-span-1">
              <Form.Item<FieldType>
                label="Price"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Please input product price!",
                  },
                ]}
              >
                <InputNumber className="w-full" min={0} />
              </Form.Item>

              <Form.Item<FieldType>
                label="Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please input product description!",
                  },
                ]}
              >
                <TextArea />
              </Form.Item>

              <Form.Item
                label="Image"
                name="image"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[
                  { required: true, message: "Please input product image!" },
                ]}
              >
                <Upload
                  name="logo"
                  action="/upload.do"
                  listType="picture"
                  maxCount={1}
                >
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>
            </div>
          </div>
          <Form.Item className="flex justify-end">
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};

export default UpdateProductModal;

import { EditOutlined } from "@ant-design/icons";
import { Card, message, Popconfirm, PopconfirmProps } from "antd";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { TProduct } from "../../types/types";
import UpdateProductModal from "./UpdateProductModal";
import { useDeleteProductMutation } from "../../redux/api/baseApi";

const ManageProductCard = ({
  _id,
  name,
  category,
  instock,
  brand,
  rating,
  description,
  price,
  image,
}: TProduct) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [deleteProduct] = useDeleteProductMutation();

  const confirm: PopconfirmProps["onConfirm"] = async () => {
    const result = await deleteProduct(_id).unwrap();
    console.log(result);
    if (result?.success) {
      message.success("Product deleted successfully!");
    }
  };

  const cancel: PopconfirmProps["onCancel"] = () => {};
  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={image} className="p-0" />}
      >
        <p>
          <span className="font-semibold">Name: </span>
          {name}
        </p>
        <p>
          <span className="font-semibold">Category: </span>
          {category}
        </p>
        <p>
          <span className="font-semibold">Stock Quantity: </span>
          {instock}
        </p>
        <p>
          <span className="font-semibold">Brand: </span>
          {brand}
        </p>
        <p>
          <span className="font-semibold">Rating: </span>
          {rating}
        </p>
        <p>
          <span className="font-semibold">Description: </span>
          {description?.split(" ")?.slice(0, 10)?.join(" ")}...
        </p>
        <p>
          <span className="font-semibold">Price: </span>${price}
        </p>
        <div className="grid grid-cols-2 pb-0 mb-0 mt-5 text-white">
          <div
            className="flex justify-center items-center space-x-3 col-span-1 cursor-pointer bg-blue-500 py-2"
            onClick={() => setIsUpdateModalOpen(true)}
          >
            <EditOutlined key="edit" /> <p>Edit</p>
          </div>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <div className="flex justify-center items-center space-x-3 col-span-1 cursor-pointer bg-red-500 py-2">
              <FaTrashAlt key="trash" /> <p>Delete</p>
            </div>
          </Popconfirm>
        </div>
      </Card>
      <UpdateProductModal
        _id={_id}
        name={name}
        category={category}
        instock={instock}
        brand={brand}
        rating={rating}
        description={description}
        price={price}
        image={image}
        isUpdateModalOpen={isUpdateModalOpen}
        setIsUpdateModalOpen={setIsUpdateModalOpen}
      />
    </>
  );
};

export default ManageProductCard;

import { FloatButton, Modal, Spin } from "antd";
import { TProduct } from "../types/types";
import { useGetProductsQuery } from "../redux/api/baseApi";
import ManageProductCard from "../components/ui/ManageProductCard";
import { useState } from "react";

const ManageProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  console.log(isUpdateModalOpen);
  const { data, isLoading } = useGetProductsQuery({});

  return (
    <div className="bg-white min-h-screen w-10/12 mx-auto my-10 rounded-lg p-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Manage Products
        </h1>

        <div className="flex space-x-5"></div>
        <Spin size="large" spinning={isLoading}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
            {data?.data?.map((item: TProduct) => (
              <ManageProductCard
                key={item?._id}
                {...item}
                setIsUpdateModalOpen={setIsUpdateModalOpen}
              />
            ))}
          </div>
        </Spin>
      </div>
      <FloatButton
        description={<div className="text-xl pb-1">Add Product</div>}
        type="primary"
        shape="square"
        className="w-48"
        onClick={() => setIsModalOpen(true)}
      />
      <Modal
        title="Add a product"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Modal
        title="Update product"
        open={isUpdateModalOpen}
        onOk={() => setIsUpdateModalOpen(false)}
        onCancel={() => setIsUpdateModalOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default ManageProducts;

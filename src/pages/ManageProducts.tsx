import { FloatButton, Spin } from "antd";
import { useState } from "react";
import AddProductModal from "../components/ui/AddProductModal";
import ManageProductCard from "../components/ui/ManageProductCard";
import { useGetProductsQuery } from "../redux/api/baseApi";
import { TProduct } from "../types/types";

const ManageProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <ManageProductCard key={item?._id} {...item} />
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
      <AddProductModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default ManageProducts;

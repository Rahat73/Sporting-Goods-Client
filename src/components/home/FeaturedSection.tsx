import { Spin } from "antd";
import { useGetProductsQuery } from "../../redux/api/baseApi";
import { TProduct } from "../../types/types";
import ProductCard from "../ui/ProductCard";

const FeaturedSection = () => {
  const { data, isLoading } = useGetProductsQuery(
    {
      page: 1,
      limit: 3,
      sort: "-rating",
    },
    { pollingInterval: 30000 }
  );

  return (
    <Spin size="large" spinning={isLoading}>
      <div className="w-10/12 mx-auto my-20 ">
        <h1 className="text-5xl ml-4 font-semibold mb-10 underline text-center">
          Featured
        </h1>
        <div className="flex space-x-5 justify-center">
          {data?.data?.map((item: TProduct) => (
            <ProductCard key={item?._id} {...item} />
          ))}
        </div>
      </div>
    </Spin>
  );
};

export default FeaturedSection;

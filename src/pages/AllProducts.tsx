import {
  Button,
  Drawer,
  Input,
  Rate,
  Segmented,
  Select,
  Slider,
  Space,
  Spin,
} from "antd";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import ProductCard from "../components/ui/ProductCard";

import { useGetProductsQuery } from "../redux/api/baseApi";
import { TProduct } from "../types/types";
const { Search } = Input;

const AllProducts = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const [searchParams, setSearchParams] = useState<string>();
  const [category, setCategory] = useState<string | null>();
  const [brand, setBrand] = useState<string | null>();
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [priceSort, setPriceSort] = useState<string>();
  const [priceSorted, setPriceSorted] = useState<string>();

  const [open, setOpen] = useState(false);

  const handleSortChange = (value: string) => {
    setPriceSort(value);
    if (value === "High>Low") setPriceSorted("-price");
    else if (value === "Low>High") setPriceSorted("price");
  };

  const handleReset = () => {
    setCategory(null);
    setBrand(null);
    setPriceRange([0, 1000]);
    setRating(undefined);
    setPriceSort(undefined);
    setPriceSorted(undefined);
  };

  const { data, isLoading } = useGetProductsQuery({
    searchParams,
    category,
    brand,
    min: priceRange[0],
    max: priceRange[1],
    rating,
    sort: priceSorted,
  });

  return (
    <div className="bg-white min-h-screen w-10/12 mx-auto my-10 rounded-lg p-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">All Products</h1>

        <div className="flex space-x-5">
          <Space.Compact className=" flex items-center space-x-2">
            <p>Search:</p>
            <Search
              placeholder="search by product name"
              allowClear
              onSearch={(value) => setSearchParams(value)}
            />
          </Space.Compact>
          <Button type="primary" onClick={() => setOpen(true)}>
            <FaFilter /> Filter
          </Button>
        </div>
        <Spin size="large" spinning={isLoading}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
            {data?.data?.map((item: TProduct) => (
              <ProductCard key={item?._id} {...item} />
            ))}
          </div>
        </Spin>
        <Drawer
          className=""
          title="Search / filter"
          onClose={() => setOpen(false)}
          open={open}
        >
          <div className="flex flex-col space-y-10">
            <Space.Compact className="flex flex-col">
              <p>Category:</p>
              <Select
                //   className="w-56"
                onSelect={(value) => setCategory(value)}
                defaultValue={null}
                value={category}
                options={[
                  {
                    value: null,
                    label: <span>Select a category</span>,
                  },
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
            </Space.Compact>
            <Space.Compact className="flex flex-col">
              <p>Brand:</p>
              <Select
                onSelect={(value) => setBrand(value)}
                defaultValue={null}
                value={brand}
                options={[
                  {
                    value: null,
                    label: <span>Select a brand</span>,
                  },
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
            </Space.Compact>
            <Space.Compact className="flex flex-col">
              <p>Price Range:</p>
              <Slider
                //   className="w-96"
                onChange={(value) => setPriceRange(value)}
                range
                defaultValue={[0, 1000]}
                value={priceRange}
                min={0}
                max={1000}
              />
            </Space.Compact>
            <Space.Compact className="flex flex-col">
              <p>Rating:</p>
              <Rate
                allowHalf
                value={rating}
                onChange={(value) => setRating(value)}
              />
            </Space.Compact>
            <Space.Compact className="flex flex-col">
              <p>Sort by price:</p>
              <Segmented
                defaultValue=""
                value={priceSort}
                options={["Low>High", "High>Low"]}
                block
                onChange={handleSortChange}
              />
            </Space.Compact>

            <Button
              className="text-md p-2  my-10 w-[100px]"
              type="primary"
              onClick={handleReset}
            >
              Clear filter
            </Button>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default AllProducts;

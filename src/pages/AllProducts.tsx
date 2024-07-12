import {
  Button,
  Drawer,
  Input,
  Rate,
  Segmented,
  Select,
  Slider,
  Space,
} from "antd";
import { useState } from "react";
import { FaFilter } from "react-icons/fa6";
const { Search } = Input;
const AllProducts = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-100 min-h-screen w-10/12 mx-auto">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-12">All Products</h1>
        <div className="flex space-x-5">
          <Space.Compact className=" flex items-center space-x-2">
            <p>Search:</p>
            <Search placeholder="search by product name" allowClear />
          </Space.Compact>
          <Button type="primary" onClick={() => setOpen(true)}>
            <FaFilter /> Filter
          </Button>
        </div>
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
                defaultValue={""}
                options={[
                  {
                    value: "",
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
                //   className="w-56"
                defaultValue={""}
                options={[
                  {
                    value: "",
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
                range
                defaultValue={[1000, 5000]}
                min={0}
                max={10000}
              />
            </Space.Compact>
            <Space.Compact className="flex flex-col">
              <p>Rating:</p>
              <Rate allowHalf defaultValue={3.5} />
            </Space.Compact>
            <Space.Compact className="flex flex-col">
              <p>Sort by price:</p>
              <Segmented options={["Low>High", "High>Low"]} block />
            </Space.Compact>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default AllProducts;

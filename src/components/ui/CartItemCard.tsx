import { Button, InputNumber } from "antd";
import image from "../../assets/images/category-1.jpg";
import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
const CartItemCard = () => {
  const [value, setValue] = useState<number>(1);
  const increment = () => setValue(value + 1);
  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <div className="flex gap-4 border rounded-lg shadow-md relative">
      <Button className="absolute right-5 top-5 text-red-500 text-xl">
        <FaTrash />
      </Button>
      <div className="w-52 p-2  flex justify-center items-center">
        <img src={image} className="object-cover" />
      </div>
      <div className=" p-2 space-y-3">
        <p className="text-xl font-semibold">Product Name</p>
        <p className="text-lg font-semibold">
          <span className="font-semibold">Price:</span> $99.99
        </p>
        <p className="text-lg flex items-center">
          <span className="font-semibold mr-3">Quantity:</span>
          <InputNumber
            value={value}
            min={1}
            onChange={(value) => setValue(value as number)}
            addonAfter={<Button onClick={increment}>+</Button>}
            addonBefore={<Button onClick={decrement}>-</Button>}
          />
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;

import { Button, InputNumber } from "antd";
import { FaTrash } from "react-icons/fa6";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { TCartItem } from "../../types/types";

const CartItemCard = ({ id, name, price, quantity, image }: TCartItem) => {
  console.log(quantity);
  //   const [value, setValue] = useState<number>(1);
  const increment = () => {
    // setValue(value + 1);
    dispatch(increaseQuantity(id));
  };
  const decrement = () => {
    if (quantity! >= 1) {
      //   setValue(value - 1);
      dispatch(decreaseQuantity(id));
    }
  };

  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-4 border rounded-lg shadow-md relative">
      <Button
        className="absolute right-5 top-5 text-red-500 text-xl"
        onClick={() => dispatch(removeFromCart(id))}
      >
        <FaTrash />
      </Button>
      <div className="w-40 p-2  flex justify-center items-center">
        <img src={image} className="object-cover" />
      </div>
      <div className=" p-2 space-y-3 mt-3">
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-lg font-semibold">
          <span className="font-semibold">Price:</span> ${price}
        </p>
        <p className="text-lg flex items-center">
          <span className="font-semibold mr-3">Quantity:</span>
          <InputNumber
            controls={false}
            value={quantity}
            min={1}
            // onChange={(value) => setValue(value as number)}
            addonAfter={
              <Button className="m-0 border-0" onClick={increment}>
                +
              </Button>
            }
            addonBefore={
              <Button className="m-0 border-0" onClick={decrement}>
                -
              </Button>
            }
          />
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;

import { Button, Divider } from "antd";
import CartItemCard from "../components/ui/CartItemCard";

const Cart = () => {
  return (
    <div className="w-10/12 mx-auto bg-white rounded-lg p-10 my-10">
      <p className="text-3xl font-bold mb-8 text-center">Cart</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="col-span-1">
          <CartItemCard />
        </div>

        <div className="col-span-1 space-y-5 border-l-2 p-10 text-xl">
          <p>
            <strong>SubTotal:</strong> $99.99
          </p>
          <p>
            <strong>Vat:</strong> $5.00
          </p>
          <p>
            <strong>Total Amount:</strong> $104.99
          </p>
          <Button className="text-xl p-5 my-10 w-[300px]" type="primary">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

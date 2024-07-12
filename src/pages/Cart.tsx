import { Button } from "antd";
import CartItemCard from "../components/ui/CartItemCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { TCartItem } from "../types/types";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cart } = useAppSelector((state) => state.cart);

  const subtotal = cart?.reduce(
    (acc: number, item: TCartItem) => acc + item.price * item.quantity!,
    0
  );

  const vat = subtotal * 0.15;

  const total = subtotal + vat;

  return (
    <div className="w-10/12 mx-auto bg-white rounded-lg p-10 my-10">
      <p className="text-3xl font-bold mb-8 text-center">Cart</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="col-span-1 space-y-3">
          {cart?.map((item: TCartItem) => (
            <CartItemCard key={item.id} {...item} />
          ))}
        </div>

        <div className="col-span-1 space-y-5 border-l-2 p-10 text-xl">
          <p>
            <strong>SubTotal:</strong> ${subtotal.toFixed(2)}
          </p>
          <p>
            <strong>Vat:</strong> ${vat.toFixed(2)}
          </p>
          <p>
            <strong>Total Amount:</strong> ${total.toFixed(2)}
          </p>
          <Button className="text-xl p-5 my-10 w-[300px]" type="primary">
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

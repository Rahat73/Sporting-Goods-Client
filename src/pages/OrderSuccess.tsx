import { Button } from "antd";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="w-10/12 mx-auto flex justify-center items-center bg-white p-10 my-10 rounded-lg">
      <div className="flex flex-col space-y-10 justify-center items-center">
        <FaCircleCheck className="text-8xl text-green-700" />
        <p className="text-6xl">Your order has been placed successfully!.</p>
        <Link to={"/"}>
          <Button type="primary" className="text-3xl py-5 pb-6">
            Go to home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;

import Rating from "react-rating";
import image_1 from "../assets/images/category-1.jpg";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { Button } from "antd";

const ProductDetails = () => {
  return (
    <div className="min-h-screen w-10/12 mx-auto my-10 bg-white rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="col-span-1 p-5">
          <img src={image_1} className="object-cover" />
        </div>
        <div className="col-span-1 p-5 text-xl space-y-3">
          <h1 className="text-4xl font-bold mb-4">Product Name</h1>
          <p>
            <strong>Category:</strong> Electronics
          </p>
          <p>
            <strong>Brand:</strong> Brand Name
          </p>
          <p>
            <strong>Stock Quantity:</strong> 50
          </p>
          <Rating
            fractions={10}
            emptySymbol=<FaRegStar />
            fullSymbol=<FaStar />
          ></Rating>
          <p>
            <strong>Price:</strong> $99.99
          </p>
          <p>
            <strong>Description</strong>: This is a product description.
          </p>
          <div className="">
            <Button className="text-xl p-5 my-10 w-[300px]" type="primary">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

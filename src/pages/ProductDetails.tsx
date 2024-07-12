import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { Button } from "antd";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/api/baseApi";
import { TProduct } from "../interface/types";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetProductByIdQuery(id as string);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const {
    // _id,
    name,
    category,
    instock,
    brand,
    rating,
    description,
    price,
    image,
  } = data?.data as TProduct;

  return (
    <div className="min-h-screen w-10/12 mx-auto my-10 bg-white rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="col-span-1 p-5">
          <img src={image} className="object-cover lg:min-w-[500px]" />
        </div>
        <div className="col-span-1 p-5 text-xl space-y-3">
          <h1 className="text-4xl font-bold mb-4">{name}</h1>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>
            <strong>Brand:</strong> {brand}
          </p>
          <p>
            <strong>Stock Quantity:</strong> {instock}
          </p>
          <p>
            <strong>Rating: </strong>
            <Rating
              initialRating={rating}
              readonly={true}
              fractions={10}
              emptySymbol=<FaRegStar className="text-green-600" />
              fullSymbol=<FaStar className="text-green-600" />
            ></Rating>
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <div className="">
            <Button className="text-xl p-5 pb-6 my-10 w-[300px]" type="primary">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

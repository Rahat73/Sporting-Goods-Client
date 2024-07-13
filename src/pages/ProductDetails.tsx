import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { Button, notification, Spin } from "antd";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/api/baseApi";
import { TProduct } from "../types/types";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cart/cartSlice";
import { FaCheckCircle } from "react-icons/fa";

const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetProductByIdQuery(id as string);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: (
        <div className="text-green-600 flex items-center space-x-3">
          <FaCheckCircle />
          <p>Successful!</p>
        </div>
      ),
      description: "The product has been added to the cart successfully!",
      duration: 3,
    });
  };

  if (isLoading) {
    return (
      <Spin size="large">
        <div className="min-h-screen flex justify-center items-center"></div>
      </Spin>
    );
  }

  const {
    _id,
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
      {contextHolder}
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
            {/* @ts-expect-error there is a version miss-match in the source */}
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
            <Button
              className="text-xl p-5 pb-6 my-10 w-[300px]"
              type="primary"
              onClick={() => {
                dispatch(addToCart({ id: _id, name, price, image }));
                openNotification();
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import { Button, Card } from "antd";
import { TProduct } from "../../interface/types";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";
const { Meta } = Card;

const ProductCard = ({
  _id,
  name,
  category,
  instock,
  brand,
  rating,
  description,
  price,
  image,
}: TProduct) => {
  return (
    <div className="group relative w-[300px] overflow-hidden min-h-[300px]">
      <Card
        cover={
          <img
            alt="example"
            src={image}
            className="transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        }
      >
        <Meta title={name} />
        <Link to={`/product/${_id}`}>
          <Button type="primary" className="w-full my-3 z-10">
            View Details
          </Button>
        </Link>
        <div className="absolute inset-0 bg-black bg-opacity-75 text-white rounded-lg flex flex-col justify-center items-start p-4 transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>
            <strong>Stock Quantity:</strong> {instock}
          </p>
          <p>
            <strong>Brand:</strong> {brand}
          </p>
          <p>
            <strong>Description:</strong> {description}
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
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;

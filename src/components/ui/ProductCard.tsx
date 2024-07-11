import { Button, Card } from "antd";
const { Meta } = Card;
const ProductCard = () => {
  return (
    <div className="group relative w-[300px] overflow-hidden">
      <Card
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            className="w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        }
      >
        <Meta title="Product Name" />
        <Button type="primary" className="w-full my-3 z-10">
          View Details
        </Button>
        <div className="absolute inset-0 bg-black bg-opacity-75 text-white rounded-lg flex flex-col justify-center items-start p-4 transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          <p>
            <strong>Category:</strong> Electronics
          </p>
          <p>
            <strong>Stock Quantity:</strong> 50
          </p>
          <p>
            <strong>Brand:</strong> Brand Name
          </p>
          <p>
            <strong>Description:</strong> This is a product description.
          </p>
          <p>
            <strong>Price:</strong> $199.99
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;

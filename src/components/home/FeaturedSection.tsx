import ProductCard from "../ui/ProductCard";

const FeaturedSection = () => {
  return (
    <div className="w-10/12 mx-auto my-20 ">
      <h1 className="text-5xl ml-4 font-semibold mb-10 underline text-center">
        Featured
      </h1>
      <div className="flex space-x-5 justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default FeaturedSection;

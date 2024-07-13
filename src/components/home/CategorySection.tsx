import { Link } from "react-router-dom";
import category_1 from "../../assets/images/category-1.jpg";
import category_2 from "../../assets/images/category-2.jpg";
import category_3 from "../../assets/images/category-3.jpg";

const CategorySection = () => {
  return (
    <div className="w-10/12 mx-auto my-20 flex flex-col space-x-5 justify-center items-center">
      <h1 className="text-5xl ml-4 font-semibold mb-10 underline">
        Categories
      </h1>
      <div className="relative w-96 h-96">
        {/* Triangle */}
        <div className="absolute inset-0">
          <div className="w-0 h-0 border-l-[192px] border-r-[192px] border-b-[333px] border-l-transparent border-r-transparent border-b-gray-300"></div>
        </div>

        {/* Left side button */}
        <Link
          to={{
            pathname: "/all-products",
          }}
          state={{ value: "Accessories-and-Equipment" }}
        >
          <div className="absolute top-1/3 left-0 transform -translate-x-1/6 -translate-y-1/4">
            <button className="w-40 h-40 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 overflow-hidden relative group">
              <img
                src={category_1}
                alt="Accessories and Equipment"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-center px-2 text-2xl font-semibold">
                  Accessories and Equipment
                </span>
              </div>
            </button>
          </div>
        </Link>
        {/* Right side button */}
        <Link
          to={{
            pathname: "/all-products",
          }}
          state={{ value: "Fitness-and-Exercise" }}
        >
          <div className="absolute top-1/3 right-0 transform translate-x-1/6 -translate-y-1/4">
            <button className="w-40 h-40 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 overflow-hidden relative group">
              <img
                src={category_2}
                alt="Fitness and Exercise"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-center px-2 text-2xl font-semibold">
                  Fitness and Exercise
                </span>
              </div>
            </button>
          </div>
        </Link>

        {/* Bottom side button */}
        <Link
          to={{
            pathname: "/all-products",
          }}
          state={{ value: "Athletic-Apparel-and-Footwear" }}
        >
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
            <button className="w-40 h-40 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 overflow-hidden relative group">
              <img
                src={category_3}
                alt="Athletic Apparel and Footwear"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-center px-2 text-2xl font-semibold">
                  Athletic Apparel and Footwear
                </span>
              </div>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;

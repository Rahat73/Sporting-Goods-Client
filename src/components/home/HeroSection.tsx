import { Carousel } from "antd";
import banner_1 from "../../assets/images/banner-1.jpg";
import banner_2 from "../../assets/images/banner-2.jpg";
import banner_3 from "../../assets/images/banner-3.jpg";

const HeroSection = () => {
  return (
    <Carousel autoplay draggable>
      <div className="">
        <img src={banner_1} />
      </div>
      <div>
        <img src={banner_2} />
      </div>
      <div>
        <img src={banner_3} />
      </div>
    </Carousel>
  );
};

export default HeroSection;

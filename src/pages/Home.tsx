import CategorySection from "../components/home/CategorySection";
import ContactUsSection from "../components/home/ContactUsSection";
import FeaturedSection from "../components/home/FeaturedSection";
import HeroSection from "../components/home/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <CategorySection />
      <ContactUsSection />
    </div>
  );
};

export default Home;

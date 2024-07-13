import { useEffect } from "react";
import CategorySection from "../components/home/CategorySection";
import ContactUsSection from "../components/home/ContactUsSection";
import FeaturedSection from "../components/home/FeaturedSection";
import HeroSection from "../components/home/HeroSection";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <div className="my-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <FeaturedSection />
        </motion.div>
      </div>
      <div className="my-10">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <CategorySection />
        </motion.div>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <ContactUsSection />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

import image_1 from "../assets/images/category-1.jpg";
import image_2 from "../assets/images/aboutus.jpg";
import image_3 from "../assets/images/contactus.webp";
import image_4 from "../assets/images/team-1.jpg";
import image_5 from "../assets/images/team-2.jpg";
import image_6 from "../assets/images/team-3.jpg";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen w-10/12 mx-auto">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="col-span-1">
            <img src={image_1} className="object-cover" />
          </div>
          <div className="col-span-1">
            <h2 className="text-3xl font-semibold mb-4">Our Company</h2>
            <p className="text-lg mb-4">
              We are a leading retailer specializing in sporting goods. Our
              extensive range includes accessories and equipment for various
              sports, fitness and exercise gear, as well as athletic apparel and
              footwear. With our commitment to quality and customer
              satisfaction, we aim to be your go-to destination for all your
              sporting needs.
            </p>
          </div>
        </section>

        <section
          className="bg-black rounded-lg shadow-md p-5 mb-12 bg-fixed"
          style={{ backgroundImage: `url(${image_2})` }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-black bg-opacity-75 rounded-lg text-white p-10">
            <div className="col-span-1">
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg mb-4">
                To inspire and equip all athletes and fitness enthusiasts with
                top-quality sporting goods, enabling them to achieve their
                personal best.
              </p>
            </div>
            <div className="col-span-1">
              <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
              <p className="text-lg mb-4">
                To be the most trusted and preferred sporting goods retailer,
                known for our exceptional product range, expert advice, and
                outstanding customer service.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="col-span-1">
            <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
            <p className="text-lg mb-2">
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p className="text-lg mb-2">
              <strong>Email:</strong> info@sportsstore.com
            </p>
            <p className="text-lg mb-2">
              <strong>Address:</strong> 123 Sports Avenue, Athleticville, SP
              12345
            </p>
          </div>
          <div className="col-span-1">
            <img src={image_3} className="object-cover" />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src={image_4}
                alt="John Doe"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="text-center">
              <img
                src={image_5}
                alt="Jane Smith"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Head of Sales</p>
            </div>
            <div className="text-center">
              <img
                src={image_6}
                alt="Alice Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-gray-600">Customer Service Manager</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold mb-6">Our Store Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Downtown Store</h3>
              <p className="mb-1">123 Main Street, City Center</p>
              <p className="mb-1">Phone: (555) 987-6543</p>
              <p>Hours: Mon-Sat 9AM-9PM, Sun 10AM-6PM</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Suburban Store</h3>
              <p className="mb-1">456 Oak Road, Suburbia</p>
              <p className="mb-1">Phone: (555) 876-5432</p>
              <p>Hours: Mon-Sat 10AM-8PM, Sun 11AM-5PM</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

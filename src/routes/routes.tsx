import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import AllProducts from "../pages/AllProducts";
import Home from "../pages/Home";
import ManageProducts from "../pages/ManageProducts";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";
import MainLayout from "../components/layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "order-success",
        element: <OrderSuccess />,
      },
    ],
  },
]);

export default router;

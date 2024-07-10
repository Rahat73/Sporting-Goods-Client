import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../pages/AboutUs";
import AllProducts from "../pages/AllProducts";
import Home from "../pages/Home";
import ManageProducts from "../pages/ManageProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "/product/:id",
        element: <App />,
      },
    ],
  },
]);

export default router;

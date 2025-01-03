import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";

import Homepage from "../Pages/Home/HomePage/Homepage";
import MenuPage from "../Pages/Menu/Menu/MenuPage";
import ContactPage from "../Pages/ContactPage/ContactPage/ContactPage";
import DashboardPage from "../Pages/DashboardPage/DashboardPage/DashboardPage";
import ShopPage from "../Pages/ShopPage/ShopPage/ShopPage";
import FoodDisplay from "../Pages/ShopPage/FoodDisplay/FoodDisplay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/dashboard",
        element: <DashboardPage></DashboardPage>,
      },
      {
        path: "/menu",
        element: <MenuPage></MenuPage>,
      },
      {
        path: "/shop",
        element: <ShopPage></ShopPage>,
        children: [
          {
            path: "/shop",
            element: <FoodDisplay></FoodDisplay>,
          },
          {
            path: "/shop/:category",
            element: <FoodDisplay></FoodDisplay>,
          },
        ],
      },
    ],
  },
]);
export default router;

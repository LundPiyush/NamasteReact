import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import About from "./components/About";
import Error from "./components/Error";
// import { restaurantList } from "./components/constants";
// import { IMG_CDN_URL } from "./components/constants";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Config Driven UI

const FooterComponent = () => {
  return (
    <div>
      <h1>Footer Component</h1>
    </div>
  );
};
const AppComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restuarant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);

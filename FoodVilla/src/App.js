import React, { lazy, Suspense } from "react";
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
import Profile from "./components/Profile";
import { lazy } from "react";
import Shimmer from "./components/Shimmer";
//import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart")); // different way of loading Instamart components => lazy loading Instamart

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

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
        children: [
          {
            path: "profile", // parentpath/{path} => localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restuarant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          // We wrap the instamart component in Suspense bcz of instamart is lazy loaded hence we don't want component should render before the code reaches the browser. fallback is props for loading some component till instamart component is loaded
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);

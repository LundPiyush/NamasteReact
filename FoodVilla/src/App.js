import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import About from "./components/About";
// import { restaurantList } from "./components/constants";
// import { IMG_CDN_URL } from "./components/constants";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      <BodyComponent />
      <FooterComponent />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

root.render(<RouterProvider router={appRouter} />);

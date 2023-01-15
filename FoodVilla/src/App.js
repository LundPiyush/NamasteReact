import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { restaurantList } from "./components/constants";
import { IMG_CDN_URL } from "./components/constants";

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
root.render(<AppComponent />);

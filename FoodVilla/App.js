import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./src/components/HeaderComponent";
import BodyComponent from "./src/components/BodyComponent";
import { restaurantList } from "./src/components/constants";
import { IMG_CDN_URL } from "./src/components/constants";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Confif Driven UI

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

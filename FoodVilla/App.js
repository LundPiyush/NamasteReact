import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const HeaderComponent = () => {
  return <div></div>;
};

const BodyComponent = () => {
  return (
    <div>
      <h1>Body Component</h1>
    </div>
  );
};

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

import React from "react";
import ReactDOM from "react-dom/client";
import img from "./assets/reactjs.png";
/*
Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
Create the same element using JSX
Create a functional component of the same with JSX
Pass attributes into the tag in JSX
Composition of Component(Add a component inside another)
{TitleComponent} vs <TitleComponent /> vs <TitleComponent><TitleComponent /> 
*/

// Nested elements using React.createElement
const root = ReactDOM.createRoot(document.getElementById("root"));
const heading1 = React.createElement("h1", { key: "heading1" }, "Heading1");
const heading2 = React.createElement("h2", { key: "heading2" }, "Heading2");
const heading3 = React.createElement("h3", { key: "heading3" }, "Heading3");

const container = React.createElement("div", { className: "title" }, [
  heading1,
  heading2,
  heading3,
]);

// Nested elements using JSX
const head1 = <h1 key="head1">Heading 1 JSX</h1>;

const head2 = <h2 key="head2">Heading 2 JSX</h2>;

const head3 = <h3 key="head3">Heading 3 JSX</h3>;

const header_jsx = (
  <div className="title">
    {head1}
    {head2}
    {head3}
  </div>
);

const H1Component = () => {
  return (
    <h1 key="h1component" className="header1">
      Heading1 Component
    </h1>
  );
};
const H2Component = () => {
  return (
    <h2 key="h2component" className="header2">
      Heading2 Component
    </h2>
  );
};
const H3Component = () => {
  return (
    <h3 key="h3component" className="header3">
      Heading3 Component
    </h3>
  );
};

// using functional component
const TitleComponent = () => {
  return (
    <div key="div" className="title">
      <H1Component />
      <H2Component />
      <H3Component />
    </div>
  );
};

// component composition
const NestedComponent = () => {
  return (
    <div>
      <HeaderComponent />
      {container}
      {header_jsx}
      {/* {TitleComponent} It does not work and warning is thrown in console since TitleComponent is a component and not a react element*/}
      {/* {TitleComponent()} It works since TitleComponent is normal js function  */}
      {<TitleComponent />}
      {/* {<TitleComponent></TitleComponent>} It works since TitleComponent is enclosed within <> */}
    </div>
  );
};

const HeaderComponent = () => (
  <div>
    <nav className="nav-bar">
      <div className="logo-image">
        <img src={img} height="35" width="35" href="#"></img>
      </div>
      <a href="#" className="logo-name">
        Namaste 🙏🏻 React
      </a>
      <div className="form-search">
        <input />
        <button>Search</button>
      </div>
    </nav>
  </div>
);
// task 1
//root.render(container);

// task 2
//root.render(header_jsx);

//task 3
//root.render(<NestedComponent />);

// task 4
root.render(<HeaderComponent />);

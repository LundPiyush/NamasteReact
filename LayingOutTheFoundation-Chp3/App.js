import React from 'react';
import ReactDOM from'react-dom';

/*
Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
Create the same element using JSX
Create a functional component of the same with JSX
Pass attributes into the tag in JSX
Composition of Component(Add a component inside another)
{TitleComponent} vs <TitleComponent /> vs <TitleComponent><TitleComponent /> 
*/

const root = ReactDOM.createRoot(document.getElementById("#root"));
const heading1 = React.createElement("h1",{},"Heading1");
const heading2 = React.createElement("h2",{},"Heading2");
const heading3 = React.createElement("h3",{},"Heading3");

const container = React.createElement("div",{},[heading1,heading2,heading3]);

root.render(container);

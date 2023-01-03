import React from 'react';
import ReactDOM from 'react-dom';

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
const heading1 = React.createElement("h1", {}, "Heading1");
const heading2 = React.createElement("h2", {}, "Heading2");
const heading3 = React.createElement("h3", {}, "Heading3");

const container = React.createElement("div", {}, [heading1, heading2, heading3]);

// Nested elements using JSX
const head1 = (
    <h1 key="head1">Heading1</h1>
);

const head2 = (
    <h2 key="head2">Heading2</h2>
);

const head3 = (
    <h3 key="head3">Heading3</h3>
);

const HeadingComponent = () => (
    <div>
        {head1}
        {head2}
        {head3}
    </div>

)

root.render(<HeadingComponent />);
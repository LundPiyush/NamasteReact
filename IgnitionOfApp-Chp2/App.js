/*
Parcel does these things :

- HMR - Hot Module Replacement
- File Watching Algorithm - C++
- BUNDLING
- MINIFY
- Cleaning our Code
- Dev and Production build
- Super Fast build builing 
- Image Optimization
- Caching while development
- Compressions
- Compatible with older versions of browsers 
- Https on dev -> npx parcel index.html --https
- Port number
- Zero Configurations
- Consitent Hashing Algorithms
- 
*/



import React from "react";
import ReactDOM  from "react-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));        
// creating element 
const heading = React.createElement("h1",{id:"h1"},"heading1")
const heading2 = React.createElement("h2",{id:"h2"},"heading 2")
const container = React.createElement("div",{className:"container"},[heading,heading2]);
//passing the element to root
root.render(container)
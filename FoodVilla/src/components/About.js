import { Outlet } from "react-router-dom";
import ProfileClasssComponent from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";

const About2 = () => {
  return (
    <div>
      About us page 🚀
      {/* Injecting outlet as profile compoment is child of about component */}
      {/* <Outlet /> */}
      <ProfileFunctionalComponent name={"Piyush"} />
      {/* This is class component */}
      <ProfileClasssComponent name={"Piyush"} />
    </div>
  );
};

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  async componentDidMount() {
    // Best place to make an API call
    console.log("Parent ComponentDidMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        About us page 🚀
        {/* This is class component */}
        <ProfileFunctionalComponent name={"First Child"} />
        {/* <ProfileClasssComponent name={"First Child"} /> */}
        {/* <ProfileClasssComponent name={"Second Child"} /> */}
      </div>
    );
  }
}
export default About;
/**
 * Parent Constructor
 * Parent Render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *  DOM IS UPDATED FOR CHILDREN
 *
 *    First Child ComponentDidMount
 *    Second Child ComponentDidMount
 * Parent ComponentDidMount
 */

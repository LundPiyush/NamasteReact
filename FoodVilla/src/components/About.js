import { Outlet } from "react-router-dom";
import ProfileClasssComponent from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";

const About = () => {
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
export default About;

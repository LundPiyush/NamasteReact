import { useState } from "react";
import img from "../../assets/fv.png";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <nav className="nav-bar">
      <div className="logo-image">
        <img src={img} height="50" width="90" href="#"></img>
      </div>
      <a href="#" className="logo-name">
        Food Villa
      </a>
      <ul className="nav-list">
        <li>
          <a className="link-active" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
      </ul>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log out</button>
      )}
    </nav>
  );
};
export default HeaderComponent;

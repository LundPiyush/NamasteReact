import { useState } from "react";
import img from "../assets/fv.png";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useIsOnline();

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
          <Link className="link-active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/">Cart</Link>
        </li>
      </ul>
      <h1>{isOnline ? "🟢" : "🔴"}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log out</button>
      )}
    </nav>
  );
};
export default HeaderComponent;

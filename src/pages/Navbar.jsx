import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/home">Home </a>
        <a href="/projects"> Projects </a>
        <a href="/experience"> Experience </a>
        <a href="/about"> About </a>
      </div>
    </nav>
  );
}

export default Navbar;

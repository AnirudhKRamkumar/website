import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a id="name" href="/">
        Anirudh Ramkumar
      </a>
      <span id="links">
        <a href="/projects">Projects</a>
        <a href="/experience">Experience</a>
        <a href="/about">About</a>
      </span>
    </nav>
  );
}

export default Navbar;

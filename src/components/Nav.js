import React from "react";
import "../Nav.css";

function Nav() {
  const [showNavbar, setShowNavbar] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    });
  }, []);
  return (
    <nav className={`nav ${showNavbar && "nav__black"}`}>
      <img
        className="nav__image"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
      />

      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix avater"
      />
    </nav>
  );
}

export default Nav;

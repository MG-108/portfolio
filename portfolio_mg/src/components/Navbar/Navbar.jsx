import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinks = ["home", "about", "work", "skills", "contact"];

  return (
    <nav className="app__navbar">
      {/* LOGO IMG */}
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      {/* Desktop Nav */}
      <ul className="app__navbar-links">
        {navLinks.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            {/* div to add a dot on hover in navlinks */}
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Mobile NavMenu */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggleMenu(true)} />

        {toggleMenu ? (
          <motion.div
            animate={{ x: [300, 0] }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggleMenu(false)} />
            <ul>
              {navLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggleMenu(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;

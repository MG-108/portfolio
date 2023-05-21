import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { images } from "../../constants";
import "./Navbar.scss";
import { LanguageSwitcher } from "..";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { label: t("navHome"), value: "home" },
    { label: t("navAbout"), value: "about" },
    { label: t("navWork"), value: "work" },
    { label: t("navSkills"), value: "skills" },
    { label: t("navContact"), value: "contact" },
  ];

  return (
    <nav className="app__navbar">
      {/* LOGO IMG */}
      <div className="app__navbar-logo">
        <img src={images.mgLogo} alt="logo" />
      </div>

      {/* Desktop Nav */}
      <ul className="app__navbar-links">
        {navLinks.map((item) => (
          <li className="app__flex p-text" key={`desktop-${item.value}`}>
            {/* div to add a dot on hover in navlinks */}
            <div />
            <a href={`#${item.value}`}>{item.label}</a>
          </li>
        ))}
      </ul>

      <div className="app__flex">
        <LanguageSwitcher />
      </div>

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
                <li key={`mobile-${item.value}`}>
                  <a
                    href={`#${item.value}`}
                    onClick={() => setToggleMenu(false)}
                  >
                    {item.label}
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

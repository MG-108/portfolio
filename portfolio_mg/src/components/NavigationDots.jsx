import React from "react";

const NavigationDots = ({ active }) => {
  const navLinks = ["home", "about", "work", "skills", "contact"];
  return (
    <div className="app__navigation">
      {navLinks.map((item, index) => (
        <a
          key={item + index}
          href={`#${item}`}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;

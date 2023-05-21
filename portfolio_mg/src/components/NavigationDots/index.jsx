import "./NavigationDots.scss";

const navLinks = ["home", "about", "work", "skills", "contact"];

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navLinks.map((item, index) => (
        <a
          key={item + index}
          href={`#${item}`}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#4338ca" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;

import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const skillImages = [images.javascript, images.react, images.sass];

const Header = () => {
  return (
    <div className="app__header app__flex">
      {/* HEADER */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
        className="app__header-info"
      >
        {/*presentation CARD */}
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Matheus</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Front-End</p>
            <p className="p-text">Web Developer</p>
          </div>
        </div>
      </motion.div>

      {/* PROFILE(planet) IMG */}
      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 0.6, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile8} alt="profile_bg" />
        {/* CIRCLE behind IMG */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      {/* TECHNOLOGIES IMGS section */}
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {skillImages.map((skill, i) => (
          <div className="app__flex" key={`circle-${i}`}>
            <img src={skill} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");

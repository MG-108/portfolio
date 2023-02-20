import React, { useState } from "react";
import { useQuery } from "react-query";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  const query = '*[_type == "abouts"] ';

  const { isLoading, isError, data, error } = useQuery(query, async () => {
    const data = await client.fetch(query);
    return setAbouts(data);
  });

  return (
    <>
      <h2 className="head-text about-title">
        I Know That{" "}
        <span>
          Good Apps <br />
        </span>
        means <span>Good Business</span>
      </h2>

      <div className="app__profile">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);

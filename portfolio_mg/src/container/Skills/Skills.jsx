import { useState } from "react";
import { useQuery } from "react-query";

import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Skills.scss";
import { HoverTextAnimation } from "../../components";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  const query = '*[_type == "skills"] | order(_createdAt asc)';
  const { isLoading, isError, data, error } = useQuery(query, async () => {
    const data = await client.fetch(query);
    return setSkills(data);
  });

  return (
    <>
      <HoverTextAnimation tag={"h2"} text="Skills" className={"head-text"} />

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, i) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name + i}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>

              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__primarybg"
);

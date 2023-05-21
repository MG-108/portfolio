import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { HoverTextAnimation, ParagraphText } from "../../components";
import "./Skills.scss";

const Skills = () => {
  const query = '*[_type == "skills"] | order(_createdAt asc)';

  const { data, isLoading, error } = useQuery({
    queryKey: ["skillsData"],
    queryFn: async () => {
      const response = await client.fetch(query);

      return response;
    },
  });

  if (isLoading) return <div>Loading</div>;

  return (
    <>
      <HoverTextAnimation tag={"h2"} text="Skills" className={"head-text"} />

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {data.map((skill, i) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={`skill${i}`}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>

              <ParagraphText text={skill.name} />
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

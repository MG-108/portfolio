import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { HoverTextAnimation } from "../../components";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("Redux");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const projectsCategories = ["Redux", "Web App", "UI/UX", "All"];

  const query = '*[_type == "works"] | order(_createdAt asc)';
  const { isLoading, isError, data, error } = useQuery(query, async () => {
    const data = await client.fetch(query);
    return (
      setWorks(data),
      setFilterWork(data.filter((work) => work.tags.includes(activeFilter)))
    );
  });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "Redux") {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 250);
  };

  return (
    <>
      <HoverTextAnimation
        tag={"h2"}
        text={"Portfolio"}
        className={"head-text"}
      />

      <div className="app__work-filter">
        {projectsCategories.map((item, index) => (
          <div
            key={index}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayCHildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app_work-img app__flex">
              {/* PROJECT IMG */}
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                {/* PROJECT LINK ON HOVER*/}
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                {/* CODE LINK ON HOVER */}
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            {/* PROJECT DETAILS */}
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text"> {work.tags ? work.tags[0] : ""}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);

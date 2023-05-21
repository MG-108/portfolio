import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { BoldText, HoverTextAnimation, ParagraphText } from "../../components";
import "./Work.scss";

const projectsCategories = ["Redux", "Web App", "UI/UX"];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("Redux");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const { i18n, t } = useTranslation();

  const query = '*[_type == "works"] | order(_createdAt asc)';

  const { isLoading } = useQuery({
    queryKey: ["workData"],
    queryFn: async () => {
      const response = await client.fetch(query);

      setWorks(response);
      setFilterWork(
        response.filter((work) => work.tags.includes(activeFilter))
      );

      return response;
    },
  });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      setFilterWork(works.filter((work) => work.tags.includes(item)));
    }, 250);
  };

  if (isLoading) return <div>Loading...</div>;

  const isEnglish = i18n.resolvedLanguage === "en";

  const portfolio = isEnglish
    ? t("portfolio", { text: "Portfolio" })
    : t("portfolio", { text: "Portfólio" });

  return (
    <>
      <HoverTextAnimation tag={"h2"} text={portfolio} className={"head-text"} />

      <div className="app__work-filter">
        {projectsCategories.map((item, index) => (
          <div
            key={`category${index}`}
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
          <div className="app__work-item app__flex" key={`filter${index}`}>
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
              <BoldText text={work.title} />

              <ParagraphText
                styles={{ marginTop: 10 }}
                text={isEnglish ? work.description.en : work.description.pt}
              />

              <div className="app__work-tag app__flex">
                <ParagraphText text={work.tags ? work.tags[0] : null} />
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

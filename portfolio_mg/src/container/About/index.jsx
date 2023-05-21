import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { BoldText, ParagraphText } from "../../components";

const About = () => {
  const { t, i18n } = useTranslation();
  const query = `*[_type == "abouts"] | order(_createdAt asc)`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["aboutData"],
    queryFn: async () => {
      const response = await client.fetch(query);

      return response;
    },
  });

  if (isLoading) return <div>Loading</div>;

  const isEnglish = i18n.resolvedLanguage === "en";

  return (
    <>
      <h2 className="head-text about-title">
        <span> {t("about1")} </span> {t("about2")} <br />
        {isEnglish ? <span>{t("about3")} </span> : t("about3")}
        {isEnglish ? t("about4") : <span> {t("about4")} </span>}
      </h2>

      <div className="app__profile">
        {data.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={`about ${i}`}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />

            <BoldText
              styles={{ marginTop: 20 }}
              text={isEnglish ? about.title.en : about.title.pt}
            />

            <ParagraphText
              styles={{ marginTop: 10 }}
              text={isEnglish ? about.description.en : about.description.pt}
            />
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

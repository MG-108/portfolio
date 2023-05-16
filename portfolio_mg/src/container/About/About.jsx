import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  const query = `*[_type == "abouts"] | order(_createdAt asc)`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["aboutData"],
    queryFn: async () => {
      const response = await client.fetch(query);

      return response;
    },
  });

  if (isLoading) return <div>Loading</div>;

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
        {data.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={`about ${i}`}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title.en}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description.en}
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

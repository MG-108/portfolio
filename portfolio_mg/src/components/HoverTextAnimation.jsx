import React, { useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const HoverTextAnimation = ({ tag, text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [intervalId, setIntervalId] = useState(null);

  const handleMouseOver = () => {
    let iteration = 0;
    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      setDisplayText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(newIntervalId);
      }

      iteration += 1 / 3;
    }, 30);

    setIntervalId(newIntervalId);
  };

  const Tag = tag ? tag : "h1";

  return (
    <Tag className={className} onMouseOver={handleMouseOver} data-value={text}>
      {displayText}
    </Tag>
  );
};

export default HoverTextAnimation;

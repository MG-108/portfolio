import "./ParagraphText.scss";

const ParagraphText = ({ text, styles }) => {
  return (
    <p className={`p-text`} style={styles}>
      {text}
    </p>
  );
};

export default ParagraphText;

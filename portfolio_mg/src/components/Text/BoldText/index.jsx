import "./BoldText.scss";

const BoldText = ({ text, styles }) => {
  return (
    <h3 className="bold-text" style={styles}>
      {text}
    </h3>
  );
};

export default BoldText;

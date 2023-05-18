import { useTranslation } from "react-i18next";
import { images } from "../../constants";
import "./LanguageSwitcher.scss";

const languageOptions = [
  {
    name: "Português",
    value: "pt",
    flag: images.BR,
  },
  {
    name: "English",
    value: "en",
    flag: images.USA,
  },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <>
      {languageOptions.map((language) => (
        <div
          className="language-switcher"
          key={language.value}
          onClick={() => {
            i18n.changeLanguage(language.value);
          }}
        >
          <img src={language.flag} alt={language.name} />
        </div>
      ))}
    </>
  );
};

export default LanguageSwitcher;

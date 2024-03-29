import { useTranslation } from "react-i18next";
import { NavigationDots, SocialMediaLinks } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const { t } = useTranslation();
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMediaLinks />

        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p>@2023 MG</p>
            <p>{t("copyright")}</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;

import React from "react";
import "../../i18n";
import { useTranslation } from "react-i18next";

const LenguageSelector = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <p className="mt-3 flex gap-3 text-center text-[#8d96a7]">
      <button type="button" onClick={() => changeLanguage("en")}>
        <img
          src="https://wprock.fr/ezoimgfmt/assets.wprock.fr/emoji/joypixels/512/1f1fa-1f1f2.png"
          className="h-10"
          alt="EN"
        />
        En
      </button>
      {" | "}
      <button type="button" onClick={() => changeLanguage("es")}>
        <img
          src="https://assets.wprock.fr/emoji/joypixels/512/1f1ea-1f1f8.png"
          className=" h-10 "
          alt="ES"
        />
        Es
      </button>
      {" | "}
      <button type="button" onClick={() => changeLanguage("fr")}>
        <img
          src="https://wprock.fr/ezoimgfmt/assets.wprock.fr/emoji/joypixels/512/1f1eb-1f1f7.png"
          className=" h-10 "
          alt="FR"
        />
        Fr
      </button>
    </p>
  );
};

export default LenguageSelector;

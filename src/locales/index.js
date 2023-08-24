import React from "react";

import locale_en from "./en.json";
import locale_pt from "./pt.json";
import locale_es from "./es.json";

function Lang({ language, id }) {
  const data = {
    pt: locale_pt,
    en: locale_en,
    es: locale_es,
  };

  let chosenLanguage;

  if (language === `pt`) chosenLanguage = `português`;
  if (language === `en`) chosenLanguage = `inglês`;
  if (language === `es`) chosenLanguage = `espanhol`;

  console.log(
    `O Elemento de id "${id}" teve a linguagem do conteúdo alterada para ${chosenLanguage}`
  );

  return <>{data[language][id]}</>;
}

export default Lang;

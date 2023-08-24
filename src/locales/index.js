import React from "react";

import locale_en from "./en.json";
import locale_pt from "./pt.json";
import locale_es from "./es.json";

function Lang({ language, id }) {
  const data = {
    PT: locale_pt,
    EN: locale_en,
    ES: locale_es,
  };

  let chosenLanguage;

  if (language === `PT`) chosenLanguage = `português`;
  if (language === `EN`) chosenLanguage = `inglês`;
  if (language === `ES`) chosenLanguage = `espanhol`;

  console.log(
    `O Elemento de id "${id}" teve a linguagem do conteúdo alterada para ${chosenLanguage}`
  );

  return <>{data[language][id]}</>;
}

export default Lang;

import { createContext } from "react";
import EN from "./languages/english.json";
import PTBR from "./languages/portuguese.json";
import ES from "./languages/spanish.json";

export const languages = {
  english: {
    id: "EN",
    text: EN,
  },
  spanish: {
    id: "ES",
    text: ES,
  },
  portuguese: {
    id: "PTBR",
    text: PTBR,
  },
  /* Puedes agregar otros idiomas aquí */
};

const LanguageContext = createContext(languages.english); // Iniciar con inglés como idioma predeterminado

export default LanguageContext;

import React, { useContext } from "react";
import "../App.css";
import LanguageContext from "../context";

const Body = () => {
  const { language } = useContext(LanguageContext);
  const { text } = language;

  return (
    <div className="body">
      {/* Aquí puedes usar las traducciones específicas del idioma para el cuerpo de la página */}
      <h1>{text.title}</h1>
      <p>{text.paragraph}</p>
    </div>
  );
};

export default Body;

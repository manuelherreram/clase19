import React, { useContext } from "react";
import "../App.css";
import LanguageContext from "../context";

const Navbar = () => {
  const { language, handleChangeLA } = useContext(LanguageContext);
  const { id } = language;

  return (
    <div className="navbar">
      <p>Início</p>
      <p>Idioma atual: {id}</p>
      <button onClick={() => handleChangeLA("spanish")}>Cambiar idioma</button>
    </div>
  );
};

export default Navbar;

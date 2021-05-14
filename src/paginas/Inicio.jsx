import React from "react";
import imagem from "../assets/img/cupido.png";
import "../assets/css/inicio.css";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
      <Link to="/home" className="flex flex--centro">
        <img className="inicio-imagem" src={imagem} alt="ilustração inicio" />
      </Link>
    </main>
  );
};

export default Inicio;

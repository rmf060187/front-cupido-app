import React from "react";
import imagem from "../assets/img/cupido.png";
import "../assets/css/componentes/cabecalho.css";
import { Link } from "react-router-dom";

const Cabecalho = () => {
  return (
    <header className="cabecalho container">
      <div className="menu-hambueger">
        <span className="menu-hamburger_icone"></span>
      </div>
      <did className="cabecalho-container">
        <Link to="/home" className="flex flex--centro">
          <img className="cabecalho__logo" src={imagem} alt="Logo cupido" />
          <h1 className="cabecalho__titulo">Correio Elegante</h1>
        </Link>
      </did>

      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <li>
            <Link to="/correio" className="menu-item menu-item--entrar">
              Começar
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="menu-item">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu-cabecalho-background"></div>
    </header>
  );
};

export default Cabecalho;

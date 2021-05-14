import React from "react";
import "./assets/css/base/base.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Pagina404 from "./paginas/Pagina404";
import Cabecalho from "./components/Cabecalho";
import Correio from "./paginas/Correio";
import Inicio from "./paginas/Inicio";
import FormularioDeEnvio from "./paginas/Correio"

function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
           <Inicio />
        </Route>
        <Route path="/home">
        <Cabecalho />
          <Home />
        </Route>
        <Route path="/sobre">
        <Cabecalho />
          <Sobre />
        </Route>
        <Route path="/correio">
        <Cabecalho />
          <Correio />
        </Route>
        <Route>
        <Cabecalho />
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

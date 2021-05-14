import React, { Component } from "react";
import axios from "axios";
import "../assets/css/componentes/correio.css";

class FormularioDeEnvio extends Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      email: "",
      nome_destinatario: "",
      email_destinatario: "",
      texto: "",
      status: "Submit",
    };
  }
  render() {
    
    return (
      <main>
        <div className="container">
          <h2 className="titulo-pagina">Envie o seu Correio Elegante</h2>
        </div>
        <section className="container flex flex--centro">
          <article className="cartao">
            <div className="container">
              <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  value={this.state.name}
                  onChange={this.handleChange.bind(this)}
                  required
                />

                <label htmlFor="nome_destinatario">Nome Crush:</label>
                <input
                  type="text"
                  id="nome_destinatario"
                  value={this.state.name}
                  onChange={this.handleChange.bind(this)}
                  required
                />

                <label htmlFor="email_destinatario">E-mail Crush:</label>
                <input
                  type="text"
                  id="email_destinatario"
                  value={this.state.email}
                  onChange={this.handleChange.bind(this)}
                  required
                />

                <label htmlFor="texto">Mensagem:</label>
                <textarea
                  id="texto"
                  value={this.state.message}
                  onChange={this.handleChange.bind(this)}
                  required
                />

                <input classname="menu-item menu-item--entrar" type="submit" />
              </form>
            </div>
          </article>
        </section>
      </main>
    );
  }
  handleChange(event) {
    const field = event.target.id;
    if (field === "nome") {
      this.setState({ nome: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "nome_destinatario") {
      this.setState({ nome_destinatario: event.target.value });
    } else if (field === "email_destinatario") {
      this.setState({ email_destinatario: event.target.value });
    } else if (field === "texto") {
      this.setState({ texto: event.target.value });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "Sending" });
    axios({
      method: "POST",
      url: "http://localhost:3000/dev/infoMensagens/",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Message Sent");
        this.setState({ name: "", email: "", message: "", status: "Submit" });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }
}

const Correio = FormularioDeEnvio;

export default Correio;

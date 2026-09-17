import "./style.scss"
import { Link } from "react-router-dom";
import { useState } from "react";

const Cadastro = () => {

  const [mensagem, setMensagem] = useState("");

  const handleCadastro = (event) => {
    event.preventDefault();

    localStorage.setItem("nome", event.target.senha.value);
    localStorage.setItem("telefone", event.target.telefone.value);
    localStorage.setItem("senha", event.target.senha.value);

    setMensagem("Cadastro realizado com sucesso! Realize o login");
  }
  return (

    <>
      <div className="wrapper-login">
        <img src="./logo.png" alt="logo" />
        <div className="container-login">

          <h2>Bem-vindo!</h2>
          <p>Cadastre-se</p>

          <form onSubmit={handleCadastro}>
            <label htmlFor="nome">Nome</label>
            <input
              type="name"
              id="nome"
              placeholder="Digite seu nome"
            />
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              id="telefone"
              placeholder="Digite seu telefone"
            />

            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
            />

            <button type="submit">Cadastrar-se</button>
          </form>

          <p>
            Já tem uma conta?
            <span><Link to="/">Faça o login</Link></span>
          </p>
          {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}

        </div>

      </div>
    </>
  )
}

export default Cadastro


import "./style.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cadastro = () => {
  //validações - mensagem sucesso e mensagem de erro
  const [mensagem, setMensagem] = useState("");
  const [erroDados, setErroDados] = useState("");

  const handleCadastro = (event) => {
    event.preventDefault();

    const nome = event.target.nome.value.trim();
    const telefone = event.target.telefone.value.trim();
    const senha = event.target.senha.value.trim();

    if (!nome || !telefone || !senha) {
      setErroDados("Preencha todos os campos.");
      setMensagem("");
      return;
    }

    setErroDados("");

    localStorage.setItem("nome", nome);
    localStorage.setItem("telefone", telefone);
    localStorage.setItem("senha", senha);

    setMensagem("Cadastro realizado com sucesso! Realize o login");
  };

  return (
    <div className="wrapper-login">
      <img src="./logo.png" alt="logo" />

      <div className="container-login">
        <h2>Bem-vindo!</h2>
        <p>Cadastre-se</p>

        <form onSubmit={handleCadastro}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
          />

          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="Digite seu telefone"
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
          />

          {erroDados && (
            <p className="mensagem-erro">{erroDados}</p>
          )}

          <button type="submit">Cadastrar-se</button>
        </form>

        <p>
          Já tem uma conta?
          <span>
            <Link to="/">Faça o login</Link>
          </span>
        </p>

        {mensagem && (
          <p className="mensagem-sucesso">{mensagem}</p>
        )}
      </div>
    </div>
  );
};

export default Cadastro;

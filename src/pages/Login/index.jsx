import "./style.scss"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [erroCampos, setErroCampos] = useState("");
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    const telefone = event.target.telefone.value.trim();
    const senha = event.target.senha.value.trim();

    if (!telefone || !senha) {
      setErroCampos("Preencha todos os campos.");
      return;
    }

    setErroCampos("");

    localStorage.setItem("logado", "true");
    navigate("/inicio");
  }

  return (

    <>
      <div className="wrapper-login">
        <img src="./logo.png" alt="logo" />

        <div className="container-login">
          <h2>Bem-vindo!</h2>
          <p>Entre na sua conta</p>

          <form onSubmit={handleLogin}>
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

            {erroCampos && (
              <p className="mensagem-erro">{erroCampos}</p>
            )}

            <button type="submit">Entrar</button>
          </form>

          <p>
            Ainda não tem uma conta?
            <span>
              <Link to="/cadastro">Cadastre-se</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login

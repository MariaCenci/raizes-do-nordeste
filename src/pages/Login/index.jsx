import "./style.scss"
import { Link } from "react-router-dom";

const Login = () => {
  function handleLogin(event) {
    event.preventDefault();
    localStorage.setItem("logado", "true");
    window.location.href = "/inicio";

    
  }
  return (

    <>
      <div className="wrapper-login">    
        <img src="./logo.png" alt="logo" />
        <div className="container-login">
      
          <h1>Bem-vindo!</h1>
          <p>Entre na sua conta</p>

          <form onSubmit={handleLogin}>
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

            <button type="submit">Entrar</button>
          </form>

          <p>
            Ainda não tem uma conta?
            <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </div>

      </div>
    </>
  )
}

export default Login

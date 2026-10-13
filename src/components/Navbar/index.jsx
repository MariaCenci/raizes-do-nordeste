import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HamburguerMenu from "../HamburguerMenu";
import "./style.scss";

const Navbar = () => {
  //atualiza tela de acordo com responsividade
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);

    //cleanup
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const navigate = useNavigate();

  const handleUnidade = (event) => {
     const unidade = event.target.value;
    if (unidade) {
      navigate(`/cardapio/${unidade}`);
    }

  }

  const handleLogout = () => {
    localStorage.removeItem("logado");
    window.location.href = "/";
  }


  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">

          <div className="navbar-links ">
            {/*activates hamburguer menu for mobile */}
            {screenWidth <= 899 && <HamburguerMenu />}

            <ul className="nav-links-list">
              <li>
                <Link to="pontosFidelidade"   >Pontos fidelidade</Link>
              </li>

              <li className="select-cardapio">
                <span>Cardápio</span>

                <select onChange={handleUnidade} defaultValue="">
                  <option value="" disabled>Unidade</option>
                  <option value="unidade1">Unidade 1</option>

                  <option value="unidade2">Unidade 2</option>

                  <option value="unidade3">Unidade 3</option>

                </select>
              </li>

              <li>
                <Link to="pedidos"  >Pedidos</Link>
              </li>
              <li>
                <Link to="carrinho"><img id='cart-icon' src="/trolley.png" alt="carrinho" /></Link>
              </li>
              <li>
                <button
                  className="btn-logout"
                  onClick={handleLogout}><span>Sair</span>
                  <img src="/logout.png" alt="sair" />

                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar

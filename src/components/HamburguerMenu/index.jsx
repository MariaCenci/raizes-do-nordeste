import { useState } from "react";

import { Link } from "react-router-dom";
import "./style.scss";

const HamburguerMenu = () => {
   const body = document.querySelector('body')
   //setMenu to true or false according to opened or closed
   const [activeMenu, setActiveMenu] = useState(false);

   //open and close menu
   const toggleMenu = () => {
      setActiveMenu(!activeMenu);
   };

   //closes menu when a link is clicked
   const closeMenu = () => {
      setActiveMenu(false)
   }

   // disactivate scroll bar opened menu 
   if (activeMenu) {
      body.style.overflow = 'hidden'
   } else {
      body.style.overflow = 'auto'
   }

   const handleLogout = () => {
      localStorage.removeItem("logado");
      window.location.href = "/";
   }

   return (
      <>
         <div
            onClick={toggleMenu}
            className={activeMenu ? "toggleActive" : "toggle"}
         >
            <div className=" hamburguer-icon"></div>
         </div>

         <div className={activeMenu ? "menuOpen" : "menuClose"}>
            {activeMenu && (
               <div className="menu-list">
                  <ul className="list-pages">
                     <li>
                        <Link to="/inicio" smooth={true} duration={500} onClick={closeMenu} >Início</Link>
                     </li>
                     <li>
                        <Link to="pontosFidelidade" smooth={true} duration={500} onClick={closeMenu} >Pontos fidelidade</Link>
                     </li>

                     <div id="cardapio-list">
                        <p>Cardápio</p>
                        <li>
    <Link to="/cardapio/unidade1" onClick={closeMenu}>
      Cardápio unidade 1
    </Link>
  </li>

  <li>
    <Link to="/cardapio/unidade2" onClick={closeMenu}>
      Cardápio unidade 2
    </Link>
  </li>

  <li>
    <Link to="/cardapio/unidade3" onClick={closeMenu}>
      Cardápio unidade 3
    </Link>
  </li>
                     </div>

                     <li>
                        <Link to="pedidos" smooth={true} duration={500} onClick={closeMenu}>Pedidos</Link>
                     </li>
                     <li>
                        <Link to="carrinho" smooth={true} duration={500} onClick={closeMenu} >Carrinho</Link>
                     </li>
                     <li> <button
                        className="btn-logout"
                        onClick={handleLogout}><span>Sair</span>
                        <img src="/logout.png" alt="sair" />

                     </button></li>
                  </ul>
               </div>
            )}
         </div>
      </>
   )
}

export default HamburguerMenu

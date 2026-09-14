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
                        <Link to="pontosFidelidade" smooth={true} duration={500} onClick={closeMenu} >Pontos fidelidade</Link>
                     </li>
                     <li>
                        <Link to="cardapio" smooth={true} duration={500} onClick={closeMenu}>Cardápio</Link >
                     </li>
                     <li>
                        <Link to="pedidos" smooth={true} duration={500} onClick={closeMenu}>Pedidos</Link>
                     </li>
                     <li>
                        <Link to="carrinho" smooth={true} duration={500} onClick={closeMenu} >Carrinho</Link>
                     </li>
                  </ul>
               </div>
            )}
         </div>
      </>
   )
}

export default HamburguerMenu

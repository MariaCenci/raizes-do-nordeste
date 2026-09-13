import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HamburguerMenu from "../HamburguerMenu";
import "./style.scss";

const Navbar = () => {
      //updates screen width for responsivity
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

  return (
    <>
        <div className="navbar-container">
        <nav className="navbar">
         
        <div className="navbar-links ">
           {/*activates hamburguer menu for mobile */}
              {screenWidth <= 899 && <HamburguerMenu />}
           
            <ul className="nav-links-list">
            <li>
                <Link to="home"   >Home</Link>
              </li>
              <li>
                <Link to="about"   >About</Link >
              </li>
              <li>
                <Link to="projects"  >Projects</Link>
              </li>
              <li>
                <Link to="contact"  >Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar

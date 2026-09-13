import Navbar from "../Navbar";
import "./style.scss";

const Header = () => {
  return (
    <>
    <section id="header">
      <div className="header-container">
        <div className="logo">
         <span id="logo-img"><img src="../logo.png" width="144px" alt="logo" /></span>
         
        </div>
        <Navbar />
      </div>
    </section>
    </>
  );
};

export default Header;

import Navbar from "../Navbar";
import "./style.scss";

const Header = () => {
  return (
    <>
    <section id="header">
      <div className="header-container">
        <div className="logo">
         <span id="logo-img"><img src="../public/logo.png" width="160px" alt="cacto" /></span>
         
        </div>
        <Navbar />
      </div>
    </section>
    </>
  );
};

export default Header;

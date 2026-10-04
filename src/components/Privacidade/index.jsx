import { Link } from "react-router-dom";
import "./style.scss"


const Privacidade = ({ onClose }) => {

  const aceitarPrivacidade = () => {
   sessionStorage.setItem("privacidadeAceita", "true");
    //localStorage.setItem("privacidadeAceita", "true");
    onClose();
  }

  return (
    <div className="privacy-modal">

      <div className="privacy-content">

        <h5>Sua privacidade é importante para nós</h5>

        <p>
          O Raízes do Nordeste valoriza a sua privacidade.
          Seus dados pessoais são utilizados para realizar seu
          cadastro, permitir o acesso à sua conta e oferecer
          os serviços disponíveis na plataforma.
        </p>

        <p>
          Os dados são tratados de acordo com a Lei Geral de
          Proteção de Dados (LGPD).
        </p>

        <Link to="/privacidade">
          Política de Privacidade
        </Link>

        <button onClick={aceitarPrivacidade}>
          Entendi e continuar
        </button>

      </div>

    </div>
  )
}

export default Privacidade
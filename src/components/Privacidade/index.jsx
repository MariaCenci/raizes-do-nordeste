import "./style.scss"


const Privacidade = ({ onClose }) => {

  const aceitarPrivacidade = () => {
   sessionStorage.setItem("privacidadeAceita", "true");
    onClose();
  }

  return (
    <div className="privacy-modal">

      <div className="privacy-content">

        <h5>Sua privacidade é importante para nós</h5>

        <p>
          Nós da Raízes do Nordeste valorizamos a sua privacidade.
          Seus dados pessoais são utilizados para realizar seu
          cadastro, permitir o acesso à sua conta e oferecer
          os serviços disponíveis na plataforma. Podem ser registrados dados informados nos formulários, como nome, telefone e senha, além de informações relacionadas ao carrinho, aos produtos selecionados, aos pedidos e à forma de pagamento escolhida.
        </p>

        <p>
          Os dados são tratados de acordo com a Lei Geral de
          Proteção de Dados (LGPD) nº 13.709, 2018.
        </p>

    
        <button onClick={aceitarPrivacidade}>
          Entendi e continuar
        </button>

      </div>

    </div>
  )
}

export default Privacidade
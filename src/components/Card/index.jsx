import "./style.scss";
import { useState } from "react";
import Tag from "../Tag";
import Preco from "../Preco";
import { adicionarAoCarrinho } from "../../carrinho";


const Card = ({ title, src, text, tag, preco }) => {
  const [mensagemCarrinho, setMensagem] = useState("");
  return (
    <>
      <div className="card-item">
        <Tag tag={tag} />

        <img
          className="card-item-img"
          src={src}
          alt="comida nordestina"
          loading="lazy"
        />

        <div className="card-info-container">
          <h2 className="card-item-title">{title}</h2>
          <p className="card-item-text">{text}</p>
          <div className="btn-container">
            <Preco preco={preco} />

<button
  className="card-btn"
  onClick={() => {
    adicionarAoCarrinho({
      title,
      src,
      text,
      tag,
      preco
    });

    setMensagem(alert(`Adicionado ao carrinho!`));

    setTimeout(() => {
      setMensagem("");
    }, 2500);
  }}
>
  <img src="/icon-cart.png" alt="Adicionar ao carrinho" />
</button>

{mensagemCarrinho && (
  <p className="mensagem-carrinho">{mensagemCarrinho}</p>
)}

          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

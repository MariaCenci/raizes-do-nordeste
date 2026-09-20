import "./style.scss";
import Button from "../Button";
import Tag from "../Tag";
import Preco from "../Preco";

const Card = ({ title, src, text, tag, preco }) => {
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
       <button className="card-btn" ><img src="/trolley.png" alt="carrinho" /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

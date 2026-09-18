import "./card.scss";
import Button from "../Button/Button.jsx";
import Tag from "../Tag/Tag.jsx";
import Price from "../Price/Price.jsx";

const Card = ({ title, src, text, tag, price }) => {
  return (
    <>
      <div className="card-item">
        <Tag tag={tag} />

        <img
          className="card-item-img"
          src={src}
          alt="Bakery item"
          loading="lazy"
        />

        <div className="card-info-container">
          <h2 className="card-item-title">{title}</h2>
          <p className="card-item-text">{text}</p>
          <div className="btn-container">
            <Price price={price} />
            <Button
              className="card-item"
              label="Buy now"
              icon="./icons/cart.svg"
              iconName="cart"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

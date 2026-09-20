import React from "react";
import "./style.scss";

const Preco = ({ preco }) => {
  return (
    <>
      <span className="price-card">{preco}</span>
    </>
  );
};

export default Preco;

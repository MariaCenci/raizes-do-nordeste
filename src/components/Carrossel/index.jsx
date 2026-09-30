import { useState } from "react";
import "./style.scss";
import Preco from "../Preco";
import Tag from "../Tag";

const Carrossel = () => {
  const items = [
      {
        title: "Tapioca salgada recheada",
        src: "/tapiocaCarne.jpg",
        text: "Tapioca com amido de mandioca artesanal recheada com carne de sol, tomate seco e queijo.",
        tag: "- 50%",
        preco: "R$ 12,00"
      },

      {
        title: "Açaí",
        src: "/acai2.jpg",
        text: "Açaí doce com acompanhamentos: granola, mel, morango e kiwi.",
        tag: "Popular",
        preco: "R$ 15,00"
      },
            {
        title: "Baião de dois",
        src: "/ensopado.jpg",
        text: "Arroz com feijão-de-corda ou feijão verde, queijo coalho e temperos.",
        tag: "Tradicional",
        preco: "R$ 20,00"
      },
            {
        title: "Café artesanal",
        src: "/cafe.jpg",
        text: "Café artesanal. Grãos colhidos e selecionados a mão. Perfeito para qualquer hora do seu dia!",
        tag: "Especial",
        preco: "R$ 10,00"
      },
            {
        title: "Bolinho de macaxeira",
        src: "/bolinho.jpg",
        text: "Bolinho de macaxeira tradicional",
        tag: "Tradicional",
        preco: "R$ 15,00"
      },
           {
        title: "Acarajé",
        src: "/acaraje.jpg",
        text: "Acarajé tradicional nordestino. Massa aerada de feijão-fradinho, frita no azeite de dendê, recheado com vatapá (creme de pão, amendoim e castanhas), caruru (cozido de quiabo), camarão seco defumado e uma salada de vinagrete.",
        tag: "Tradicional",
        preco: "R$ 20,00"
      },
  
    ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 252;
  const visibleCards = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === customers.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? (prevIndex = customers.length - visibleCards)
        : prevIndex - 1
    );
  };

  const transformValue = `translateX(-${currentIndex * cardWidth}px)`;

  return (
    <>
      <section id="carousel-section">
        <div className="title-carousel">
          <h1 className="title-section">Promoções!</h1>
        </div>
        <div className="carousel-section-wrapper">
          <button id="prev-btn" className="carousel-btn" onClick={prevSlide}>
            <img src="/lower.svg" alt="" />
          </button>
          <div className="carousel-container">
             
            <div
              className="carousel-wrapper"
              style={{ transform: transformValue }}
            >
              
              {items.map((items, index) => (
                <div
                 className="card-item"
                  key={index}
                >
                    <Tag 
                   id="tag-promo" tag={items.tag} /> 
                  <img
                    className="card-item-img"
                    src={items.src}
                    alt="product image"
                  />

                   <div className="card-info-container">
                    
               <h2 className="card-item-title">{items.title}</h2>
                  <p className="card-item-text">{items.text}</p>
                   <div className="btn-container">
                    
                     <Preco preco={items.preco} />
                     
                  <button className="card-btn" ><img src="/trolley.png" alt="carrinho" /></button>
                      </div>
                 
                    </div>
                </div>
              ))}
            </div>
          </div>
          <button id="next-btn" className="carousel-btn" onClick={nextSlide}>
            <img src="/greater.svg" alt="" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Carrossel;

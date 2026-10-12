import { useState } from "react";
import "./style.scss";
import Preco from "../Preco";
import Tag from "../Tag";
import { adicionarAoCarrinho } from "../../carrinho";

const Carrossel = () => {
  const items = [
      {
        title: "Dadinhos de tapioca",
        src: "/dadoTapioca.jpg",
        text: "Dadinhos de tapioca com amido de mandioca artesanal acompanhados de geleia de pimenta.",
        tag: "- 50%",
        preco: "R$ 12,00"
      },

      {
        title: "Açaí",
        src: "/acai2.jpg",
        text: "Açaí doce com acompanhamentos: granola, mel, morango e kiwi.",
        tag: "- 15%",
        preco: "R$ 15,00"
      },
            {
        title: "Baião de dois",
        src: "/ensopado.jpg",
        text: "Arroz com feijão-de-corda ou feijão verde, queijo coalho e temperos.",
        tag: "- 10%",
        preco: "R$ 20,00"
      },
            {
        title: "Café artesanal",
        src: "/cafe.jpg",
        text: "Café artesanal. Grãos colhidos e selecionados a mão. Perfeito para qualquer hora do seu dia!",
        tag: "- 5%",
        preco: "R$ 10,00"
      },
            {
        title: "Bolinho de macaxeira",
        src: "/bolinho.jpg",
        text: "Bolinho de macaxeira tradicional",
        tag: "- 30%",
        preco: "R$ 15,00"
      },
           {
        title: "Acarajé",
        src: "/acaraje.jpg",
        text: "Acarajé tradicional nordestino. Massa de feijão-fradinho, frita no azeite de dendê, recheado com vatapá, caruru, camarão seco e vinagrete.",
        tag: "- 10%",
        preco: "R$ 20,00"
      },
  
    ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 252;
  const visibleCards = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? (prevIndex = items.length - visibleCards)
        : prevIndex - 1
    );
  };

  const transformValue = `translateX(-${currentIndex * cardWidth}px)`;

  const [mensagemCarrinho, setMensagem] = useState("");
  return (
    <>
      <section id="carousel-section">
        <div className="title-carousel">
        <h3 className="title-section">Nossas promoções!</h3>
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
                     
<button
  className="card-btn"
  onClick={() => {
    adicionarAoCarrinho({
      title: items.title,
      src: items.src,
      text: items.text,
      tag: items.tag,
      preco: items.preco
    });

    setMensagem(alert(`Adicionado ao carrinho!`));

    setTimeout(() => {
      setMensagem("");
    }, 2500);
  }}
>
  <img src="/icon-cart.png" alt="Adicionar ao carrinho" />
</button>
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

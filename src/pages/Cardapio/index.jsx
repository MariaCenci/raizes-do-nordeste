import "./style.scss";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";

const Cardapio = () => {
  const { unidade } = useParams();

  const cardapios = {
    unidade1: [
      {
        title: "Tapioca recheada",
        src: "/img2.jpg",
        text: "Tapioca recheada com ingredientes regionais",
        tag: "Tradicional",
        preco: "R$ 12,00"
      },

      {
        title: "Cuscuz recheado",
        src: "/img2.jpg",
        text: "Cuscuz recheado com ingredientes selecionados",
        tag: "Popular",
        preco: "R$ 15,00"
      }
    ],

    unidade2: [
      {
        title: "Bolo de macaxeira",
        src: "/img2.jpg",
        text: "Bolo de macaxeira caseiro",
        tag: "Tradicional",
        preco: "R$ 10,00"
      },

      {
        title: "Café regional",
        src: "/img2.jpg",
        text: "Café acompanhado de ingredientes regionais",
        tag: "Popular",
        preco: "R$ 8,00"
      }
    ],

    unidade3: [
      {
        title: "Cuscuz com carne de sol",
        src: "/img2.jpg",
        text: "Cuscuz recheado com carne de sol",
        tag: "Especial",
        preco: "R$ 18,00"
      },

      {
        title: "Tapioca de queijo",
        src: "/img2.jpg",
        text: "Tapioca recheada com queijo",
        tag: "Tradicional",
        preco: "R$ 13,00"
      }
    ]
  };
  const cards = cardapios[unidade];

  return (
    <>
<h2 className="title-cardapio"> Cardápio - {unidade.replace("unidade", "Unidade ")}</h2>    
      <div className="cards-wrapper">
  
        <div className="cards-container">

          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              src={card.src}
              text={card.text}
              tag={card.tag}
              preco={card.preco}
            />
          ))}

        </div>
      </div>
    </>
  )
}

export default Cardapio

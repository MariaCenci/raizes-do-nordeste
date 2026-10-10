import "./style.scss";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import Carrossel from "../../components/Carrossel";

const Cardapio = () => {
  const { unidade } = useParams();

  const cardapios = {
    unidade1: [
      {
        title: "Tapioca salgada recheada",
        src: "/tapiocaCarne.jpg",
        text: "Tapioca com amido de mandioca artesanal recheada com carne de sol, tomate seco e queijo.",
        tag: "Tradicional",
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
        text: "Acarajé tradicional nordestino. Massa de feijão-fradinho, frita no azeite de dendê, recheado com vatapá, caruru, camarão seco e vinagrete.",
        tag: "Tradicional",
        preco: "R$ 20,00"
      },
            {
       title: "Pamonha",
        src: "/pamonha2.jpg",
        text: "Pamonha feita com milho regional.",
        tag: "Tradicional",
        preco: "R$ 10,00"
      },

  
  
    ],

    unidade2: [
      {
        title: "Pamonha",
        src: "/pamonha2.jpg",
        text: "Pamonha feita com milho regional.",
        tag: "Tradicional",
        preco: "R$ 10,00"
      },

      {
        title: "Café regional",
        src: "/cafe2.jpg",
        text: "Café coado em mini coador de tecido, acompanhado de ingredientes regionais.",
        tag: "Popular",
        preco: "R$ 8,00"
      },
            {
        title: "Cuscuz",
        src: "/cuscuz.jpg",
        text: "Cuscuz tradicional nordestino com ovos mexidos e queijo. Feito com milho regional.",
        tag: "Tradicional",
        preco: "R$ 12,00"
      },
            {
        title: "Moqueca de peixe",
        src: "/moquecaCamarao.jpg",
        text: "Moqueca de peixe tradicional bahiana. Com peixe, cebola, pimentão e leite de coco.",
        tag: "Tradicional",
        preco: "R$ 12,00"
      },
        {
        title: "Vatapá",
        src: "/arrozCamarao.jpg",
        text: "Creme aveludado feito à base de pão amanhecido (ou farinha), leite de coco, amendoim, castanha-de-caju, camarão seco e azeite de dendê. Acompanhado de arroz branco.",
        tag: "Tradicional",
        preco: "R$ 30,00"
      },
                {
        title: "Tapioca doce recheada",
        src: "/tapiocaDoce.jpg",
        text: "Tapioca com amido de mandioca artesanal recheada com chocolate 60% cacau e morangos frescos.",
        tag: "Popular",
        preco: "R$ 12,00"
      },
                   {
        title: "Bolo de milho",
        src: "/bolo2.jpg",
        text: "Bolo de milho tradicional. Feito com farinha de milho regional.",
        tag: "Popular",
        preco: "R$ 12,00"
      },
    ],

    unidade3: [
      {
        title: "Acarajé",
        src: "/acaraje.jpg",
        text: "Acarajé tradicional nordestino. Massa de feijão-fradinho, frita no azeite de dendê, recheado com vatapá, caruru, camarão seco e vinagrete.",
        tag: "Tradicional",
        preco: "R$ 20,00"
      },

      {
        title: "Carne com macaxeira",
        src: "/carneMandioca.jpg",
        text: "Carne em tirinhas com macaxeira nordestina frita",
        tag: "Popular",
        preco: "R$ 30,00"
      },
            {
        title: "Vatapá",
        src: "/arrozCamarao.jpg",
        text: "Creme aveludado feito à base de pão amanhecido (ou farinha), leite de coco, amendoim, castanha-de-caju, camarão seco e azeite de dendê. Acompanhado de arroz branco.",
        tag: "Tradicional",
        preco: "R$ 30,00"
      },
            {
        title: "Bolinho de peixe",
        src: "/bolinhoFrito.jpg",
        text: "8 unidades de bolinho de peixe regional.",
        tag: "Popular",
        preco: "R$ 20,00"
      },
            {
        title: "Tapioca doce",
        src: "/tapiocaDoce.jpg",
        text: "Tapioca com amido de mandioca artesanal recheada com chocolate 60% cacau e morangos frescos.",
        tag: "Popular",
        preco: "R$ 12,00"
      },
             {
        title: "Bolo de milho",
        src: "/bolo2.jpg",
        text: "Bolo de milho tradicional. Feito com farinha de milho regional.",
        tag: "Popular",
        preco: "R$ 12,00"
      },
                  {
        title: "Café artesanal",
        src: "/cafe.jpg",
        text: "Café artesanal. Grãos colhidos e selecionados a mão. Perfeito para qualquer hora do seu dia!",
        tag: "Especial",
        preco: "R$ 10,00"
      },
    ]
  };
  const cards = cardapios[unidade];

  return (
    <>
<h2 className="title-cardapio"> Cardápio - {unidade.replace("unidade", "Unidade ")}</h2>    
      <div className="cards-wrapper">
       
  <Carrossel />
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

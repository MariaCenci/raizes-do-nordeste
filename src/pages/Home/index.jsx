import "./style.scss"

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <div className="container-hero">
          <div id="hero-banner">
            <img src="/moquecaCamarao.jpg" alt="comida nordestina" />
           
          </div>
        </div>
        <div className="container-about">
          <div className="text-wrapper">
            <h1>Sobre nós</h1>
            <p>A Raízes do Nordeste nasceu de um sonho familiar: levar o verdadeiro sabor e a cultura nordestina para o dia a dia de todos. Começamos pequenos, com receitas feitas com carinho e ingredientes que carregam a tradição do Nordeste.
              <br />
              <br /> Hoje, somos uma rede em expansão, oferecendo tapiocas, cuscuz recheado, bolos, sucos regionais e cafés preparados para trazer aquele gostinho especial de casa.
              <br />
              <br />
              Mais do que uma lanchonete, queremos proporcionar uma experiência que valoriza nossas raízes, unindo tradição, qualidade e praticidade em cada detalhe.</p>
          </div>

          <div className="img-wrapper">
            <img src="./mesas.jpg" alt="" />
          </div>
        </div>


      </div>

    </>
  )
}

export default Home

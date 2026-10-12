import React from 'react'
import "./style.scss"

const Pedidos = () => {
  const pedidos = JSON.parse(
  localStorage.getItem("pedidos") || "[]"
);
  return (
    <>
   
      <h2 className='title-pedido'>Meus pedidos</h2>
      <div className="pedidos-wrapper">
        <div className="pedidos-container">
          <div className="pedido-item">
            <div className="wrapper-text">
              <h5>Pedido #006</h5>
            
            </div>
          </div>
          <div className="pedido-item">
              <div className="wrapper-text">
              <h5>Pedido #004</h5>
              <ul>
                <li>1 Café passado</li>
              <li>2 Bolinho mandioca</li>
              <li>1 Tapioca de carne</li>
              </ul>
              </div>
            <div className="wrapper-status">
              <p>Em preparo</p>
              <div className='status-yellow'> </div>
              </div>
          </div>

           <div className="pedido-item">
              <div className="wrapper-text">
              <h5>Pedido #003</h5>
              <ul>
                <li>2 Tapioca doce</li>
              <li>4 Açaí</li>
              <li>1 Tapioca de carne</li>
              </ul>
              </div>
            <div className="wrapper-status">
              <p>Em preparo</p>
              <div className='status-yellow'> </div>
              </div>
          </div>

           <div className="pedido-item">
              <div className="wrapper-text">
              <h5>Pedido #002</h5>
              <ul>
                <li>6 Acarajé</li>
              <li>2 Cuscuz</li>
              <li>1 Moqueca Peixe</li>
              <li>2 Bolo de milho</li>
              </ul>
              </div>
            <div className="wrapper-status">
              <p>Recebido</p>
              <div className='status-blue'> </div>
              </div>
          </div>
    
      <div className="pedido-item">
              <div className="wrapper-text">
              <h5>Pedido #001</h5>
              <ul>
                <li>3 Baião de dois </li>
              <li>2 Bolinho macaxeira</li>
              <li>1 Tapioca de carne</li>
              </ul>
              </div>
            <div className="wrapper-status">
              <p>Pronto</p>
              <div className='status-green'> </div>
              </div>
          </div>
       

        </div>
      </div>
    </>
  )
}

export default Pedidos


/**
 {pedidos.map((pedido) => (
  <div key={pedido.id} className="pedido" >
    <h3>Pedido #{pedido.id}</h3>

    <p>Cliente: {pedido.nome}</p>

    <p>
      Forma de pagamento: {pedido.formaPagamento}
    </p>

    <p>
      Total: {pedido.total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })}
    </p>

    <p>Status: {pedido.status}</p>

    <h4>Produtos</h4>

    {pedido.produtos.map((produto, index) => (
      <p key={produto.id ?? produto.title ?? index}>
        {produto.title} x {produto.quantidade}
      </p>
    ))}
  </div>
))} 


 */
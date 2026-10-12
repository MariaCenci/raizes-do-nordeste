import React from 'react'
import "./style.scss"

const Pedidos = () => {
  const pedidos = JSON.parse(
    localStorage.getItem("pedidos") || "[]"
  );

  return (
    <>
      <h2 className="title-pedido">Meus pedidos</h2>

      <div className="pedidos-wrapper">
        <div className="pedidos-container">
      


          {pedidos.map((pedido) => (
            <div key={pedido.id} className="pedido-item">

              <div className="wrapper-text">
                <h5>Pedido #{pedido.id}</h5>

                <ul>
                  {pedido.produtos.map((produto, index) => (
                    <li key={produto.id ?? produto.title ?? index}>
                      {produto.quantidade} {produto.title}
                    </li>
                  ))}
                </ul>

                <p className='forma-pagamento'>
                  Forma de pagamento: {pedido.formaPagamento}
                </p>

                <p className='forma-pagamento'>
                  Total: {Number(pedido.total).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </p>
              </div>

              <div className="wrapper-status">
                <p>{pedido.status}</p>
                <div className="status-blue"></div>
              </div>

            </div>
            
          ))}
              {pedidos.length === 0 && (
            <p>Você ainda não possui pedidos.</p>
          )}

                <div className="pedido-item">
        <div className="wrapper-text">
          <h5>Pedido #exemplo</h5>
          <ul>
            <li>3 Baião de dois</li>
            <li>2 Bolinho macaxeira</li>
            <li>1 Tapioca de carne</li>
          </ul>
          <p className='forma-pagamento'>Forma de pagamento: cartão de crédito</p>
          <p className='forma-pagamento'>Total: R$ 50,00</p>
        </div>
        <div className="wrapper-status">
          <p>Confirmado</p>
          <div className="status-blue"></div>
        </div>
      </div>
    <div className="pedido-item">
        <div className="wrapper-text">
          <h5>Pedido #exemplo</h5>
          <ul>
            <li>1 Café passado</li>
            <li>2 Bolinho mandioca</li>
            <li>1 Tapioca de carne</li>
          </ul>
          <p className='forma-pagamento'>Forma de pagamento: pix</p>
          <p className='forma-pagamento'>Total: R$ 50,00</p>
        </div>
        <div className="wrapper-status">
          <p>Em preparo</p>
          <div className="status-yellow"></div>
        </div>
      </div>

      <div className="pedido-item">
        <div className="wrapper-text">
          <h5>Pedido #exemplo</h5>
          <ul>
            <li>3 Baião de dois</li>
            <li>1 Tapioca doce</li>
            <li>1 Tapioca de carne</li>
          </ul>
          <p className='forma-pagamento'>Forma de pagamento: cartão de crédito</p>
          <p className='forma-pagamento'>Total: R$ 40,00</p>
        </div>
        <div className="wrapper-status">
          <p>Pronto</p>
          <div className="status-green"></div>
        </div>
      </div>
      



        </div>
      </div>
    </>
  )
}

export default Pedidos
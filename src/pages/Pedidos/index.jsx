import React from 'react'
import "./style.scss"

const Pedidos = () => {
  return (
    <>
      <h2 className='title-pedido'>Meus pedidos</h2>
      <div className="pedidos-wrapper">
        <div className="pedidos-container">
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

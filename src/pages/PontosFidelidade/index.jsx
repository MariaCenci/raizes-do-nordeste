import React from 'react'
import "./style.scss"

const PontosFidelidade = () => {
  return (
    <>
      <h3 className='title-fidelidade'>Pontos fidelidade</h3>
      <div className="fidelidade-wrapper">
        <h4 className="pontos">Seus pontos: 350 </h4>
       <p>Faltam 50 pontos para ganhar 1 açaí grátis!</p>

        <div className="progress-wrapper">
          <div className="progress-bar-wrapper">   
            <h5>1 Açaí (400 pontos)</h5>
          <div className='progress-bar'>
            <div id='progress-fill-1'></div>
          </div>
          </div>

<div className="progress-bar-wrapper">
<h5>2 pamonhas (420 pontos)</h5>
          <div className='progress-bar'>
            <div id='progress-fill-2'></div>
          </div>
          </div>

<div className="progress-bar-wrapper">
  <h5>4 Acarajés (650 pontos)</h5>
          <div className='progress-bar'>
            <div id='progress-fill-3'></div>
          </div>
          </div>

<div className="progress-bar-wrapper">
  <h5>1 Baião de dois (700 pontos)</h5>
          <div className='progress-bar'>
            <div id='progress-fill-4'></div>
          </div>
          </div>

        </div>
        <button className='btn-fidelidade'>Adicionar recompensa ao carrinho!</button>
      </div>
    
    </>
  )
}

export default PontosFidelidade

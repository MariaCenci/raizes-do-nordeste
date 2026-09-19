import React from 'react'
import { useParams } from "react-router-dom";

const Cardapio = () => {
  const { unidade } = useParams();
  return (
    <>
       <h1>Cardápio {unidade}</h1> 
    </>
  )
}

export default Cardapio

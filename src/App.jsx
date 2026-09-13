import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import PontosFidelidade from './pages/PontosFidelidade'
import Cardapio from './pages/Cardapio'
import Pedidos from './pages/Pedidos'
import Carrinho from './pages/Carrinho'
import Footer from './components/Footer'
import Header from './components/Header'


const App = () => {

  return (
    <>
    <BrowserRouter>
      <Header/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pontosFidelidade" element={<PontosFidelidade />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes> 
      </BrowserRouter>

      <Footer />

    </>
  )
}

export default App

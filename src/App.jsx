import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from './pages/Home'
import PontosFidelidade from './pages/PontosFidelidade'
import Cardapio from './pages/Cardapio'
import Pedidos from './pages/Pedidos'
import Carrinho from './pages/Carrinho'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Privacidade from './components/Privacidade'
import Pagamento from './pages/Pagamento'

const App = () => {

  const logado = localStorage.getItem("logado");

  const [mostrarPrivacidade, setMostrarPrivacidade] = useState(false);

  const privacidadeAceita = sessionStorage.getItem("privacidadeAceita");
  
useEffect(() => {
  if (logado) {
    setMostrarPrivacidade(true);
  }
}, [logado]);

  return (
    <>
      <BrowserRouter>

        {logado && <Header />}

        <Routes>

          <Route
            path="/"
            element={logado ? <Navigate to="/inicio" /> : <Login />}
          />

          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="/inicio" element={<Home />} />

          <Route
            path="/pontosFidelidade"
            element={<PontosFidelidade />}
          />

          <Route
            path="/cardapio/:unidade"
            element={<Cardapio />}
          />

          <Route path="/pedidos" element={<Pedidos />} />

          <Route path="/carrinho" element={<Carrinho />} />

          <Route path="/pagamento" element={<Pagamento />}/>

        </Routes>

      {mostrarPrivacidade && (
        <Privacidade
          onClose={() => setMostrarPrivacidade(false)}
        />
      )}
      </BrowserRouter>

      {logado && <Footer />}


    </>
  )
}

export default App












/*import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import PontosFidelidade from './pages/PontosFidelidade'
import Cardapio from './pages/Cardapio'
import Pedidos from './pages/Pedidos'
import Carrinho from './pages/Carrinho'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Privacidade from './components/Privacidade'

const App = () => {
  const logado = localStorage.getItem("logado");
  const [mostrarPrivacidade, setMostrarPrivacidade] = useState(false);

  return (
    <>
      <BrowserRouter>

        {logado && <Header />}

        <Routes>
          <Route
            path="/"
            element={logado ? <Navigate to="/inicio" /> : <Login />}
          />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/pontosFidelidade" element={<PontosFidelidade />} />
          <Route path="/cardapio/:unidade" element={<Cardapio />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </BrowserRouter>

      {logado && <Footer />}

 {mostrarPrivacidade && (
        <Privacidade
          onClose={() => setMostrarPrivacidade(false)}
        />
      )}

    </>
  )
}

export default App
*/
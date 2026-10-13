
import { useState } from "react";
import "./style.scss";

const Cozinha = () => {
   //estado pedidos -> armazenamento localstorage
   const [pedidos, setPedidos] = useState(() => {
      return JSON.parse(localStorage.getItem("pedidos") || "[]");
   });

   // atualiza status pedido
   const atualizarStatus = (id, novoStatus) => {
      const pedidosAtualizados = pedidos.map((pedido) =>
         pedido.id === id
            ? { ...pedido, status: novoStatus }
            : pedido
      );

      localStorage.setItem(
         "pedidos",
         JSON.stringify(pedidosAtualizados)
      );

      setPedidos(pedidosAtualizados);
   };

   return (
      <div className="cozinha-wrapper">
         <h2>Painel da cozinha</h2>
         <h4 className="cozinha-descricao">
            Acompanhe e atualize os pedidos recebidos
         </h4>

         <div className="cozinha-container">
            {pedidos.map((pedido) => (
               <div className="cozinha-pedido" key={pedido.id}>
                  <div className="cozinha-pedido-info">
                     <h3>Pedido #{pedido.id}</h3>

                     <ul>
                        {pedido.produtos.map((produto, index) => (
                           <li key={produto.id ?? produto.title ?? index}>
                              {produto.quantidade} × {produto.title}
                           </li>
                        ))}
                     </ul>

                     <p>
                        Status: <strong>{pedido.status}</strong>
                     </p>
                  </div>

                  <div className="cozinha-botoes">
                     <button id="btn-preparo"
                        onClick={() =>
                           atualizarStatus(pedido.id, "Em preparo")
                        }
                        disabled={pedido.status === "Em preparo" ||
                           pedido.status === "Pronto"}
                     >
                        Iniciar preparo
                     </button>

                     <button
                        id="btn-pronto"
                        onClick={() =>
                           atualizarStatus(pedido.id, "Pronto")
                        }
                        disabled={pedido.status === "Pronto"}
                     >
                        Marcar como pronto
                     </button>
                  </div>
               </div>
            ))}

            {pedidos.length === 0 && (
               <p className="mensagem-alt">Nenhum pedido recebido até o momento.</p>
            )}
         </div>
      </div>
   );
};

export default Cozinha;

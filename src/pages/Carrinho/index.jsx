
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const Carrinho = () => {
  const [produtos, setProdutos] = useState(() => {
    return JSON.parse(localStorage.getItem("carrinho") || "[]");
  });

  const navigate = useNavigate();

  const atualizarCarrinho = (novoCarrinho) => {
    setProdutos(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  };

  const alterarQuantidade = (titulo, quantidade) => {
    const novoCarrinho = produtos
      .map((produto) =>
        produto.title === titulo
          ? { ...produto, quantidade }
          : produto
      )
      .filter((produto) => produto.quantidade > 0);

    atualizarCarrinho(novoCarrinho);
  };

  const removerProduto = (titulo) => {
    const novoCarrinho = produtos.filter(
      (produto) => produto.title !== titulo
    );

    atualizarCarrinho(novoCarrinho);
  };

  const calcularPreco = (preco) => {
    return Number(
      preco.replace("R$", "").trim()
        .replace(".", "").replace(",", ".")
    );
  };

  const total = produtos.reduce(
    (soma, produto) =>
      soma + calcularPreco(produto.preco) * produto.quantidade,
    0
  );

  return (
    <div className="carrinho">
      <h2>Seu carrinho</h2>

      {produtos.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {produtos.map((produto) => (
            <div className="produto-carrinho" key={produto.title}>
              <img src={produto.src} alt={produto.title} />

              <div className="produto-info">
                <h4>{produto.title}</h4>
                <p>{produto.preco}</p>

                <div className="quantidade">
                  <button
                    onClick={() =>
                      alterarQuantidade(
                        produto.title,
                        produto.quantidade - 1
                      )
                    }
                  >
                    -
                  </button>

                  <span>{produto.quantidade}</span>

                  <button 
                    onClick={() =>
                      alterarQuantidade(
                        produto.title,
                        produto.quantidade + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <button
                id="btn-remover"
                  onClick={() => removerProduto(produto.title)}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}

<div className="pedido-final-wrapper">
        <h4 id="preco-final">
            Total:{" "}
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}
          </h4>

          <button className="btn-pedido" onClick={() => navigate("/pagamento")}>
          Realizar pedido
          </button>

</div>
  
        </>
      )}
    </div>
  );
};

export default Carrinho;

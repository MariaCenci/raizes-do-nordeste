
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
    <section className="carrinho">
      <h1>Meu carrinho</h1>

      {produtos.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {produtos.map((produto) => (
            <div className="produto-carrinho" key={produto.title}>
              <img src={produto.src} alt={produto.title} />

              <div className="produto-info">
                <h2>{produto.title}</h2>
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
                  onClick={() => removerProduto(produto.title)}
                >
                  Remover produto
                </button>
              </div>
            </div>
          ))}

          <h2>
            Total:{" "}
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}
          </h2>

          <button onClick={() => navigate("/pagamento")}>
            Finalizar compra
          </button>
        </>
      )}
    </section>
  );
};

export default Carrinho;

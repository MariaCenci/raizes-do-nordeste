
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const Pagamento = () => {
  const navigate = useNavigate();

  const [formaPagamento, setFormaPagamento] = useState("pix");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");

  const produtos = JSON.parse(
    localStorage.getItem("carrinho") || "[]"
  );

  const calcularPreco = (preco) =>
    Number(
      preco.replace("R$", "").trim()
        .replace(".", "").replace(",", ".")
    );

  const total = produtos.reduce(
    (soma, produto) =>
      soma + calcularPreco(produto.preco) * produto.quantidade,
    0
  );

  const formatarMoeda = (valor) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    //validar preenchimento campos dados e cartao
  const [erroDados, setErroDados] = useState("");
const [erroCartao, setErroCartao] = useState("");

  
const finalizarPagamento = (e) => {
  e.preventDefault();

  if (produtos.length === 0) {
    alert("Seu carrinho está vazio.");
    navigate("/carrinho");
    return;
  }

  if (!nome.trim() || !cpf.trim()) {
    setErroDados("Preencha seu nome e CPF.");
    return;
  }
//limpa mensagens erro
  setErroDados("");

  if (
    formaPagamento !== "pix" &&
    (!numeroCartao.trim() || !validade.trim() || !cvv.trim())
  ) {
    setErroCartao("Preencha os dados do cartão.");
    return;
  }

  setErroCartao("");

  localStorage.setItem(
    "pagamento",
    JSON.stringify({
      nome,
      formaPagamento,
      total,
      status: "em processamento"
    })
  );

  navigate("/processamento");
};


  return (
    <div className="pagina-pagamento">
      <h1>Finalizar compra</h1>

      <div className="resumo-pagamento">
        <h3>Resumo do pedido</h3>

        {produtos.map((produto) => (
          <div className="item-resumo-wrapper" key={produto.title}>
            <span>
              {produto.title} x {produto.quantidade}
            </span>

            <span className="span-preco"> 
              {formatarMoeda(
                calcularPreco(produto.preco) * produto.quantidade
              )}
            </span>
          </div>
        ))}

        <h2 id="total-pagamento">Total: {formatarMoeda(total)}</h2>
      </div>

<div className="form-dados">
      <form onSubmit={finalizarPagamento}>
        <h3>Seus dados</h3>

        <label htmlFor="nome">Nome completo</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          //required
        />
        {erroDados && <p className="mensagem-erro">{erroDados}</p>}

        <label htmlFor="cpf">Cpf</label>
        <input
          id="cpf"
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="000.000.000-00"
          //required
        />
        {erroDados && <p className="mensagem-erro">{erroDados}</p>}

<div className="form-dados-pagamento">
        <h3>Forma de pagamento</h3>

        <label>
          <input
            type="radio"
            name="pagamento"
            value="pix"
            checked={formaPagamento === "pix"}
            onChange={(e) => {
  setFormaPagamento(e.target.value);
  setErroCartao("");
}}
          />
          Pix
        </label>

        <label>
          <input
            type="radio"
            name="pagamento"
            value="cartao"
            checked={formaPagamento === "cartao"}
        onChange={(e) => {
  setFormaPagamento(e.target.value);
  setErroCartao("");
}}
          />
          Cartão de crédito
        </label>

        <label>
          <input
            type="radio"
            name="pagamento"
            value="debito"
            checked={formaPagamento === "debito"}
            onChange={(e) => {
  setFormaPagamento(e.target.value);
  setErroCartao("");
}}
          />
          Cartão de débito
        </label>

        {formaPagamento !== "pix" && (
          <div className="dados-cartao">
            <label htmlFor="numeroCartao">
              Número do cartão
            </label>
            <input
              id="numeroCartao"
              type="text"
              value={numeroCartao}
              onChange={(e) => setNumeroCartao(e.target.value)}
              placeholder="0000 0000 0000 0000"
              
            />
{erroCartao && <p className="mensagem-erro">{erroCartao}</p>}
            <label htmlFor="validade">Validade</label>
            <input
              id="validade"
              type="text"
              value={validade}
              onChange={(e) => setValidade(e.target.value)}
              placeholder="MM/AA"
            />
{erroCartao && <p className="mensagem-erro">{erroCartao}</p>}
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="000"
            />{erroCartao && <p className="mensagem-erro">{erroCartao}</p>}
          </div>
        )}

        <button id="btn-pagamento" type="submit">
          Pagar {formatarMoeda(total)}
        </button>
        </div>
      </form>  
    </div>
    </div>
  
  );
};

export default Pagamento;

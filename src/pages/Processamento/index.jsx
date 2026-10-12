
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const Processamento = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("processando");

  useEffect(() => {
    let redirecionar;

    const processamento = setTimeout(() => {
      const pagamento = JSON.parse(
        localStorage.getItem("pagamento") || "{}"
      );

      const produtos = JSON.parse(
        localStorage.getItem("carrinho") || "[]"
      );

      const pedido = {
        id: Date.now(),
        nome: pagamento.nome,
        formaPagamento: pagamento.formaPagamento,
        total: pagamento.total,
        produtos,
        status: "Pedido confirmado"
      };

      const pedidos = JSON.parse(
        localStorage.getItem("pedidos") || "[]"
      );

      pedidos.push(pedido);

      localStorage.setItem("pedidos", JSON.stringify(pedidos));

      localStorage.setItem(
        "pagamento",
        JSON.stringify({
          ...pagamento,
          status: "aprovado"
        })
      );

      localStorage.setItem("carrinho", "[]");

      setStatus("sucesso");

      redirecionar = setTimeout(() => {
        navigate("/pedidos");
      }, 2000);
    }, 2500);

    return () => {
      clearTimeout(processamento);
      clearTimeout(redirecionar);
    };
  }, [navigate]);

  return (
    <div className="pagina-processando">
      {status === "processando" ? (
        <>
          <div className="rodinha"></div>
          <h2>Processando seu pagamento...</h2>
          <p>Aguarde um momento, estamos finalizando seu pedido.</p>
        </>
      ) : (
        <>
          <div className="icone-sucesso">✓</div>
          <h2>Pagamento aprovado.</h2>
          <p>Seu pedido foi confirmado com sucesso!</p>
          <p>Redirecionando para seus pedidos...</p>
        </>
      )}
    </div>
  );
};

export default Processamento;

export const adicionarAoCarrinho = (produto) => {
  const carrinho = JSON.parse(
    localStorage.getItem("carrinho") || "[]"
  );

  const produtoExistente = carrinho.find(
    (item) => item.title === produto.title
  );

  if (produtoExistente) {
    produtoExistente.quantidade += 1;
  } else {
    carrinho.push({
      ...produto,
      quantidade: 1
    });
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
};
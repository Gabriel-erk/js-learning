const produtos = [
  { nome: "Notebook", preco: 2500, quantidadeVendida: 75 },
  { nome: "Mouse", preco: 100, quantidadeVendida: 180 },
  { nome: "Teclado", preco: 150, quantidadeVendida: 125 },
  { nome: "Monitor", preco: 900, quantidadeVendida: 95 },
];

console.log("Relatório de produtos vendidos:");

produtos.forEach((produto) =>
  console.log(
    `Produto: ${produto.nome} | Valor: ${produto.preco} | Quantidade vendida: ${produto.quantidadeVendida}`,
  ),
);
console.log("");

console.log("Produtos com alto volume de vendas (> 100 unidades):");
const produtosComMaisDeCemUnidadesVendidas = produtos.filter(
  (produto) => produto.quantidadeVendida > 100,
);

produtosComMaisDeCemUnidadesVendidas.forEach((produto) =>
  console.log(produto.nome),
);
console.log("");

console.log("Total de vendas por produto: ");
let totalVendaProduto = 0;
let nomeMaiorProduto = "";
let precoMaiorProduto = 0;

produtos.forEach((produto) => {
    if (produto.preco * produto.quantidadeVendida > precoMaiorProduto) {
        nomeMaiorProduto = produto.nome;
        precoMaiorProduto = produto.preco * produto.quantidadeVendida;
    }
    console.log(`${produto.nome}: R\$ ${produto.preco * produto.quantidadeVendida}`);
});
console.log("");

console.log(`Produto mais lucrativo: ${nomeMaiorProduto} com R\$ ${precoMaiorProduto} em vendas.`);
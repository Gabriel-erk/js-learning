const precos = [100, 80, 50, 120];
const precosComDesconto = precos.map((preco) => preco - (preco * 0.10));

console.log(`Valores com desconto: ${precosComDesconto}`);

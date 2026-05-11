const pedidos = ['camiseta', 'short', 'tênnis'];
const pedidosDois = pedidos.map(pedido => pedido);

pedidosDois.push('boné');

console.log(`Array original: ${pedidos}`);
console.log(`Array copiado: ${pedidosDois}`);

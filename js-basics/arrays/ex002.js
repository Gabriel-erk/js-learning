const despesas = [120, 80, 45.5, 200, 60];
let somaDespesas = 0;

for (let i = 0; i < despesas.length; i++) {
    somaDespesas += despesas[i]
}

console.log(`Total das despesas: R\$ ${somaDespesas}`);


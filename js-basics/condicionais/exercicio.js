// if e else
const num1 = 2;
const num2 = 4;
const operacao = "mult";

if (operacao === "soma") {
  console.log(num1 + num2);
} else if (operacao == "mult") {
  console.log(num1 * num2);
} else {
  console.log("operacao nao identificada");
}

// parte 2
const salario = 2000;

if (salario >= 11000) {
  console.log('3% de bonus');
} else if (salario < 11000 && salario >= 7000) {
    console.log('5% de bonus');
} else if (salario < 7000 && salario >= 4000) {
    console.log('7% de bonus');
} else {
    console.log('9% de bonus');
}

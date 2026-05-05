// sintaxe01
let soma = (num1, num2) => console.log(num1 + num2);
// sintaxe02
let sub = (num1, num2) => {
  console.log(num1 - num2);
};
// sintaxe03, para uma linha de retorno, como é só uma linha, o js entende que o conteúdo DEVE ser RETORNADO, e também, quando é apenas UM parametro, nao precisa colocar (), caso tenha mais de uma linha, deve colocar as {}, nesse caso só tem uma linha, entao nao precisa
let boasVindas = nome => console.log(`olá, ${nome}`);


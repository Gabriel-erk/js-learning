// callback == segunda funćão que é chamada dentro de outra funćão

const arrayNumero = [1, 2, 3, 4, 5];

// forEach
// aqui executamos um forEach dentro do nosso "arrayNumero", onde usamos uma funćão callback quando fazemos nossa arrow function em: "(numero) => {console.log(numero)};", o "Parâmetro" número aqui têm um papel diferente, pois o seu papel aqui é de ser índice do array (do comećo ao fim, logo, na primeira iteraćão do forEach, seu valor sera o valor do índice 0 do nosso array que chamou o método/funćão .forEach, no nosso caso: indice 0 de: arrayNumero == valor 1), método forEach não retorna nada
arrayNumero.forEach((numero) => {
  console.log(numero);
});

// nessas circustâncias abaixo, o segundo parâmetro da nossa funćão callback é o correspondente ao índice que estamos percorrendo naquele momento
arrayNumero.forEach((numero, indice) => {
  console.log(numero, indice);
});

// map
// mapeia nosso array percorrendo elemento dele (onde o (numero) == parâmetro da nossa arrow function exerce o papel de ser o 'indice'  do nosso array: arrayDoble, logo, na primeira iteraćão seu valor será o valor do indíce 0 do nosso array que chamou o método map == arrayNumero, fará o que está no corpo da arrow function (o que vem depois do: =>), ou seja, multiplicará o valor por 2 e retornará para o último índice vazio do nosso: arrayDoble)
const arrayDoble = arrayNumero.map((numero) => numero * 2);
console.log(arrayDoble);

// filter
// retorna todos os elementos do array que satisfaçam a condição dada, ou seja, o que estiver no corpo da nossa arrow function (o que vem depois do: =>), ou seja, o número tem que ser par (número % 2 === 0) para ser retornado para o nosso novo array: arrayPares
const arrayPares = arrayNumero.filter((numero) => numero % 2 === 0);
console.log(arrayPares);
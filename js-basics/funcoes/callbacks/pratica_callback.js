function somar(a, b) {
  return a + b;
}
function multiplicacao(a, b) {
  return a * b;
}

// primeiro parâmetro é uma funćão, depois os 2 valores que cada uma das 2 funćões que posso chamar vai precisar receber, depois retorno o retorno da funćão que recebi de parâmetro, logo, tornando essa minha funćão calcula uma callback (uma funćão que chama outra / recebe outra dentro de si)
function calcula(funcaoOperacao, valorA, valorB) {
  return funcaoOperacao(valorA, valorB);
}

// quando passo uma funćão para um callback e essa funćão precisa de parâmetros, como a somar e multiplicacao abaixo, não passamos os parâmetros para ela e sim para a funćão externa (aqui == calcula), QUANDO a funćão externa o permite, como na declaraćão da nossa funćão calcula(funćão que queremos, valorUm, valorDois){depois atribuimos o valorUm e valorDois recebidos por parâmetro a funćão que recebemos por parâmetro: soma ou multiplicacao que pedem esses 2 parâmetros}
// quando passamos: somar e multiplicacao como parâmetro abaixo, estamos passando apenas suas referências pois não estamos fazendo: somar(), multiplicacao() e sim : somar, multiplicacao
console.log(calcula(somar, 5, 5));
console.log(calcula(multiplicacao, 5, 5));

const userId = "123456";

// essa será nossa "callback" == funćão que será chamada dentro de outra
const avisaUsuario = (userId) =>
  console.log(`sessão de ${userId} está inativa. (callback desacoplada)`);

// parâmetro que é passado para a funćão do primeiro parâmetro (avisaUsuario) é o terceiro parâmetro aqui KKKKK, mto baiano slc
setTimeout(avisaUsuario, 2000, userId);
// terceiro parâmetro (userId) é o valor que existe no escopo global do meu código que será passado para a funćão (callback) do primeiro parâmetro do meu setTimeout
setTimeout(
  (userId) =>
    console.log(`sessão de ${userId} está inativa. {callback acoplado}`),
  2000, userId
);

// estou referenciando a tag assim diretamente pois temos apenas uma tag html em nosso sistema, então, sem problemas de ele pegar a primeira ocorrência que encontrar, pois realmente só tem uma
const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

focoBt.addEventListener('click', () => {
    // quando acontecer o evento do tipo click neste botão, quero MUDAR o atributo (por isso set, que diz que eu vou PASSAR um outro valor) e ele pede 2 parâmetros
    // obs rápida: possuo um atributo na minha tag html chamado de data-contexto, posso vê-lo aqui: <html lang="pt-br" data-contexto="foco">, isso é o que chamamos de atributos, ou data attributes
    // sendo o primeiro: QUAL atributo eu quero mudar? nesse caso aqui, quero mudar o valor do atributo 'data-contexto'
    // e o segundo: QUAL o valor novo deste atributo (data-contexto)?
    html.setAttribute('data-contexto', 'foco');
});

curtoBt = document.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
});

longoBt = document.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
});
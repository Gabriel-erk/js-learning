// estou referenciando a tag assim diretamente pois temos apenas uma tag html em nosso sistema, então, sem problemas de ele pegar a primeira ocorrência que encontrar, pois realmente só tem uma
const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

const displayTempo = document.querySelector('#timer');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

const botaoIniciar = document.querySelector('.app__card-primary-button');

const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900;

focoBt.addEventListener('click', () => {
    // quando acontecer o evento do tipo click neste botão, quero MUDAR o atributo (por isso set, que diz que eu vou PASSAR um outro valor) e ele pede 2 parâmetros
    // obs rápida: possuo um atributo na minha tag html chamado de data-contexto, posso vê-lo aqui: <html lang="pt-br" data-contexto="foco">, isso é o que chamamos de atributos, ou data attributes
    // sendo o primeiro: QUAL atributo eu quero mudar? nesse caso aqui, quero mudar o valor do atributo 'data-contexto'
    // e o segundo: QUAL o valor novo deste atributo (data-contexto)?
    html.setAttribute('data-contexto', 'foco');
    // aqui dentro da minha váriavel banner (que possui a classe da minha tag html img) vou alterar o ATRIBUTO src == caminho da imagem (pois quero mudar o caminho da imagem da tag html img que possui a classe que minha váriavel abaixo (banner) está maniuplando)
    // de segundo valor do meu método setAttribute vem o VALOR do atributo selecionado no primeiro parâmetro (que agora eu passo o novo caminho do atributo passado no primeiro parâmetro, toda vez que eu clicar neste botão de FOCO (que é o event listener envolta do que estou escrevendo, vai trocar a imagem para o caminho que estou passando abaixo))
    banner.setAttribute('src', '/imagens/foco.png');
});

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
    banner.setAttribute('src', 'imagens/descanso-curto.png')
});

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
    banner.setAttribute('src', '/imagens/descanso-longo.png')
});
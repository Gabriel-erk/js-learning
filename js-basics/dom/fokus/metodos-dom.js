/* 
* DOM == Documents Object Model
* uma árvore de nós == junćão de vários elementos (arquivo HTML, CSS, JS, qualquer API inserida no projeto) que são todos colocados em uma árvore, onde ele realiza uma representaćão disso tudo, que nada mais é aquilo que conseguimos ver na tela (página html por exemplo pode ser um resultado da junćão do HTML, CSS, JS e manipulaćão de dados da API)
* o que vemos no navegador de fato, é uma representaćão do DOM 
* document (que manipulamos em comandos como: document.getElementById(), document.querySelector(), document.querySelectorAll()....etc) é um objeto GLOBAL que representa o próprio HTML (um nível a menos do DOM por assim dizer)
*/


document.querySelector('button'); // passando uma tag html (button) para meu querySelector, que vai ler a página inteira do HTML e quando ele achar o PRIMEIRO 'button' ele vai me retornar, está em aspas pois estou pegando um elemento do html == elemento do tipo string

document.querySelectorAll('button'); // pegando TODOS os elementos do meu html que possuem a tag htlm 'button' pois agora especifiquei que quero todos os elementos html com essa tag com o 'All' no meu querySelector

document.querySelector('.app__card-button--curto'); // ao utilizar querySelector, se for uma classe (igual fizemos agora) utilizamos o '.' para especificar que o valor do nosso parâmetro (app__card-button--curto) é uma classe, pois se não ele vai buscar como se fosse uma tag html normal e nos retornará null (pois app__card-button--curto não é uma tag html), mesma coisa para ID, apenas especificamos que queremos pegar um id com aquele valor informando a # antes obs: se for um data atributes usamos colchetes []

document.getElementsByClassName('app__card-button--curto'); // serve especificamente para pegar ELEMENTOS (no plural pois se está usando uma classe, são VÁRIOS elementos com a mesma classe) com uma classe específica (como o próprio nome diz) e como JÁ SABEMOS que é uma classe que estamos procurando, apenas passamos o nome dela de parâmetro, sem o '.' como no último (então se eu tiver vários buttons com a mesma classe, ele pega todos)

document.getElementById('start-pause'); // mesma coisa acima só que para ID (pega só um elemento pois ID é um identificador único, logo, cada ID representa apenas UM elemento)
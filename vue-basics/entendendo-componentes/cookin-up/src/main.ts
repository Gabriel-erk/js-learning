// importando os estilos globais da aplicaćão aqui, que estão no nosso arquivo .css, como estamos trazendo aqui no ts a estilizaćão da aplicaćão, onde chamarmos esse arquivo ts, ele trará também as estilizaćões presentes no arquivo main.css dentro da pasta assets (tanto que, se repararmos, no momento atual, nosso index.html esta estilizado quando rodamos npm run dev no terminal, e em nenhum lugar daquele código está presente a chamada de um arquivo de estilizaćão, pois esta chamada é feita aqui no ts)
import './assets/main.css'
// importando funćão (import) "createApp" do (from) pacote "vue", funćão importante, usada para montar o projeto pela 1 vez
// como é uma function, está entre {}
import { createApp } from 'vue'
// importando (import) App do caminho (from) './App.vue'
// App == componente
import App from './App.vue'
// chamando a function que importamos (createApp), passando como parâmetro noso outro import (App)
// a partir de createApp chamamos outro método (mount) dando como nome: #app (que por debaixo dos panos, devido a # é considerado um seletor css (== id em termos de css, ao invés de ser uma classe, é um id) e iremos manipular em nosso index.html)
// isso abaixo é basicamente a criaćão de um componente com a id == #app
createApp(App).mount('#app')

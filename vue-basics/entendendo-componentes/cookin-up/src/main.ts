// importando os estilos globais da aplicaćão aqui, que estão no nosso arquivo .css, como estamos trazendo aqui no ts a estilizaćão da aplicaćão, onde chamarmos esse arquivo ts, ele trará também as estilizaćões presentes no arquivo main.css dentro da pasta assets (tanto que, se repararmos, no momento atual, nosso index.html esta estilizado quando rodamos npm run dev no terminal, e em nenhum lugar daquele código está presente a chamada de um arquivo de estilizaćão, pois esta chamada é feita aqui no ts)
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

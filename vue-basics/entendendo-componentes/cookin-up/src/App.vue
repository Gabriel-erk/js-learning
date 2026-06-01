<!-- até o momento atual, esse é o componente "raiz" da nossa aplicaćão -->
<!-- componente == qualquer arquivo que termine com a extensão .vue (ex: Exercicio.vue), podendo conter: lógica (através do JS/TS), HTML ou estilos (css/scss) -->
<template>
  <header class="banner">
    <div class="apresentacao">
      <img src="./assets/images/logo.svg" alt="Logo do Cookin' Up" class="logo">
      <!-- dentro da "configs padrão" que o curso me entregou, esta classe já foi configurada previamente -->
      <p class="cabecalho-lg frase-cabecalho">
        <span class="texto-verde">
          Um banquete de ideias para
        </span>
        despertar o chef que há em você!
      </p>

      <p class="subtitulo-lg">
        Explore novas receitas todos os dias com os ingredientes que estão ao seu alcance!
      </p>
    </div>

    <img src="./assets/images/foto-banner.png" alt="Foto de uma mulher cozinhando com uma bacia de vidro nas mãos. Ela está sorrindo e está apoiando um celular entre seu rosto e ombro." class="foto-banner">
  </header>
</template>

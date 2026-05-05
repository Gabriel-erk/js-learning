let valor = 10.000;
let juros = 0.05;
let tempo = 5;

let calculaJurosCompostos = (valor, juros, tempo) => {
    // realiza o calculo do juros, entao recebemos 5, divide por 100 == 0.05% + 1 que resulta na formula padrao para calculo de juros compostos 
    let taxaJuros = (juros/100) + 1;
    // elevando juros ao tempo gracas ao metodo pow   
    return valor * Math.pow(taxaJuros, tempo);
};



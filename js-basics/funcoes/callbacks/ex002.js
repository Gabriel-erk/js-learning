function calcularConsumo(potencia, horasPorDia) {
  return (potencia * horasPorDia) / 1000;
}

function classificarConsumo(consumo) {
  if (consumo > 0 && consumo < 50) {
    return "Baixo consumo";
  } else if (consumo >= 50 && consumo <= 199) {
    return "Consumo moderado";
  } else if (consumo >= 200) {
    return "Alto consumo";
  }
}

function exibirResumo(nomeAparelho, consumo, classificacao) {
  console.log(
    `${nomeAparelho} tem consumo de ${consumo} e é classificada como ${classificacao}.`,
  );
}

const nomeAparelho = "PC daora";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);

exibirResumo(nomeAparelho, consumo, classificacao);

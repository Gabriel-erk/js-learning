const participantes = [
  { nome: "Ana", idade: 17 }, // isso é um objeto em js
  { nome: "Bruno", idade: 22 },
  { nome: "Carla", idade: 19 },
  { nome: "Daniel", idade: 15 },
  { nome: "Eduarda", idade: 25 },
];

const participantesMaioresDeIdade = participantes.filter((participante) => participante.idade > 18);
participantesMaioresDeIdade.forEach((participante) => console.log(`Acesso liberado para: ${participante.nome}`)
);

const nomesParticipantesAprovados = participantesMaioresDeIdade.map((participante) => participante.nome);
console.log(`Lista de aprovados: ${nomesParticipantesAprovados}`);


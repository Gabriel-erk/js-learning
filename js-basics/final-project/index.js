function calcularMedia(notas) {
  let somaNotas = 0;
  notas.forEach((nota) => {
    somaNotas += nota;
  });

  return Number((somaNotas / notas.length).toFixed(1));
}

function exibirAluno(aluno) {
  let media = calcularMedia(aluno.notas);
  let resultado =
    media >= 7
      ? "Aproved"
      : media >= 5 && media <= 6.9
        ? "Recuperation"
        : "Reproved"; // if ternário com SE, SE NÃO SE e SENÃO
  console.log(`RA: ${aluno.ra}`);
  console.log(`Aluno: ${aluno.nome}`);
  console.log(`Idade: ${aluno.idade}`);
  console.log(`Média: ${media}`);
  console.log(`Situação: ${resultado}`);
}

function relatorioAlunos(alunos) {
  let resultado = "";
  alunos.forEach((aluno) => {
    exibirAluno(aluno);
    console.log("-------------------");
  });
}

function buscarAluno(ra, alunos) {
  let found = false;
  let alunoProcurado = {};

  alunos.forEach((aluno) => {
    if (aluno.ra == ra) {
      found = true;
      alunoProcurado = aluno;
    }
  });

  if (found) {
    return alunoProcurado;
  }
  return found;
}

function adicionarNota(aluno, nota) {
  if (aluno.notas.length < 5) {
    aluno.notas.push(nota);
    return true;
  }
  return false;
}

function listarMelhoresAluno(alunos) {
  console.log("\n ===== MELHORES ALUNOS =====");

  alunos.forEach((aluno) => {
    let media = calcularMedia(aluno.notas);

    if (media >= 8) {
      exibirAluno(aluno);
    }
  });
}

let alunos = [];

// cada aluno deve ser um objeto contendo: nome, idade e notas (array de números)

for (let i = 0; i < 10; i++) {
  let ra = 102020 + i;
  let nome = `Aluno ${i + 1}`;
  let idade = 10 + i;
  let notas = [];

  for (let j = 0; j < 5; j++) {
    notas[j] = Number((Math.random() * 10).toFixed(1)); // Math.random() gera valores entre 0 e 1 (desde: 0.0 a 0.12312, então muliplicando seu resultado por 10, um valor entre 0 e 10), o toFixed após a operaćão de math.random * 10 é para garantir que terá apenas uma casa decimal, por fim o Number envolta de tudo é para GARANTIR que o retorno é um número, pois o toFixed retorna uma string
  }

  alunos[i] = {
    ra: ra,
    nome: nome,
    idade: idade,
    notas: notas,
  };
}

relatorioAlunos(alunos);

console.log("\n ===== BUSCANDO ALUNO =====");
alunoProcurado = buscarAluno(102021, alunos);

if (alunoProcurado != false) {
  exibirAluno(alunoProcurado);
} else {
  console.log("Aluno não está na lista.");
}

console.log("\n ===== ADICIONANDO NOTA =====");

console.log(`Notas antes de adicionar: ${alunoProcurado.notas}`);

if (adicionarNota(alunoProcurado, 5.5)) {
  console.log("Nota adicionada com sucesso!");
  console.log(alunoProcurado.notas);
} else {
  console.log("Não foi possível adicionar a nota.");
}

listarMelhoresAluno(alunos);

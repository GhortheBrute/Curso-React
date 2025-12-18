const alunos = [
  {
    nome: "Pablo",
    idade: 25,
  },
  {
    nome: "José",
    idade: 19,
  },
  {
    nome: "Roberto",
    idade: 16,
  },
];

const alunosFiltrados = alunos.filter((aluno) => aluno.idade >= 18);
console.log("Filter");
console.table(alunosFiltrados);

const alunoRoberto = alunos.find((aluno) => aluno.nome === "Roberto");
console.log("Find");
console.log(alunoRoberto);

const alunoRobertoIndex = alunos.findIndex((aluno) => aluno.nome === "Roberto");
console.log("FindIndex");
console.log(alunoRobertoIndex);

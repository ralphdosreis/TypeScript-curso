// @ts-check
const produtos = [
  {
    nome: "O senhor dos Anéis",
    tipo: "livro",
  },
  {
    nome: "A Guerra dos Tronos",
    tipo: "livro",
  },
  {
    nome: "Dark Souls",
    tipo: "jogo",
  },
];

function filtrarLivros(dados) { // Apresenta erro pois está sem o tipo definido(any)
  return dados.filter((item) => item.tipo === "livro");
}

console.log(filtrarLivros(produtos))
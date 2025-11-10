// É possível definir a forma de um objeto
function preencherDados(dados: {
  nome: string;
  preco: number;
  teclado: boolean;
}) {
  document.body.innerHTML += `
  <div>
  <h2>${dados.nome}<\h2>
  <p>R$ ${dados.preco}<\p>
  <p>inclui teclado: ${dados.teclado ? 'sim' : 'não'}<\p>
  <\div>
  `;
}

preencherDados({
  nome: 'Computador',
  preco: 2000,
  teclado: false,
});


preencherDados({
  nome: 'Notebook',
  preco: 5000,
  teclado: true,
})


// A palavra-chave type cria um atalho para um tipo customizado
type NumberOrString = number | string;

let total: NumberOrString = 10;
total = '200';

// type Produto, pode ser reutilizado na criação de objetos
type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados2(dados: Produto) {
  document.body.innerHTML += `
  <div>
  <h2>${dados.nome}<\h2>
  <p>R$ ${dados.preco}<\p>
  <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}<\p>
  <\div>
  `;
}

const computadorMesa: Produto = {
  nome: "Computador de mesa",
  preco: 10000,
  teclado: true,
}

preencherDados2(computadorMesa);

// preencherDados2({
//   nome: "Computador de mesa",
//   preco: 100000,
//   teclado: true,
// })


type Categorias = 'design' | 'codigo' | 'descod';

function pintarCategoria(categoria: Categorias) {
  console.log(categoria)
}

pintarCategoria('codigo');

// interface geralmente da mesma forma que type, porém possui uma sintaxe diferente. As interfaces são geralmente utilizadas para definir objetos

interface InterfaceProduto {
  nome: string;
  preco: number;
  disponivel: boolean;
}

function preencherDados3(dados: InterfaceProduto) {
  document.body.innerHTML += `
  <div>
  <h2>${dados.nome}<\h2>
  <p>R$ ${dados.preco}<\p>
  <p>Inclui teclado: ${dados.disponivel ? 'sim' : 'não'}<\p>
  <\div>
  `;
}

preencherDados3({
  nome: 'Bolacha',
  preco: 2,
  disponivel: true,
})

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  console.log(data)
  showProduct(data);
}


fetchProduct();

interface Empresa {
  fundacao: number;
  nome: string;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Product) {
  document.body.innerHTML = `
  <div>
    <h2>${data.nome}<\h2>
    <p>${data.preco}<\p>
    <div>
      <h3>Fabricante: ${data.empresaFabricante.nome}<\h3>
    <\div>
    <div>
      <h3>Montadora: ${data.empresaMontadora.nome}<\h3>
    <\div>
  <\div>`
}
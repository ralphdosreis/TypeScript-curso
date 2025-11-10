"use strict";
// É possível definir a forma de um objeto
function preencherDados(dados) {
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
});
let total = 10;
total = '200';
function preencherDados2(dados) {
    document.body.innerHTML += `
  <div>
  <h2>${dados.nome}<\h2>
  <p>R$ ${dados.preco}<\p>
  <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}<\p>
  <\div>
  `;
}
const computadorMesa = {
    nome: "Computador de mesa",
    preco: 10000,
    teclado: true,
};
preencherDados2(computadorMesa);
function pintarCategoria(categoria) {
    console.log(categoria);
}
pintarCategoria('codigo');
function preencherDados3(dados) {
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
});
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    console.log(data);
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
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
  <\div>`;
}

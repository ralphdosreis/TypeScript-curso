// null é um tipo primitivo que representa a ausência de valor. Comum em funções do DOM que fazem uma busca, mas retornam null quando não são bem sucedidas

const button = document.querySelector('button');
const config = localStorage.getItem('config');

if (button !== null) {
  button.click();
}
if (button) {
  button.click();
}
if (button) button.click();

button?.click();

console.log(typeof null);

// undefined representa variáveis/propriedades que foram instanciadas, porém os seus valores ainda não foram definidos
let total;
console.log(total); // undefined

const data = {};
// console.log(data.nome);

// Podemos definir propriedades opcionais utilizando opcional?: string
interface Product {
  nome?: String;
}

const livro: Product = {};
const jogo: Product = {
  nome: 'Ragnarok',
};

console.log(livro.nome?.toLowerCase());
console.log(jogo.nome?.toLowerCase());
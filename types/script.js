// Types: Define o que podemos fazer com um dado
// o VS Code já vem com o TypeScript instalado. Enquanto escrevemos JavaScript, serviços do TS rodam na maquina e já oferecem funcionalidades como sujestões de métodos/propriedades do tipo
// Ao adicionar um comentário //@ts-check no início do arquivo JS, o editor passará a indicar erros que seriam pegos pelo TS

//@ts-check
const frase = 'Frond End';
const total = 100.05;
const empresas = ['Google', 'Facebook', 'Amazon'];
const body = document.body;
const button = document.querySelector('button');

frase.toLowerCase();
// total.toLowerCase(); // Erro: total is number

empresas.map((empresa) => empresa.toLowerCase());

body.style.background = '#000';


console.log(button);

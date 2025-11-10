// É comum termos funções que retornam diferentes tipos, por isso usamos | para identificar os vários tipos possiveis

let total: number | string = 200;
total = 'Ralph';

function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  } else {
    return 'não é numero';
  }
}

// Funções que selecionam elementos do DOM geralmente retornam null como uma possibilidade de tipo, pois o Typescript não tem acesso prévio ao DOM para saber se o elemento existe ou não

// Retorna HTMLButtonElement | null
const button = document.querySelector("button");
//O ? executa (No caso como o elemento existe no DOM ele é um HTMLButtonElement) o click se o elemento for diferente de null/undefined
button?.click();


// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string) { // Definindo os tipos de valores que a função poderá receber
  if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    return Number(value); // Number é por padrão definida como any (pode receber qualquer tipo de valor)
  } else {
    throw "value deve ser number | string";
  }
}

console.log(toNumber("300"))
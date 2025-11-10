"use strict";
// É comum termos funções que retornam diferentes tipos, por isso usamos | para identificar os vários tipos possiveis
let total = 200;
total = 'Ralph';
function isNumber(value) {
    if (typeof value === "number") {
        return true;
    }
    else {
        return 'não é numero';
    }
}
// Funções que selecionam elementos do DOM geralmente retornam null como uma possibilidade de tipo, pois o Typescript não tem acesso prévio ao DOM para saber se o elemento existe ou não
// Retorna HTMLBUTTONElement | null
const button = document.querySelector("button");
//Executa o click se o elemento for diferente de null/undefined
button?.click();
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
    else {
        console.log("value deve ser um número ou uma string");
    }
}
toNumber("ralph");

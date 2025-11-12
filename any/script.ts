// any indica que o dado pode conter qualquer tipo de dado no Typescript.
// Deve-se evitar o uso do any, pois o mesmo remove todas as seguranças e conveniências que o TS fornece

function normalizar(texto: any) {
  return texto.trim().toLowerCase();
}

console.log(normalizar(' DesigN'));
// console.log(normalizar(200)); // Erro

// Fora do mode estrito o TS permitirá o uso de parâmetros sem especificar o tipo. Esses parâmetros terão o tipo implicíto de any

interface Curso {
  nome: string;
  horas: number;
}

function mostrarCursos(cursos: Curso[]) {
  cursos.forEach((curso) => {
    document.body.innerHTML += `
    <div>
    <h2>${curso.nome}<\h2>
    <p>Horas: ${curso.horas}<\p>
    <\div>`;
  })
}

const dados: any = 'o any gera problemas';


const cursosDisponiveis: Curso[] = [
  {nome: 'Ralph', horas: 26},
  {nome: 'Luiz', horas: 24},
  {nome: 'Bruna', horas: 18},
];

mostrarCursos(cursosDisponiveis);
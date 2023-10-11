//Arrow function sem corpo.
//const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

//Arrow function com corpo
const resultado = nota => {
    nota >= 7 ? 'Aprovado' : 'Reprovado';
}

console.log(resultado(7.1))
console.log(resultado(4.8))
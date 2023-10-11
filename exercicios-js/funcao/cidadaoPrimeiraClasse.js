/**
 * Função em JS é First-Class Objetc (Citizens)
 * Higher-order function
 */

//Criar de forma literal
function funcao1() {};

//Armazenar em uma constante (função anônima)
const funcao2 = function () {};

//Armazenar em um array
const array = [function (a, b) { return a + b; }, funcao1, funcao2];
console.log(array[0](2, 3));

//Armazenar em um atributo de um objeto
const objeto = {};
objeto.falar = function() { return 'Opa'; }
console.log(objeto.falar());

//Passando função como parâmetro
function Executar(funcao) {
    funcao();
};

Executar(function () { console.log('Executando...') });

//Uma função pode retornar/conter uma outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2, 3)(4);
//ou
const cincoMais = soma(2, 3);
cincoMais(4);
function compras(trabalho1, trabalho2) {
    const resultadoTrabalho1 = trabalho1 ? 'Sim' : 'Não';
    const resultadoTrabalho2 = trabalho2 ? 'Sim' : 'Não';

    console.log('Trabalho 1 deu certo?', resultadoTrabalho1);
    console.log('Trabalho 2 deu certo?', resultadoTrabalho2);

    const comprarSorvete = trabalho1 || trabalho2;
    const compratTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;

     return {comprarSorvete, compratTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
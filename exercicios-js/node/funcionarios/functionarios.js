// const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
// const axios = require('axios');

// axios.get(url).then(response => {
//     const funcionarios = response.data;
//     console.log(funcionarios);

// })

// Leia a API de funcionários e retorne quem é a mulher chinesa com o menor salário
// Chineses - Mulheres - Pegar uma lista e retornar o menor salário

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const china = 'China';
const sexoFeminino = 'F';

axios.get(url)
  .then(response => {
    const funcionarios = response.data;
    console.log(funcionarios);

    const filtrarMulheresChinesas = funcionario => funcionario.pais === china && funcionario.genero === sexoFeminino;

    const mulherChinesaComMenorSalario = funcionarios
      .filter(filtrarMulheresChinesas)
      .reduce((funcionarioAnterior, funcionarioAtual) => (
        funcionarioAtual.salario < funcionarioAnterior.salario 
            ? funcionarioAtual 
            : funcionarioAnterior
      ));

    console.log('Mulher chinesa com o menor salário:', mulherChinesaComMenorSalario);
  })
  .then(() => {
    console.log('Solicitação concluída com sucesso.');
  });

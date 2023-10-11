//Novo recurso do ES2015
//Extrai os atributos desejados do objeto.
 const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
 }

 const { nome, idade } = pessoa;
 console.log(nome, idade)

 //Renomeando as variaveis no momento da extração
 const  { nome: n, idade: i } = pessoa;
 console.log(n, i)

 const { endereco } = pessoa;

 //Extraindo um subtipo completo
 console.log(endereco)

 //Extraindo as propriedades do subtipo
 const { endereco: { logradouro, numero, cep = 89065200}} = pessoa;
 console.log(logradouro, numero, cep)

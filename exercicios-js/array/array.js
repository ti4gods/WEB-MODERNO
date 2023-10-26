console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) //-> Bia

// Adicionando elementos a um array:

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Miriam')
console.log(aprovados[4])

aprovados[8] = 'Jubileu'
console.log(aprovados) //[ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Miriam', <3 empty items>, 'Jubileu' ]

aprovados.sort()

for (let indice = 1; indice <= aprovados.length; indice++) {
    console.log(`Indice = ${indice} - conteúdo: ${aprovados[indice]}`);
}

// Indice = 1 - conteúdo: Bia
// Indice = 2 - conteúdo: Carlos
// Indice = 3 - conteúdo: Jubileu
// Indice = 4 - conteúdo: Miriam
// Indice = 5 - conteúdo: Paulo
// Indice = 6 - conteúdo: undefined
// Indice = 7 - conteúdo: undefined
// Indice = 8 - conteúdo: undefined
// Indice = 9 - conteúdo: undefined

// Excluindo atributos do array
delete aprovados[1]
console.log(aprovados[1]) //-> undefined

// Exclui, adiciona e exclui e adiciona atributos 
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2', 'Elemento3')
console.log(aprovados) //-> [ 'Bia', 'Elemento1', 'Elemento2', 'Elemento3' ]
aprovados.splice(1, 2)
console.log(aprovados) //-> [ 'Bia', 'Elemento3' ]


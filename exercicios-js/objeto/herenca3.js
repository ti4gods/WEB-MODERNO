const pai = {
    nome: 'Pedro',
    corDoCabelo: 'preto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'

console.log(filha1.corDoCabelo) //-> preto

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
})

console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`) //-> Bia tem cabelo preto

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// hasOwnProperty pode ser usado para identificar se o atributo em questão veio por herança ou é nativo do objeto
for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) :
        console.log(`Por herança ${key}`)
}
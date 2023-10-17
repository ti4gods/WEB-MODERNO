// 26) Fazer um programa para encontrar todos os pares entre 1 e 100

function listarNumerosPares() {
    for (let indice = 1; indice < 101; indice++) {
        if (indice % 2 == 0) {
            console.log(indice)
        }        
    }    
}

listarNumerosPares();


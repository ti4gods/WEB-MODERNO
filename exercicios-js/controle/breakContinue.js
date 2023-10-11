const numeros = [1,2 ,3, 4, 5, 6, 7, 8, 9, 10];

for (let indice1 in numeros) {
    if (indice1 == 5) {
        break;
    }

    console.log(`Indice = ${numeros[indice1]}`)
}

for (let indice2 in numeros) {
    if (indice2 == 5) {
        continue;
    }

    console.log(`IndiceX = ${numeros[indice2]}`)
}

loopExterno: for (let indiceExterno in numeros) {
    for (let indiceInterno in numeros) {
        if (indiceExterno == 2 && indiceInterno == 3) break loopExterno
        console.log(`Par = ${indiceExterno}, ${indiceInterno}`)
    }
}
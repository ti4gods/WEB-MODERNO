// middleware pattern (chain of responsibility)

const passo1 = (contexto, proximo) => {
    contexto.valor1 = 'Mid1';
    proximo();
}

const passo2 = (contexto, proximo) => {
    contexto.valor2 = 'Mid2';
    proximo();
}

const passo3 = contexto => 
    contexto.valor3 = 'Mid3';

const executarMiddleware = (contexto, ...listaDeMiddlewares) => {
    const executarPasso = indiceMiddleare => {
        listaDeMiddlewares && 
        indiceMiddleare < listaDeMiddlewares.length && 
        listaDeMiddlewares[indiceMiddleare](contexto, () => executarPasso(indiceMiddleare + 1))
    }
    executarPasso(0);
}

const contexto = {}
executarMiddleware(contexto, passo2, passo1, passo3);
console.log(contexto); //-> { valor2: 'Mid2', valor1: 'Mid1', valor3: 'Mid3' }

// executarMiddleware(contexto, passo2);
// console.log(contexto);
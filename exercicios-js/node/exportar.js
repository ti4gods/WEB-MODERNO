console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.a = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports) //-> { a: 2, c: 3 }

exports = {
    nome: 'Teste'
}

console.log(module.exports) //-> { a: 2, c: 3 }



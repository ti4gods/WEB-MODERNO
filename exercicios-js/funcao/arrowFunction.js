let comparaComThis = function (parametro) {
    console.log(this === parametro)
};

comparaComThis(global);

const objeto2 = {}
comparaComThis = comparaComThis.bind(objeto2)
comparaComThis(global)
comparaComThis(objeto2)

let comparaComThisArrow = parametro => console.log(this === parametro)
comparaComThisArrow(global)

comparaComThisArrow = comparaComThisArrow.bind(objeto2)
comparaComThisArrow(objeto2)
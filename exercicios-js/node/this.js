console.log(this === global, 
            this === module, 
            this === module.exports, 
            this === exports
) // false false true true

function logThis() {
    console.log('Dentro de uma função...');
    console.log(this === global, 
            this === module, 
            this === module.exports, 
            this === exports
    )     
} // true false false false

logThis();
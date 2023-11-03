const _ = require('lodash');

// Utilizando a função RANDOM do módulo LODASH
setInterval(() => 
    console.log(_.random(1, 1000)), 2000
);


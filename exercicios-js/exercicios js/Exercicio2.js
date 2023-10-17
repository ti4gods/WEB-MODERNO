// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function classificarTriangulo(lado1, lado2, lado3) {
  const tipoDeTriangulo = ["EQUILÁTERO", "ISÓSCELES", "ESCALENO"];
  
  if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("Os lados do triângulo devem ter valores positivos.");
  } else {
    if (lado1 === lado2 && lado2 === lado3) {
      console.log(`O triângulo é ${tipoDeTriangulo[0]}`);
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      console.log(`O triângulo é ${tipoDeTriangulo[1]}`);
    } else {
      console.log(`O triângulo é ${tipoDeTriangulo[2]}`);
    }
  }
}

classificarTriangulo(1, 2, 3);
classificarTriangulo(1, 1, 2);
classificarTriangulo(1, 1, 1);


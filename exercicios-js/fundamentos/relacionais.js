//Compara apenas o valor, independente do tipo.
console.log('01)', '1' == 1);

//Compara valor e tipo (estritamente igual)
console.log('02)', '1' === 1);

console.log('03)', '3' != 3);
console.log('04)', '3' !== 1);

console.log('05)',  3 < 2);
console.log('06)',  3 > 2);
console.log('07)',  3 <= 2);
console.log('08)',  3 >= 2);

//Comparando datas
const data1 = new Date(0);
console.log(data1)

const data2 = new Date(0);
console.log(data2)

console.log('09)', data1 === data2);
console.log('10)', data1 == data2);
console.log('11)', data1.getTime() === data2.getTime());

console.log('12)', undefined == null);
console.log('13)', undefined === null);


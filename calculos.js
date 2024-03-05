// exercio de operações de calculos
const num1 = 236;
const num2 = 95;

// soma
let soma = num1 + num2;

console.log("Resultado: " + soma + " !");
console.log("Resultado: ", soma);
console.log(`Resultado ${ soma } mil`);

// subtração -
let subtracao = num1 - num2;

console.log("Subtração: ", subtracao);

// multiplicação *
let multiplicacao = num1 * num2;

console.log("Multiplicação: ", multiplicacao);

// divisão /
let divisao = num1 / num2;

console.log("Divisão: ", divisao);

// numeros par ou impar %
// let num1ParOuImpar = num1 % 2;
// let num2ParOuImpar = num2 % 2;

if(num1 % 2 === 0) {
    console.log("Num1 é par");
} else {
    console.log("Num1 é ímpar");
}

if(num2 % 2 === 0) {
    console.log("Num2 é par");
} else {
    console.log("Num2 é ímpar");
}

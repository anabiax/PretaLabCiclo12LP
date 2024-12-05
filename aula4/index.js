/*
Pratica 2: inicie a variável i recebendo o valor 1. Dado um número inteiro positivo 𝑁, 
calcule a soma de todos os números naturais de 1 até 𝑁. Imprima na tela o resultado da operação

*/


const N = 4; // alterar este valor para testar outros casos

// inicialize a soma
let soma = 0;

// use o laço for para somar os números de 1 até N
for (let i = 1; i <= N; i++) {
    soma += i;
}

// exiba o resultado
console.log(`A soma dos números de 1 até ${N} é:`, soma);
/*let numPar = 0;
let i = 1;

while(i < 100){
        if(i%2 == 0){
        numPar = i
    console.log(numPar**2)
    }
    i++
}*/

/*
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

console.log(verificarParOuImpar(7)); // ímpar
*/

/*
const contarPalavras = (frase) => frase.split(" ").length;

console.log(contarPalavras("JavaScript é uma linguagem divertida!")); // 5
*/

function calculadora(a, b, operador) {
    switch (operador) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return "Operador inválido!";
    }
  }
  
  console.log(calculadora(10, 5, "+")); // 15
  console.log(calculadora(10, 5, "/")); // 2
  //console.log(calculadora(10, 5, "%")); // Operador inválido!
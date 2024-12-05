const numero1 = 10;
const numero2 = 5;
const operacao = "*";

switch (operacao) {
  case "+":
    console.log(`Resultado: ${numero1 + numero2}`);
    break;
  case "-":
    console.log(`Resultado: ${numero1 - numero2}`);
    break;
  case "*":
    console.log(`Resultado: ${numero1 * numero2}`);
    break;
  case "/":
    console.log(`Resultado: ${numero1 / numero2}`);
    break;
  default:
    console.log("Operação inválida.");
}
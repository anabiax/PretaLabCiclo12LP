## Autogestão 06/12

### Switch
O switch é uma estrutura de controle no JavaScript usada para tomar decisões com base no valor de uma expressão. Ele funciona como uma alternativa ao uso de múltiplos if...else, sendo útil quando há várias condições a serem verificadas.
<br>
A estrutura básica do switch

```javascript

switch (expressao) {
  case valor1:
    // código a ser executado se expressao === valor1
    break;
  case valor2:
    // código a ser executado se expressao === valor2
    break;
  default:
    // código a ser executado se nenhum case for verdadeiro
}

```

  <b>Exemplo pratico 1: </b> dias da semana

```javascript
const dia = 3; // 1 = segunda, 2 = terça, ..., 7 = domingo

switch (dia) {
  case 1:
    console.log("Hoje é segunda-feira.");
    break;
  case 2:
    console.log("Hoje é terça-feira.");
    break;
  case 3:
    console.log("Hoje é quarta-feira.");
    break;
  case 4:
    console.log("Hoje é quinta-feira.");
    break;
  case 5:
    console.log("Hoje é sexta-feira.");
    break;
  case 6:
    console.log("Hoje é sábado.");
    break;
  case 7:
    console.log("Hoje é domingo.");
    break;
  default:
    console.log("Dia inválido.");
}
```

<b>Exemplo pratico 2: </b> cálculo com base em operações

```javascript
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
```

<b>Exemplo pratico 3: </b> categorias de idade

```javascript
const idade = 18;

switch (true) {
  case idade < 12:
    console.log("Você é uma criança.");
    break;
  case idade >= 12 && idade < 18:
    console.log("Você é um adolescente.");
    break;
  case idade >= 18 && idade < 60:
    console.log("Você é um adulto.");
    break;
  case idade >= 60:
    console.log("Você é um idoso.");
    break;
  default:
    console.log("Idade inválida.");
}
```

  <details>
    <summary>Desafio: Calculadora Completa. Crie uma função chamada calculadora que receba três parâmetros: dois números e o operador (+, -, *, /). <br> 
    - use um switch para realizar a operação
    </summary>
    

```javascript

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
console.log(calculadora(10, 5, "%")); // Operador inválido!

```
  </details>
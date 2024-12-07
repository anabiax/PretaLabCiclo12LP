/*
1. 
let idade = 17; // altere o valor para testar diferentes casos

if (idade < 18) {
  console.log("Você é menor de idade.");
} else {
  console.log("Você é maior de idade.");
}


2. 
const idade = 23;

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

3.
let numero1 = 5;
let numero2 = 8;
let numero3 = 12;

let media = (numero1 + numero2 + numero3) / 3;

console.log("A média aritmética é:", media.toFixed(2));


4.
let i = 1;
while (i <= 1000) {
  console.log(i);
  i++;              // incrementa o valor de i a cada iteração
}


5.
duas maneiras: 
direta:
for (let i = 1; i <= 10; i++) {
  console.log(`9 x ${i} = ${9 * i}`);
}

mais complexa:
let tabuada = [];

// gerando a tabuada e armazenando no array
for (let i = 1; i <= 10; i++) {
  tabuada.push(`9 x ${i} = ${9 * i}`);
}

// exibindo a tabuada na tela (console)
console.log("Tabuada do 9:");
tabuada.forEach((linha) => console.log(linha));

como ler o codigo acima:

1. criar de uma variável vazia, que é um array -> let tabuada = [];
1.1. esse array servirá para armazenar as linhas da tabuada do 9 (como "9 x 1 = 9")

2. gerando a tabuada com um loop for
2.1. o loop começa com o contador i = 1 e incrementa em 1 até i = 10.
2.2. para cada valor de i, uma linha da tabuada é gerada usando template literals
2.3. essa linha é adicionada ao array tabuada com o método push

3. exibindo a tabuada no console
4. tabuada.forEach((linha) => console.log(linha));
4.1. forEach é um método do array que percorre cada elemento do array
4.2. a cada iteração, ele executa a função console.log(linha), que imprime a linha atual no console.


6.
// inicializando as variáveis de contagem
let contadorPares = 0;
let contadorImpares = 0;

// imprimindo os números de 0 até 40
for (let i = 0; i <= 40; i++) {
  console.log(i);

  // verificando se o número é par ou ímpar
  if (i % 2 === 0) {
    contadorPares++; // número par
  } else {
    contadorImpares++; // número ímpar
  }
}

// exibindo a quantidade de números pares e ímpares
console.log(`Quantidade de números pares: ${contadorPares}`);
console.log(`Quantidade de números ímpares: ${contadorImpares}`);

7.
let prato = "feijoada";  // Alterar conforme necessário
let bebida = "suco de laranja";  // Alterar conforme necessário

// verificando se o pedido está correto
if (prato === "feijoada" && bebida === "suco de laranja") {
  console.log("Muito grata pelo almoço!");
} else {
  console.log("Acho que houve um engano com meu pedido");
}


8.
const nota = 75; // altere o valor para testar diferentes casos

if (nota >= 80) {
  console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!");
} else if (nota >= 60) {
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Infelizmente, você reprovou.");
}

9.
const numero1 = 45; 
const numero2 = 30; 

if (numero1 > numero2) {
  console.log(`O maior número é: ${numero1}`);
} else {
  console.log(`O maior número é: ${numero2}`);
}


10.
const numero1 = 45; 
const numero2 = 30; 
const numero3 = 60; 

if (numero1 >= numero2 && numero1 >= numero3) {
  console.log(`O maior número é: ${numero1}`);
} else if (numero2 >= numero1 && numero2 >= numero3) {
  console.log(`O maior número é: ${numero2}`);
} else {
  console.log(`O maior número é: ${numero3}`);
}


11.
const horarioAtual = 13; // altere o valor para testar diferentes horários (entre 4 e 24)

let mensagem = "";

if (horarioAtual >= 22) {
  mensagem = "Não deveríamos comer nada, é hora de dormir";
} else if (horarioAtual >= 18 && horarioAtual < 22) {
  mensagem = "Rango da noite, vamos jantar :D";
} else if (horarioAtual >= 14 && horarioAtual < 18) {
  mensagem = "Vamos fazer um bolo pro café da tarde?";
} else if (horarioAtual >= 11 && horarioAtual < 14) {
  mensagem = "Hora do almoço!!!";
} else if (horarioAtual >= 4 && horarioAtual < 11) {
  mensagem = "Humm, cheiro de café recém-passado";
}

console.log(mensagem);


12.
const nota = 85; // altere esse valor para testar diferentes casos

if (nota < 0 || nota > 100) {
  console.log("Erro: A nota deve estar entre 0 e 100.");
} else if (nota >= 90) {
  console.log("Conceito: A");
} else if (nota >= 80) {
  console.log("Conceito: B");
} else if (nota >= 70) {
  console.log("Conceito: C");
} else if (nota >= 60) {
  console.log("Conceito: D");
} else if (nota >= 50) {
  console.log("Conceito: E");
} else {
  console.log("Conceito: F");
}

ou 

const nota = 85; // Altere esse valor para testar diferentes casos

// verificando se a nota está dentro do intervalo válido
if (nota < 0 || nota > 100) {
  console.log("Erro: A nota deve estar entre 0 e 100.");
} else {
  // mapeando a nota para um conceito de faixa
  let conceito;
  
  if (nota >= 90) {
    conceito = 'A';
  } else if (nota >= 80) {
    conceito = 'B';
  } else if (nota >= 70) {
    conceito = 'C';
  } else if (nota >= 60) {
    conceito = 'D';
  } else if (nota >= 50) {
    conceito = 'E';
  } else {
    conceito = 'F';
  }

  // usando switch para exibir a mensagem
  switch (conceito) {
    case 'A':
      console.log("Conceito: A");
      break;
    case 'B':
      console.log("Conceito: B");
      break;
    case 'C':
      console.log("Conceito: C");
      break;
    case 'D':
      console.log("Conceito: D");
      break;
    case 'E':
      console.log("Conceito: E");
      break;
    case 'F':
      console.log("Conceito: F");
      break;
    default:
      console.log("Erro: A nota deve estar entre 0 e 100.");
  }
}

DESAFIO
function calcular(a, b, operador) {
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

console.log(calcular(10, 5, "+")); // 15
console.log(calcular(10, 5, "/")); // 2
console.log(calcular(10, 5, "%")); // Operador inválido!


*/


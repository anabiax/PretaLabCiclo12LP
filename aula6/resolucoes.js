/*
PRATICA 1 
let idade = 17; // altere o valor para testar diferentes casos

if (idade < 18) {
  console.log("Você é menor de idade.");
} else {
  console.log("Você é maior de idade.");
}

como ler o codigo acima:
pensando em quebrar em pequenos passos o que preciso fazer para atingir o objetivo:
1. definir a variável que contém a idade da pessoa
1.1. criar uma variável chamada idade e atribuir a ela um valor numérico. Neste caso, o valor inicial é 17
2. estabelecer a lógica para verificar se a pessoa é maior ou menor de idade
2.1. usar uma estrutura condicional if...else para comparar o valor de idade com o número 18
3. especificar o comportamento para cada condição
3.1. se a idade for menor que 18 -> exibir a mensagem "Você é menor de idade." usando console.log
3.2. se a idade for maior ou igual a 18 -> exibir a mensagem "Você é maior de idade."
4. testar diferentes cenários alterando o valor da variável idade


PRATICA 2
const idade = 23;
if (idade < 12) {
  console.log("Você é uma criança.");
} else if (idade >= 12 && idade < 18) {
  console.log("Você é um adolescente.");
} else if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto.");
} else if (idade >= 60) {
  console.log("Você é um idoso.");
} else {
  console.log("Idade inválida.");
}

como ler o codigo acima:
pensando em quebrar em pequenos passos o que preciso fazer para atingir o objetivo:
1. definir a variável que contém a idade da pessoa
1.1. criar uma constante chamada idade e atribuir a ela um valor numérico, neste caso, 23
2. verificar se a idade indica que a pessoa é uma criança, um adolescente, um adulto ou um idoso
2.1. se verdadeiro (true), exibir a mensagem correspondente no console.
3. definir um comportamento padrão para idades inválidas
3.1. usar a cláusula else para capturar qualquer outro caso não tratado (como valores negativos)
3.2. exibir a mensagem "Idade inválida." no console
4. testar o código com diferentes valores para a constante idade


PRATICA 3
let numero1 = 5;
let numero2 = 8;
let numero3 = 12;

let media = (numero1 + numero2 + numero3) / 3;

console.log("A média aritmética é:", media.toFixed(2));

como ler o codigo acima:
pensando em quebrar em pequenos passos o que preciso fazer para atingir o objetivo:
1. definir as variáveis que contêm os números sobre os quais desejo calcular a média
1.1. criar três variáveis chamadas numero1, numero2 e numero3, e atribuir a elas os valores desejados
2. calcular a soma dos números
2.1. somar os valores de numero1, numero2 e numero3 para obter o total, delimitado pelos parênteses
3. calcular a média aritmética
3.1. dividir a soma dos três números pelo total de números (que é 3) e armazenar o resultado em uma variável chamada media
4. formatar o resultado para duas casas decimais
4.1. usar o método .toFixed(2) na variável media para garantir que o resultado seja exibido com duas casas decimais
5. exibir o resultado no console


PRATICA 4
let i = 1;
while (i <= 1000) {
  console.log(i);
  i++;              // incrementa o valor de i a cada iteração
}

como ler o codigo acima:
pensando em quebrar em pequenos passos o que preciso fazer para atingir o objetivo:
1. definir uma variável de controle para o loop
1.1. criar uma variável chamada i e inicializá-la com o valor 1. Essa variável será usada para controlar as iterações do loop
2. configurar uma condição para o loop continuar executando
2.1. usar a estrutura while e definir como condição que o loop continuará enquanto i <= 1000
3. exibir o valor atual de i em cada iteração
3.1. dentro do bloco do loop, usar console.log(i) para exibir o valor atual da variável i no console
4. incrementar a variável de controle após cada iteração
4.1. adicionar a instrução i++ dentro do bloco do loop para aumentar o valor de i em 1 a cada ciclo. Isso garante que o loop pare quando i atingir o valor 1000
5. testar a execução do código


PRATICA 5
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

como ler o primeiro codigo acima:
pensando em quebrar em pequenos passos o que preciso fazer para atingir o objetivo:
1. criar um loop para iterar por um intervalo de números
1.1. usar um laço for que começa com a variável de controle i inicializada em 1
1.2. configurar a condição para que o loop continue enquanto i <= 10
1.3. incrementar o valor de i em 1 a cada iteração usando i++
2. definir o cálculo para exibir a tabuada do número 9
2.1. dentro do bloco do loop, multiplicar o número 9 pelo valor atual de i (9 * i) para calcular o produto
2.2. construir a mensagem formatada como 9 x i = resultado usando a template string (`9 x ${i} = ${9 * i}`) para facilitar a leitura
3. exibir o resultado de cada multiplicação no console
4. testar o código


como ler o segundo codigo acima:
pensando em quebrar em pequenos passos o que preciso fazer para atingir o objetivo:
1. criar de uma variável vazia, que é um array, para armazenar os resultados da tabuada 
1.1. inicializar um array vazio chamado tabuada para armazenar as frases que representarão as multiplicações da tabuada do 9
2. gerando a tabuada com um loop for
2.1. o loop começa com o contador i = 1 e incrementa em 1 até i = 10.
2.2. para cada valor de i, uma linha da tabuada é gerada usando template literals
2.3. essa linha é adicionada ao array tabuada com o método push
3. exibindo a tabuada no console
4. iterar sobre o array e exibir cada linha da tabuada
4.1. usar o método forEach para percorrer cada elemento do array tabuada
4.2. a cada iteração, ele executa a função console.log(linha), que imprime a linha atual no console.


PRATICA 6
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

como ler o codigo acima:
pensando em quebrar em pequenos passos o que preciso fazer para atingir o objetivo:
1. inicializar variáveis para contagem
1.1. criar duas variáveis: contadorPares e contadorImpares, e inicializá-las com o valor 0. Elas serão usadas para contar quantos números pares e ímpares existem no intervalo
2. criar um loop para percorrer os números de 0 a 40
2.1. usar um laço for para iterar de i = 0 até i <= 40. A cada iteração, o valor de i será impresso no console com console.log(i)
3. verificar se o número é par ou ímpar
3.1. dentro do laço, usar a operação i % 2 === 0 para verificar se o número é par. Se for verdadeiro, incrementar a variável contadorPares em 1 usando contadorPares++
3.2. se o número não for par (ou seja, for ímpar), incrementar a variável contadorImpares em 1 usando contadorImpares++
4. exibir a quantidade de números pares e ímpares
4.1. após o loop, usar console.log para exibir o total de números pares e ímpares. Utilizar contadorPares e contadorImpares para mostrar as quantidades


PRATICA 7
let prato = "feijoada";  // Alterar conforme necessário
let bebida = "suco de laranja";  // Alterar conforme necessário

// verificando se o pedido está correto
if (prato === "feijoada" && bebida === "suco de laranja") {
  console.log("Muito grata pelo almoço!");
} else {
  console.log("Acho que houve um engano com meu pedido");
}

como ler o codigo acima:
pensando em quebrar em pequenos passos o que preciso fazer para atingir o objetivo:
1. definir as variáveis para o prato e bebida
2. verificar se o pedido está correto
2.1. a condição deve ser verdadeira se prato === "feijoada" e bebida === "suco de laranja". Para isso, utilizamos o operador lógico &&, que garante que ambas as condições sejam verdadeiras simultaneamente
3. exibir a resposta baseada na verificação
3.1. se a condição for verdadeira, significa que o pedido está correto, e o código exibirá a mensagem "Muito grata pelo almoço!" no console
3.2. caso contrário, se a condição não for atendida, o código executará o bloco else e exibirá a mensagem "Acho que houve um engano com meu pedido"


PRATICA 8
const nota = 75; // altere o valor para testar diferentes casos

if (nota >= 80) {
  console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!");
} else if (nota >= 60) {
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Infelizmente, você reprovou.");
}

como ler o codigo acima:
pensando em quebrar em pequenos passos o que preciso fazer para atingir o objetivo:
1. definir a variável nota
2. configurar a estrutura condicional para verificar a aprovação
3. verificar a segunda condição para a lista de espera
4. tratar a situação em que o aluno reprovou
5. testar o código para diferentes notas


PRATICA 9
const numero1 = 45; 
const numero2 = 30; 

if (numero1 > numero2) {
  console.log(`O maior número é: ${numero1}`);
} else {
  console.log(`O maior número é: ${numero2}`);
}

como ler o codigo acima:
pensando em quebrar em pequenos passos o que preciso fazer para atingir o objetivo:
1. definir as variáveis para os números a serem comparados
2. configurar a estrutura condicional para comparar os números
3. exibir o maior número
4. testar o código com diferentes números



PRATICA 10
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

como ler o codigo acima:
pensando em quebrar em pequenos passos o que preciso fazer para atingir o objetivo:
1. definir as variáveis para os números a serem comparados
1.1. criar três variáveis, numero1, numero2 e numero3, e atribuir a elas os valores que serão comparados (no caso, 45, 30 e 60)
2. configurar a estrutura condicional para encontrar o maior número
2.1. primeiro, verificar se numero1 é maior ou igual a numero2 e numero3
2.2. verificar a segunda condição, se numero2 for maior ou igual aos outros dois números
2.3. caso contrário, numero3 é o maior número
2.3.1. se nenhuma das condições anteriores for atendida (ou seja, se numero3 for maior do que os outros dois números), o código entra no bloco else e exibirá "O maior número é: 60"
3. testar o código para diferentes combinações de valores


PRATICA 11
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

como ler o codigo acima:
pensando em quebrar em pequenos passos o que preciso fazer para atingir o objetivo:
1. definir a variável horarioAtual
2. inicializar a variável mensagem como uma string vazia. Ela será usada para armazenar a mensagem que será exibida dependendo do horário.
3. configurar a estrutura condicional para verificar o horário. Dependendo do intervalo em que o horário se encaixa, a variável mensagem será preenchida com a resposta correspondente.
4. exibir a mensagem final no console
5. testar o código com diferentes horários


PRATICA 12
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

como ler o primeiro codigo:
pensando em quebrar em pequenos passos o que preciso fazer para atingir o objetivo:
1. definir a variável nota
2. verificar se a nota está dentro do intervalo válido (0 a 100)
3. avaliar os conceitos com base na nota
3.1. caso a nota seja válida (entre 0 e 100), usar uma série de condições else if para atribuir um conceito à nota
4. testar o código com diferentes valores de nota

como ler o segundo codigo:
pensando em quebrar em pequenos passos o que preciso fazer para atingir o objetivo:
1. definir a variável nota
2. verificar se a nota está dentro do intervalo válido (0 a 100)
3. mapear a nota para um conceito de faixa (A, B, C, D, E, F)
3.1. se a nota estiver dentro do intervalo válido, criar uma variável chamada conceito e atribuir a ela o valor correspondente à faixa de nota. Isso será feito por meio de uma série de condições if-else if-else
4. usar switch para exibir a mensagem correspondente ao conceito
4.1. usar uma estrutura switch para verificar o valor de conceito e exibir a mensagem correspondente
5. testar o código com diferentes valores de nota


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


como ler o codigo acima:
pensando em quebrar em pequenos passos o que preciso fazer para atingir o objetivo:
1. criar a função calcular
1.1. criar uma função chamada calcular que recebe três parâmetros: a, b (os números a serem operados) e operador (o tipo de operação a ser realizada, como soma, subtração, multiplicação ou divisão)
2. usar switch para verificar o operador
2.1. dentro da função, usar uma estrutura switch para avaliar o valor do parâmetro operador. Cada case corresponderá a uma operação diferente
3. definir o comportamento para operadores inválidos
3.1. se o operador não corresponder a nenhum dos casos acima, usar o default do switch para retornar uma mensagem indicando que o operador é inválido, como "Operador inválido!"
4. testar a função com diferentes entradas

*/
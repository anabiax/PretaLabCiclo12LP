## Autogestão 06/12

### Switch 
O switch é uma estrutura condicional no JavaScript usada para tomar decisões com base no valor de uma expressão. Ele funciona como uma alternativa ao uso de múltiplos if...else, sendo útil quando há várias condições a serem verificadas.
<br>
Estrutura básica do switch:

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

 <b>case</b>: define um valor ou condição a ser comparada com a expressão
 <b>break</b>: interrompe a execução do bloco do switch. Sem ele, a execução continua para o próximo caso
 <b>default</b>: um caso opcional que é executado quando nenhum dos outros casos é atendido. O default age como o else de um bloco if-else


  <b>Exemplo pratico 1: </b> dias da semana

```javascript
const dia = 5; // 1 = segunda, 2 = terça, ..., 7 = domingo

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

<b>Exemplo pratico 2: </b> Exemplo com comparações numéricas

```javascript
let numero = 5;

switch (numero) {
  case 1:
    console.log("Número é 1.");
    break;
  case 2:
    console.log("Número é 2.");
    break;
  case 3:
    console.log("Número é 3.");
    break;
  case 4:
    console.log("Número é 4.");
    break;
  case 5:
    console.log("Número é 5.");
    break;
  default:
    console.log("Número desconhecido.");
}
```

<b>Exemplo pratico 3: </b> cálculo com base em operações

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

<b>Exemplo pratico 4: </b> categorias de idade

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

### Bora praticar 

#### 1. Declare a variável 'idade', atribua um valor. Faça que programa exiba uma mensagem dizendo se o usuário é ou não menor de idade.

#### 2. Calcule a média aritmética de 3 números.

#### 3. Escreva um código JavaScript para exibir os números de 1 até 1000 na tela.

#### 4. Vamos ajudar, Júlia? Ela precisa estudar a tabuada do 9. Em código JavaScript, crie uma tabuada do 9 e armazene, em seguida, imprima em tela.

#### 5. Imprima os números de  0 até 40 na tela e em seguida, quantos números pares e quantos números ímpares foram impressos.

#### 6. Você está num restaurante e quer comer alguma coisa no almoço. Então, você diz:
<sub>Conteúdos abordados: operadores relacionais e estrutura condicional</sub>

 > Por favor, me veja uma feijoada **E** um suco de laranja”
 
Seria muito triste se você recebesse apenas a bebida ou só a comida, não é? 

Também não seria legal se recebêssemos a feijoada completa, mas a nossa bebida fosse um caldo de cana. **Porque nosso pedido era de que as duas condições fossem atendidas corretamente.**

Crie duas variáveis em JS, uma deve conter o prato e a outra a bebida. Quando o pedido vier certo, seu programa deve imprima a mensagem: **"Muito grata pelo almoço!"** caso não seja o pedido, imprima: **"Acho que houve um engano com meu pedido"**.

---

#### 7. Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico e atribua a ela um valor entre 1 e 100. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. 
<sub>Conteúdos abordados: operadores relacionais e estrutura condicional</sub>

Para isso, considere as seguintes informações: 
* Se a nota for maior ou igual a 80, imprima "Parabéns, você faz parte do grupo das pessoas aprovadas!".
* Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera".
* Se a nota for menor que 60, imprima "Infelizmente, você reprovou." .

Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação. Altere o valor da nota para verificar se as condições que você implementou funcionam.

---

#### 8. Defina 2 constantes que salvem valores numericos diferentes. Utilize if/else para escrever um código que retorne o maior dos dois números
<sub>Conteúdos abordados: operadores relacionais e estrutura condicional</sub>

---

#### 9. Defina 3 constantes que salvem valores numericos diferentes. Utilize if/else para escrever um código que retorne o maior de três números.
<sub>Conteúdos abordados: operadores aritméticos e estrutura condicional</sub>

---

#### 10. Siga as instruções abaixo:
<sub>Conteúdos abordados: operadores relacionais e estrutura condicional</sub>

a. Crie uma constante chamada "horarioAtual", que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia.
b. Crie uma variável chamada "mensagem" que, inicialmente, é uma string vazia. 
c. Implemente condicionais para que: 
  * Se o horário for maior ou igual a 22, atribua "Não deveríamos comer nada, é hora de dormir" na variável "mensagem".
  * Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "mensagem".
  * Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "mensagem". 
  * Se o horário for maior ou igual a 11 e menor que 14, insira "Hora do almoço!!!" na variável "mensagem". 
  * Se o horário estiver entre 4 e 11, insira "Humm, cheiro de café recém-passado" na variável "mensagem". 
d. Por fim, dê um console.log na variável "mensagem".

---

#### 11. Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 
<sub>Conteúdos abordados: Tabela verdade, Estrutura Condicional</sub>

  Siga essas regras:
  ```
  Porcentagem >= 90 -> A
  Porcentagem >= 80 -> B
  Porcentagem >= 70 -> C 
  Porcentagem >= 60 -> D 
  Porcentagem >= 50 -> E
  Porcentagem < 50 -> F
  ```

> O código deve retornar uma mensagem de erro se a nota passada for menor que 0 ou maior que 100.

---

  <details>
    <summary>Desafio: Calculadora Completa. Crie uma função chamada calcular que receba três parâmetros: dois números e o operador (+, -, *, /). <br> 
    - use um switch para realizar a operação
    </summary>
    

```javascript

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

```
  </details>
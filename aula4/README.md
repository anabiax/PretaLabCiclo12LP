## ↔️ Estrutura condicional
<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/7760933/218580978-63770ace-c9e5-4ed4-94d0-a24bc5e9f5e1.png">
</p>

Uma estrutura condicional trabalha em determinadas condições, ou seja, sua execução depende de uma condição que deve ser satisfeita.

### 🛣 if e else  


  <b>Estrutura condicional simples</b>: A estrutura condicional `if` é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. 

  Exemplo 1: <b>SE</b> a Ana vai na 25 de março e tem ótimas promoções **ENTÃO** ela fica radiante.
  
  <b>Estrutura condicional composta</b>: Usada para tratar os casos em que a condição testada é falsa. Assim, caso a condição if não seja atendida teremos o else para que outra coisa seja feita. Dessa forma, sempre que tivermos um if…else, podemos dizer que o código sempre irá executar alguma coisa.

  Exemplo 2: <b>SE</b> a Ana vai na 25 de março e tem ótimas promoções  **ENTÃO** ela fica radiante **SENÃO** a ela fica bem desapontada.
  
Se for falsa, executa as afirmações dentro de else.

<p align="center">
  <img width="600" src="../img/if-else.png">
</p> 

Estrutura de um `if else`:
```javascript
  if(condicao) {
    // faz algo
  } else if (outra condicao) {
    // faz outra coisa
  } else {
    // se nenhuma das condições forem atendidas
    // faça o que tiver aqui!
  }
```

```javascript
    // Exemplo 1
    const anaVaiNa25DeMarco = true; // A Ana vai na 25 de março
    const temOtimasPromocoes = true; // Existem ótimas promoções

    if (anaVaiNa25DeMarco && temOtimasPromocoes) {
        console.log("Ana fica radiante!");
    }

    // Exemplo 2
    const anaVaiNa25DeMarco2 = true; // A Ana vai na 25 de março
    const temOtimasPromocoes2 = false; // Não existem ótimas promoções

    if (anaVaiNa25DeMarco2 && temOtimasPromocoes2) {
        console.log("Ana fica radiante!");
    } else {
        console.log("Ana fica bem desapontada.");
    }

```

#### 🏋🏽 Bora praticar
- Abra o VSCode

<b> Exemplo 1</b>
- Crie um arquivo com extensão `.js`
- Escreva o código abaixo e em seguida salve seu arquivo 

```javascript
let hora = 10;

if (hora < 12){
    console.log('Bom dia!');
} else {
    console.log('Boa tarde!');
}
```
Qual saída vocês obtiveram?

<b> Exercício 1</b>
- Crie um arquivo com extensão `.js`
- Faça:
  1. Declare um valor numérico;  
  2. Vamos analisar se esse número é ou não maior que 10:   
    a) Se for, vamos escrever na tela a seguinte frase: "Esse número é maior que 10";    
    b) Se não for, vamos escrever na tela a seguinte frase: "Esse número é menor que 10".


<details>
  <summary>Maaasss.. e se esse número for igual a 10?</summary>

  <p align="center">
    <img width="600" src="https://cdn.programiz.com/sites/tutorial2program/files/js-if-else-if-statement_0.png">
  </p>

</details>
 

<b> Exemplo 2</b>
- Crie um arquivo com extensão `.js`
- Escreva o código abaixo e em seguida salve seu arquivo
```javascript
let a = 20,
    b = 20;

if (a > b){
    console.log('a é maior que b');
} else if (a < b){
    console.log('a é menor que b');
} else {
    console.log('a é igual a b');
}
```

#### 🏋🏽 Bora praticar
- Abra o VSCode

- Crie um arquivo com extensão `.js`
- Faça:
  1. Crie um programa que irá receber 2 números, calcule a soma deles e em seguida verifique se essa soma é maior que 100.
    a) Caso seja maior que 100, retorne "Esse número é maior que 100";
    b) Caso seja igual a 100, retorne "Bingo! Deu 100!";
    c) Caso seja menor que 100, retorne "Esse número é menor que 100".


## 🔁 Estruturas de repetição
Estruturas de repetições repetem determinado bloco de comandos enquanto a condição atende ao requisito.</b>

<p align="center">
  <img width="300" src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/i18n/pt/Fluxograma_simples.png">
</p>


## for loop

`for` é utilizado quando temos definida a quantidade de iterações de repetições necessárias.
<p align="center">
  <img width="300" src="https://media.tenor.com/Oe-fMIIqnT8AAAAC/loop-infinite.gif">
</p>

 Por parâmetro, <b>for</b> recebe três atributos: 

```javascript
for ([inicialização]; [condição]; [expressão final]) {
   declaração;
}
```
 - Inicialização: é uma expressão ou declaração de variáveis. É usada para iniciar o contador de variáveis.
 - Condição: é a expressão que será avaliada antes da iteração do loop. Enquanto a condição for atendida, o seu código será executado.
 - Expressão final: é validada ao final de cada iteração que acontece no laço FOR. Utilizada para incrementar ou atualizar a variável.
 - Declaração: é o trecho de código que será executado caso a condição seja verdadeira.
 
### Exemplo
```javascript
for (let i = 0; i < 9; i++) {
   console.log(i);
}
```

#### 🏋🏽 Bora praticar 
  Abra o VSCode

  <details>
    <summary> <b>Pratica:</b> inicie a variável <b>i</b> recebendo o valor 0. Enquanto for menor que 11, acrescente mais um número a variável, então imprima na tela (2*i). </summary>

```javascript
for (let i = 0; i < 11; i++) {
    console.log(2*i);
}

/* como ler o trecho de código acima:
Inicialização: let i = 0 inicialize o processo com a variavel i valendo 0
Condição: i < 11 o loop será executado enquanto i for menor que 11
Incremento: i++ a cada iteração, o valor de i aumenta em 1

Cálculo e saída:
console.log(2 * i): Multiplica i por 2 e imprime o resultado.

// cada número é o resultado da multiplicação de i por 2, para os valores de i de 0 a 10.
*/

```
  </details>


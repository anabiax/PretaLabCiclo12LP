# Aula 02

## Introdução a JavaScript
Hoje vamos colocar a mão massa conhecendo a sintaxe básica da linguagem JavaScript. Lets que lets? 

> Sintaxe: refere-se ao conjunto de regras e estruturas que definem como um código deve ser escrito e organizado para que a linguagem de programação o entenda e o execute corretamente. É como a gramática e a ortografia de uma linguagem falada ou escrita.

### JavaScript
JavaScript é uma linguagem de programação criada originalmente para tornar os websites mais interativos. Graças a ela, foi possível desenvolver aplicações web modernas, onde o usuário pode interagir diretamente com a página sem precisar recarregá-la a cada ação. Além disso, o JavaScript também é amplamente utilizado em sites tradicionais para implementar funcionalidades interativas de maneira inteligente.

Inicialmente, JavaScript foi projetado para atender demandas do front-end. Com o avanço da tecnologia e o aumento das exigências, surgiu a necessidade de usar a mesma linguagem tanto no lado do cliente quanto no servidor, otimizando processos e serviços. Nesse contexto, o NodeJS foi desenvolvido como uma solução eficiente para programação back-end, funcionando como um ambiente que utiliza JavaScript fora do navegador.

O NodeJS, conforme definido oficialmente, é um runtime, ou seja, um ambiente de execução composto por códigos, APIs (interfaces que facilitam a obtenção e manipulação de dados) e bibliotecas que possibilitam rodar programas JavaScript fora do navegador web. Ele funciona como um interpretador, permitindo que o JavaScript seja usado no servidor, diretamente pelo terminal. Essa flexibilidade foi o que inspirou o engenheiro de software Ryan Dahl a criar o NodeJS, um programa que você instala no computador para usar JavaScript de maneira menos limitada, expandindo seu uso para o back-end.

<p align="center">
  <img width="400" src="../img/javascript-vs-java.webp">
</p> 

> Java e JavaScript não são a mesma coisa.

<p align="center">
  <img width="400" src="../img/diferen-asentrejavaejavascript.jpg">
</p> 

  - <b>Linguagem compilada</b>: o código-fonte é convertido para um arquivo executável (código de máquina) por um compilador antes de ser executado.
  
  - <b>Linguagem interpretada</b>: o código-fonte é processado e executado linha a linha por um interpretador, sem gerar um arquivo binário independente.
  <br>
  Obs: o interpretador do NodeJS é baixado no momento em que você instala o próprio NodeJS no seu sistema.

### Tipos de dados primitivos
São os tipos básicos e imutáveis de dados no JavaScript:

- <b>Tipagem dinâmica</b>: significa que o tipo de uma variável é determinado automaticamente pelo interpretador no momento da execução, em vez de ser declarado explicitamente pela desenvolvedora.
  
- <b>Tipagem estática </b>: significa que o programador deve declarar explicitamente o tipo da variável.

<p align="center">
  <img width="400" src="../img/tipos de dados.png">
</p> 

- `Number` representa um conjunto de dados numéricos positivos ou negativos, inteiros, reais ou decimais, também inclui valores especiais como NaN(Not-a-Number);

- `String` é a sequência de caracteres, sejam eles textuais, numericos, simbolos e afins, delimitada por aspas simples (''), aspas duplas("") ou crases(``);

- `Boolean` representa um dado lógico com apenas duas possibilidades: ser verdadeiro ou falso (true or false);

- `Null` representa uma variável vazia ou nula que não armazena nada - é um valor intencionalmente vazio;

- `Undefined` um valor atribuído automaticamente a uma variável que foi declarada, mas não inicializada - é algo que nao foi definido;

- `Symbol` introduzido no ES6, representa valores únicos e imutáveis, como um id;

- `BigInt` introduzido no ES11, permite representar números inteiros maiores que o limite do tipo Number.

<p align="center">
  <img width="400" src="../img/Js-1.jpg">
</p> 

<p align="center">
  <img width="400" src="../img/JAVA.png">
</p> 

### Tipos de dados não primitivos
São estruturas mais complexas que podem conter coleções de valores:

- `Object` representa uma coleção de pares chave-valor; <br>
    const pessoa = { <br>
      nome: 'Ana', <br>
      idade: 23 <br>
    };

- `Array` representa uma lista ordenada de valores; <br>
    const numeros = [1, 2, 3, 4];

- `Function` representa uma função reutilizável; <br>
    function soma(a, b) { <br>
      return a + b; <br>
    }

> Dica importante: para verificar o tipo de um dado, use o operador typeof <br>
> console.log(typeof 23); // number  <br>
> console.log(typeof 'ana'); // string  <br>
> console.log(typeof true); // booleano  <br>

## Variáveis e Constantes

As variáveis tem o poder de armazenar informações inseridas em nossos códigos. A forma que escolhemos determinará se será uma variável de escopo local ou escopo global. 

  - <b>Escopo global</b> quer dizer que uma vez declarada, essa variável estará “viva” ”durante toda a aplicação e poderá ser acessada em toda a aplicação.

  - <b>Escopo local</b>, o escopo das variáveis locais é vinculado ao bloco onde elas são declaradas. Sendo assim, elas “morrem” ao final da instrução em que estão sendo executadas.

  <p align="center">
    <img width="600" src="../img/variavelEscopo.png">
  </p> 

### Declarando variáveis e constantes

- `var` declara uma variável, opcionalmente, inicializando-a com um valor. [USO NÃO RECOMENDADO]

- `let` declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

- `const` declara uma constante de escopo de bloco, apenas de leitura.

### Padrões de nomeclatura 
`Iremos utilizar o camelCaseNoCurso`

<p align="center">
  <img width="400" src="https://juniortoexpert.com/wp-content/uploads/naming-convention-snake-case-kebab-case-camel-case.png">
</p> 

<p align="center">
  <img width="400" src="../img/styles.png">
</p> 

#### Bora praticar 
  Abra o VSCode

  <details>
    <summary>Prática 1: crie 4 constantes e mostre no console os seus respectivos valores</summary>

```javascript
const fruta1 = "mexerica";
const fruta2 = "uva";
const fruta3 = "laranja";
const fruta4 = "jaca" 

console.log(fruta1)
console.log(fruta2)
console.log(fruta3)
console.log(fruta4)

```
  </details>
    
    
  <details>
    <summary>Pratica 2: Declare e insira os valores nas seguintes variáveis ou constantes: nome do país, pontos turísticos da sua cidade, capital do país, quantidade de estados, o país é da América Latina?
    </summary>

```javascript
const nomePais = "Brasil";
let pontosTuristicos = "MASP, museu do ipiranga, pinacoteca";
const capitalPais= "Brasilia";
const quantidadeEstados = 26;
const eDaAmericaLatina= true;
```

  </details>


### 💡 Dicas
Durante o processo de aprendizagem inserir comentários ao longo do código para descrevê-lo pode ser útil para relembrar.
 ```javascript
 // comentário de uma linha

/* isto é um comentário longo
   de múltiplas linhas.
*/

```
---

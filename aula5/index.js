/*let i = 0;

do {
    console.log("O contador vale:" + i);
    i++;
} while (i <= 5)
*/

/*
let i = 8;

do {
    console.log("um texto qualquer");
    i++;
} while (i < 10)
    
console.log("fim")
    
// eu garanto que o loop foi iterado pelo menos uma vez
*/

/*
let i = 1; // Contador

while (i <= 20) {
   if (i % 2 !== 0) { // Verifica se o número é ímpar
       console.log(i);
   }

   i++; // Incrementa o contador
}*/


  
function apresentar(nome = "Visitante", idade = "desconhecida") {
    console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
  }
  
  apresentar(); // Olá, meu nome é Visitante e tenho desconhecida anos.
  apresentar("Ana", 23); // Olá, meu nome é Ana e tenho 23 anos.
  
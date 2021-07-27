//operadores de atribuição

var y = 10 // atribui o valor de 10 a y
var x = 5 // atribui o valor de 5 a x

 y += x // soma y + x

 //operador ternário
//usado quando se quer atribui valor a uma variavel que depende de algo

var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber)// resultado Pode beber

// condição ? true : false 
 
//EXERCICIOS
//some 500 a variavel scroll

scroll = 1000
scroll += 500 

//atribua true a variavel var credito caso o cliente possua casa e carro

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa)? 'Dar Crédito': 'Crédito não liberado'

console.log(darCredito)
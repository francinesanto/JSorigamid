// 7 tipos de dados todos primitivos menos o objeto

/*var nome = 'André'; // string
var idade = 28; // number
var possuiFaculdade = true; //boolean
var time; // undefined
var comida = null //null
var simbolo = Symbol() //Symbol
var novoObjeto = {} //object
*/

//verificar que tipo de dado é 
//var nome ='André'
//console.log(typeof nome)
//retorna string/ quando a variavel é null ele retorna um objeto

//concatenar

//var sobrenome = "Sants";
//var nomeCompleto = nome + " " + sobrenome

//console.log(nomeCompleto)

//somar numero com string o resultado é sempre uma string

//var gols = 1000;
//var frase = 'Romário fez ' + gols +' gols';
 
//console.log(frase)

//template strings 
//`${}

//Exercicio Aula

//declarar uma variavel contendo um string

var nome = "Yuri";
console.log(nome)
//declare uma variavel contendo um numero dentro de uma string

var tentativas = 3;
var frase = `Essa frase vai ser repetida ${tentativas} vezes`;
console.log(frase)

//declare uma variavel com sua idade
var idade = 30;
console.log(idade)

//declare uma variavel com seu nome e outra com seu sobrenome e some as duas

var sobrenome ='Santos'
var nomeCompleto = `${nome} ${sobrenome}`
console.log(nomeCompleto)
//declare uma variavel com it´s time dentro
var it = 'It´s Time'
console.log (it)
//verifique o tipo da variavel nome
console.log(typeof nome)
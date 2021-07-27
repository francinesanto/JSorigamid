// guardar dados na memória
//três formas para iniciar variavel var, let, const
//evitam repetições DRY Don´t repeat yourself

var nome = "Francine";
var idade = 23;
var possuiFaculdade = true;
var comidaPreferida =""


console.log(nome, idade, possuiFaculdade)

var preco = 25;
var totalComprado =5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

//pode declarar mais de uma sem a usar o var let const

var sobrenome = 'Santos', cidade ='Campinas';

console.log(sobrenome,cidade)


//se declarar a variavel e não colocar valor ela fica como undefined


//hosting
//são movidas para cima do codigo, porém o valor atribuido não é movido

//exemplo
console.log(nome);
var nome = 'Fran'
//retorna undefined javascript lê de cima pra baixo e quando encontra a variavel ela ainda não está com o valor atribuido

var profissao = 'Designer';
console.log(profissao)
//retorna designer

//é possivel mudar o valor atribuido as variaveis var e let

var time = 'Ponte'
console.log(time)
//ele vai dar o resultado de Ponte

time = 'Guarani'
console.log(time)
//ele troca pra o novo valor guarani

//const é o mesmo valor sempre não se consegue fazer alteração

//const time = "São Paulo"
//time = "Palmeiras"
//vai dar o erro dizendo que time já tem valor definido

//exercicio

//criar uma variavel com seu nome 
var nome = 'Francine';

//criar uma variavel com sua idade

var idade = 30;

//declarar uma variavel com sua comida preferida

var comidaPreferida ;

//atribuir valor a sua comida preferida

comidaPreferida = 'Hamburguer';

//atribuir 5 variaveis diferentes sem valor

var nomeCachorro = 'Zeus',
time, professor,peso,altura; 

console.log(nome, idade, comidaPreferida,nomeCachorro,time, professor,peso,altura)


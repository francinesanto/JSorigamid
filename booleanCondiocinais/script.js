//boolean dois valores false e true
//vai servir pra fazer uma validação condicional
//var possuiGraduacao = true

/*if(possuiGraduacao){
  console.log('Possui Graduação')
}else{
  console.log("Não possui graduação")
}

//else if

var possuiDoutorado = false;

if(possuiDoutorado){
  console.log('Possui graduação e Doutourado')
} else if{ 
  console.log('Possui graduação, mas não doutorado')
} else {
  console.log('Não possui graduação')
}

//valores que retornam false
//string vazia
//0 ou -0
//NaN
//NULL
//undefined
//'' "" ``


// valores que retornam true
//1 numbers
// ' ' string vazia com espaço dentro
//string
//numero negativo
//{} objeto vazio

// ! negação inverte o valor

//operadores de comparação
// > maior
// < menor
// >= maior ou igual
// <= menor  ou igual
// == comparação não estrita
// === comparação estrita
// !== diferente

//operadores Logicos 
// & se tiver um valor false ele retorna false.
// se for string ele retorna a ultima

// || retorna o primeiro valor true que encontrar

// switch usa o case pra verificar se é igual a condicional break para de executar default usado caso nenhuma seja verdadeira
*/
//exercicios

// verifique se a dua idade é maior que de algum parente

var minhaIdade = 30
var viIdade = 10

if (minhaIdade > viIdade){
  console.log ('Sou mais velha que a Vi')
}else{
 console.log('A Vi é mais velha que eu')
}

//dependendo do resultado coloque o console "É maior" ,"É igual"ou  "É menor"

var numero1 = 1
var numero2 = 2
 if (numero1 > numero2){
   console.log('É maior')
 }else if (numero1 === numero2){
   console.log('É igual')
 }else{
   console.log('É menor')
 }

 //Qual valor é retornado na seguinte expressão
 var expressao = (5 - 2) && (5 - ' ') && (5-2) //verdadeiro por conta da string com espaço

 //verifique se os valores são truthy ou falsy

 var nome = 'André' //truthy
 var idade = 28 // truthy
 var possuiDoutorado = false // falsy
 var empregoFuturo; // falsy
 var dinheiroNaConta = 0 // falsy

// compare o total de habitantes do Brasil com a china(valor em milhões)

var brasil = 207
var china = 1340

if(brasil > china){
  console.log('Brasil tem mais habitantes')
}else{
  console.log('China tem mais habitantes')
}

//O que irá aparecer primeiro no console
if(('Gato' === 'gato' ) && (5 > 2)){
  console.log('verdadeiro')
}else{
  console.log('Falso')
} // falso

// O que irá aparecer primeiro no console
if(('Gato' === 'gato') || (5 > 2)){
  console.log('Gato' && 'Cão')
}else {
  console.log('Falso')
}


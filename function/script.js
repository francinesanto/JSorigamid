// Function - bloco de codigo que pode ser executado e reutilizado

/*function areaQuadrado(lado){
  return lado * lado
}

console.log(areaQuadrado(4))

// outra forma de usar function

function pi(){
  return 3.14
}

var total = 5 * pi()
console.log(total)

// criar uma função você pode definir parametros
// ao executar uma funcao você pode definir argumentos

// function imc
//peso e altura são argumentos
function imc(peso, altura){
  const imc = peso / (altura ** 2)
  return imc
}

console.log(imc(60, 1.68))

// uma funcao pode retornar qualquer tipo de dado e até outras funções//

function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return 'Informe a sua idade!'
  }else if(idade >= 60){
    return 'Está na melhor idade'
  }else{
    return 'Ainda não chegou'
  }
}

console.log(terceiraIdade(60))

//escopo
//variaveis e funcoes definidas dentro de um bloco {} não são visiveis fora dele

function faltaVisitar(paisesVisitados){
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`
}
*/
//exercicios

//crie uma função para verificar se um valor é truthy
function isTruthy(dado){
  return !!dado
}

//crie uma funcão matematica que retorne o perimetro de um quadrado

function perimetroQuadrado(lado){
  return lado * 4
}

console.log(perimetroQuadrado(4))


//crie uma função que retorne seu nome completo

function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`
}

//crie uma funcao que verifica se um numero é par

function isPar(numero){
  if(numero % 2 === 0){
    return `O ${numero} é par`
  }else{
    return `O ${numero} é impar`
  }
}

// crie uma função que retorna o tipo de dado passado nela

function tipoDado(dado){
  return typeof dado
}

//função que faz o nome aparecer quando o click ocorrer

addEventListener('click', function(){
  console.log('Francine')
})

//corrija o erro abaixo


//var totalPaises =193
function precisoVisitar(paisesVisitados){
  var totalPaises = 193
  return `Ainda faltam ${totalPaises - paisesVisitados} países`
}

function jaVisitei(paisesVisitados){
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}

// resposta colocar a var totalPaises do lado de fora para funcionar em ambas funções
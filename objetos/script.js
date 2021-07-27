//OBJETOS
//conjunto de variáveis e funções, que são chamadas de propriedades e métodos

/*var pessoa ={
  nome: 'André',
  idade: 28,
  profissao:'Designer',
  possuiFaculdade:true,
}

//pra chamar uma propriedade

console.log(pessoa.nome)
console.log(pessoa.idade)

//metodos

var quadrado = {
  lados: 4,
  area:function(lado){
  return lado + lado
  },
  perimetro: function(lado){
    return this.lados + lado
  }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

//não precisa escrever FUNCTION se não quiser

var menu ={
  widht :800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000' //alterando a cor pra #000

menu.color = 'blue' // adicionando a propriedade color no objeto menu

var bg = menu.backgroundColor

//exercicio
//crie um objeto com os seus dados pessoais
//deve possuir pelo menos duas propriedades nome e sobrenome
//com um metodo que mostre o nome completo
var dadosPessoais={
  nome:'Francine',
  sobrenome:'Santos',
  idade:30,
  Profissao:"Desenvolvedora",
  possuiFaculdade:true, 
  nomeCompleto:function(){
    return `${this.nome} ${this.sobrenome}`
  }
}

//modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

//crie um objeto de um cachorro que represente um labrador preto com 10 anos, que late ao veu um homem

var cachorro={
  raca:'labrador',
  cor:'preto',
  idade: 10,
  aoVerHomem :function (){
    return 'late'
  },
}

//algums metodos  e propriedades

var nome ='André'

nome.length ;// 5
nome.charAt(1) //n vai trazer o que está no index passado
nome.replace('ré', 'rei')// 'Andrei troca o ré por rei

var altura = 1.8;

altura.toString() // '1.8' transforma em string

altura.toFixed(); //'2' arredonda */

var btn = document.querySelector('.btn')
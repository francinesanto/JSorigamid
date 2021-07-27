// DOM - DOCUMENT OBJECTS MODEL 
//uma interface que representa documentos html e xml como objetos

console.log(window)
//window é o objeto global do browser
//possui diferentes métodos e propriedades

window.innerHeight // retorna  a altura do browser

//EXERCICIOS

//Retorne o url da página atual utilizandoo objeto window

const hrefPagina = window.location.href
console.log(hrefPagina)

// seleciona o primeiro elemento da pagina com a class ativo

const elementoAtivo = document.querySelector(".ativo")
console.log(elementoAtivo)
//querySelectorAll pega todos os elementos com a class ou id passado

//retorne a linguagem do navegador

const linguagem = navigator.language
console.log(linguagem)

//retorne a largura da janela

const larguraWindow = window.innerWidth
console.log(larguraWindow)
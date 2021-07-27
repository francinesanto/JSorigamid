//Exercicios

//Quando o usuario clicar nos links internos do site
//adicione a class ativo  ao item clicado  e remova dos
//outros links caso eles possuam a mesma.Previna o comportamento 
//padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleLink(event){
  event.preventDefault()
  linksInternos.forEach((link) =>{
    link.classList.remove('ativo')
  })
  event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink)
})

//selecione todos os elementos do site a partir do body
//ao clique mostre exatamente quais elementos esão sendo clicados

const allElements = document.querySelectorAll('body *')

function handleElement(event){
  console.log(event.currentTarget)
}

allElements.forEach((element) => {
  element.addEventListener('click', handleElement)
})

//para remover um elemento dentro da function handleElement poderia passar

//event.currentTarget.remove

//se o usurio clicar na tecla t, aumente o texto de todo site

function clickT(event){
  if(event.key === 't'){
    document.documentElement.classList.toggle('textmaior')
  }
}

window.addEventListener('keydown', clickT)
//Metodo para adicionar um evento é o addEventListener, adicionanado uma função
//ao elemento que é chamada de callback que será ativada assim que certo evento
//ocorrer nesse elemento

const img = document.querySelector('img')

img.addEventListener('click', function(){
  console.log('Clicou')
})

//primeiro argumento é evento, segundo a função e terceiro é opcional

//uma boa pratica é criar a função e passar dentro do addEventListener

function callback(){
  console.log('clicou')
}

//img.addEventListener('click', callback)


//Event

const animaisLista = document.querySelector('.animais-lista')

function callbackLista (event){
  const currentTarget = event.currentTarget// exatamente o elemento selecionado
  const target = event.target//exatamente onde foi clicado
  const type = event.type // tipo do evento,
  const path = event.path // caminho do evento
  console.log(currentTarget, target, type, path)
}

animaisLista.addEventListener('click', callbackLista)

//preventDefault- previne o comportamento padrão do evento no browser
//this- no caso de Eventos ela faz referencia ao elemento selecionado

const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event){
  event.preventDefault()
  console.log(this)// referencia ao a
  console.log(event)
}

linkExterno.addEventListener('click', handleLinkExterno)

//this- no caso de Eventos ela faz referencia ao elemento selecionado
// exemplo acima seria o a

//DIFERENTES TIPOS DE EVENTOS
//Podem ser adicionado em elementos, window e document
const h1 = document.querySelector('h1')

function callbackAll(event){
  console.log(event.type, event)
}

h1.addEventListener('click', callbackAll)
h1.addEventListener('mouseenter', callbackAll)
window.addEventListener('scroll', callbackAll)
window.addEventListener('resize', callbackAll)
window.addEventListener('keydown', callbackAll)

//KEYBOARD
//Usado para adicionar atalhos para facilitar a navegação no site, atraves de eventos pelo keyboard

function handleKeyboard(event){
  if(event.key === 'a')
  document.body.classList.toggle('azul')
  else if(event.key === 'v')
  document.body.classList.toggle('vermelho')
}

window.addEventListener('keydown', handleKeyboard)

//forEach e eventos

const imgs = document.querySelectorAll('img')

function handleImg(event){
  console.log(event.target)
}

imgs.forEach((img) =>{
  img.addEventListener('click', handleImg)
})
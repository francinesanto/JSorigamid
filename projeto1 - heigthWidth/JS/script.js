const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.clientHeight

console.log(height)// passa o height definido


const heightScroll = listaAnimais.scrollHeight

console.log(heightScroll)
// heigth total mesmo com scroll

const animaisTop = listaAnimais.offsetTop

console.log(animaisTop)
//distancia do elemento ao topo da pagina

const primeiroH2 = document.querySelector('h2')
const h2Left= primeiroH2.offsetLeft

console.log(h2Left)
//distancia da esquerda até o elemento


const rect = primeiroH2.getBoundingClientRect()

console.log(rect)
//mostra todas as propriedades


console.log(
  window.innerWidth,
  //tamanho da  largura tela 
  window.innerHeight,
  //tamanho da altura tela
  window.outerHeight,
  //janela inteira
  window.pageYOffset,
  //valor do scroll em eixo Y
  window.pageXOffset,
  //valor do scrool em eixo X
)

const small = window.matchMedia('(max-width: 600px)').matches

if(small){
  console.log('Usuário Mobile')
} else{
  console.log('Usuário Desktop')
}

//Exercicios

//verifique a distancia da primeira imagem em relação ao top da pagina

const firstImg = document.querySelector('img')

const distancia = firstImg.offsetTop
console.log(distancia)

//Retorne a soma da largura de todas as imagens

function somaImagens(){
  const imagens = document.querySelectorAll('img')
  let soma = 0
  imagens.forEach((imagem) =>{
    soma += imagem.offsetWidth
  })
  console.log(soma)
}

window.onload = function(){
  somaImagens()
}

//Verifique se os links da pagina possuem o minimo recomendado para  telas
//utilizadas com o dedo 48x 48 px

const links = document.querySelectorAll('a')

links.forEach((link) =>{
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight

  if(linkWidth >= 48 && linkHeight >=48){
    console.log(link,'Possue o minimo recomendado')
  }else{
    console.log(link,'Não possui o mínimo recomendado')
  }
})

console.log(links)

//se o browser for menor que 720px
//acrescente a  a classe menu-mobile no menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches

if (browserSmall){
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}
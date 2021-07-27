//getElementById seleciona e retorna elementos do DOM

//Seleciona pelo ID
const animaisSection = document.getElementById('animais')
console.log(animais)

//se selecionar algo que não existe ele retorna null

//getElementsByClassName e getElementsByTagName
//selecionam e retorma uma lista de elementos do DOM, se forem adicionados elementos ela será automaticamente atualizada, mesmo que seja só um elemento é retornado uma lista que é um HTML COLLECTION


const gridSection = document.getElementsByClassName('grid-section')

console.log(gridSection)

console.log(gridSection[1])//seleciona pela posição na lista Html Collection

//querySelector - retorna o primeiro elemento que combinar com o seu seletor CSS

const contato = document.querySelector('#contato')

console.log(contato)

// pode selcionar de dentro de uma seleção

const primeiroUl = document.querySelector('ul')
const navItem = primeiroUl.querySelector('li')

console.log(navItem)

//selecionar o primeiro link que começa com #

const linkInterno = document.querySelector('[href^="#"]');

console.log(linkInterno)

//querySelectorAll -retorna todos os elementos compativeis com o seletor CSS em uma NodeList que é estatica não atualiza se adicionado elementos

const animaisImg = document.querySelectorAll('.animais img')

console.log(animaisImg)
console.log(animaisImg[2])//selecionado pela posição na NodeList

//Diferença entre NodeList e HTML Collection

//é as propriedades e que a HTML COLLECTION atualiza se adicionado novo elemento e o NodeList não atualiza

//forEach faz um loop por cada elemento do array 

//Array.from() pra transformar uma Html collection ou nodelist em array

//exercicios

//retorne no console todas as imagens do site

const allImg = document.querySelectorAll('img')

console.log(allImg)

//retorne no console apenas as imagens que começam com a palavra imagem

const imagemIMG = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagemIMG)

//seleciona todos os links internos(onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos)

//seleciona o primeiro h2 dentro de  .animais-descricao

const h2Descricao = document.querySelector(".animais-descricao h2")

console.log(h2Descricao)

//seleciona o ultimo p do site

const paragrafos = document.querySelectorAll('p')

console.log(paragrafos[paragrafos.length-1])
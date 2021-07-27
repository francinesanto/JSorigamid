//classList - retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém uma classe.

const menu = document.querySelector('.menu')

console.log(menu.classList) //retorna uma lista de classes

menu.classList.add('ativo')//adiciona a class ativo

menu.classList.remove('azul') // remove a class azul

menu.classList.toggle('azul') // no caso adiciona o azul, se já tivesse azul removeria

menu.classList.contains('azul') //vai verificar se tem a class azul e retorna um boolean

//attributes

const animais = document.querySelector('.animais')// traz os atributos do elemento

console.log(animais.attributes)

//getAttribute e setAttribute - métodos que retornam ou defibem de acordo com o atributo selecionado

const img = document.querySelector('img')

console.group(img.getAttribute('src'))//traz o caminho da img

img.setAttribute('alt', 'texto alternativo')// adiciona o alt e o texto dele

const possuiAlt = img.hasAttribute('alt')
console.log(possuiAlt) // retorna um boolean se tem ou não o metodo

img.removeAttribute() // remove o atributo

//Read Only vs Writable - existem propriedades que não permitem a mudança de  seus valores, essas são consideradas Read Only, ou seja, apenas LEITURA.

//Exercicios

//adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach((item) => {
  item.classList.add('ativo')
})

//remova a class ativo e mantenha só no primeiro item

itensMenu.forEach((item) => {
  item.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo')

//verifique se todas as imagens possuem o elemento alt

const imgs = document.querySelectorAll('img')

imgs.forEach((img) => {
  const possuiAtritbuto=img.hasAttribute('alt')
  console.log(img, possuiAtritbuto)
})

//modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]')
link.setAttribute("href" , 'https://facebook.com')
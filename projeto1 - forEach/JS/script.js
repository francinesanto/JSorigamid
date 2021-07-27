//forEach - constantemente vamor selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach

const imgs = document.querySelectorAll('img')

imgs.forEach(function(item){
 console.log(item)
})

//o primeiro parametro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três paramêtros: item(exemplo), index(posição no array), array(a qual pertence)

//ARROW FUNCTION - Remover uma palavra chave function e adicionar a fat arrow => após os argumentos

const img = document.querySelectorAll('img')

img.forEach((item) =>{
  console.log(item)
})

//EXERCICIOS

//Mostre no console cada paragrafo do site

const p = document.querySelectorAll('p')

p.forEach((item) => {
  console.log(item)
})

//mostre o texto dos paragrafo

p.forEach((item) => {
  console.log(item.innerText)
})


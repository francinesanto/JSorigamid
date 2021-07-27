// é´um grupo de valores geralmente relacionados.Servem para guardamos diferentes valores em um única váriavel
/*
var videoGames = ['Switch', 'PS4', 'XBox', '3DS']

videoGames[0]//switch
videoGames[2]//Xbox

videoGames.pop //remove o ultimo item e o retorna

videoGames.push('3DS')//adiciona oa final do array

videoGames.length // 3

//for - fazer algo repetidamente- modo mais usado

for(var num = 1; num <=10; num++){
  console.log(num)
}

//while - fazer algo repetidamente 
var i = 0
while (i < 10){
  console.log(i)
  i++
}//retorna de 0 a 9 no console




*/

//for interagindo com array

/*var videoGames = ['Switch', 'PS4', 'XBox', '3DS']

for(var i = 0; i < videoGames.length; i++){
  console.log(videoGames[i])
  if(videoGames[i] === 'PS4'){
  break
  }
}

//break para o loop

//for each- executa uma ação~pra cada item da array
videoGames.forEach(function(item){
  console.log(item)
})

//pode colocar como argumento o index e o array*/

//exercicios

//crie um array com os anos que o Brasil ganhou a copa

let ganhouCopa = [1959,1962,1970,1994,2002]

ganhouCopa.forEach(function(item){
  console.log(`O brasil ganhou a copa de `+ item)
})

//interaja com um loop nas frutas abaixo e pare ao chegar em Pera

let frutas=['Banana','Maçã', 'Pera', 'Uva', 'Melância']

for(let i = 0 ; i < frutas.length; i++){
  console.log(frutas[i])
  if(frutas[i] === 'Pera'){
    break
  }
}

//coloque a ultima fruta do array acima em uma variavel

var ultimaFruta = frutas[frutas.length - 1]
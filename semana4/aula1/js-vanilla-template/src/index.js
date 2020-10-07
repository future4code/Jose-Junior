/*
EXERCÍCIO 1

Leia o código abaixo:


function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


a. O que vai ser impresso no console?
R: 10
   50

b. O que aconteceria se retirasse os dois `console.log` e 
simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? 
O que apareceria no console?
R: nao apareceria nada

EXERCÍCIO 2

Leia o código abaixo:


let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)


a. Explicite quais são as saídas impressas no console
R: as saidas impressas no console serao o elemento de cada indice do array indicado pela variavel i dentro
do laco for  dentro da funcao.

b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?
R: Amanda
   Caio

EXERCÍCIO 3

O código abaixo mostra uma função que recebe um array e devolve outro array.
Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!
R: a funcao seleciona os numeros pares e monta uma nova array com os numeros selecionados.
um nome melhor para a funcao seria: 'evenSelector' e dentro dela a variavel 'evenArray'

	const metodo = (array) => {
  let arrayFinal = [];

  for (let x of array) {
		if (x % 2 === 0) {
	    arrayFinal.push(x * x)
		}
  }

  return arrayFinal;
}

*/

function myInfo(){
    console.log('My name is Jose Junior, I am 29 years old, from Sao Paulo and I am a student')
}

//myInfo()

function customInfo(name, age, from, trueFalse){

    if(trueFalse){
        console.log(`My name is ${name}, I am ${age} years old, from ${from} and I am a student`)
    }else{
        console.log(`My name is ${name}, I am ${age} years old, from ${from} and I am not a student`)
    }
}

//customInfo('Victoria', 13, 'Sao Paulo', false)

const addNumber = (a, b) =>{
    const sum = a + b
    return sum
}
const result = addNumber(4, 76)
//console.log(result)

function compareNumber(a, b){
    
    if(a >= b){
        return true
    }else{
        return false
    }
}

//console.log(compareNumber(7, 9))

function printTenTimes(string){
    let i = 0
    while(i < 10){
        console.log(string)
        i++
    }
}

//printTenTimes('Junior')

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function calcLength(array){
    return array.length
}

//console.log(calcLength(array))

const evenOrOdd = (number) => {

    if(number % 2 === 0){
        return true
    }else{
        return false
    }
}

for(number of array){

    let checkNumber = evenOrOdd(number)
    if(checkNumber){
        console.log(`${number} is a even number`)
    }else{
        console.log(`${number} is a odd number`)
    }
}

const evenSelector = (array) => {
    let evenArray = [];
  
    for (x of array) {
          if (x % 2 === 0) {
          evenArray.push(x)
          }
    }
  
    return evenArray;
  }

  //console.log(evenSelector(array))

  const evenSelector2 = (array) => {
    let evenArray = [];
  
    for (x of array) {
          if(evenOrOdd(x)){
              evenArray.push(x)
          }
    }
  
    return evenArray;
  }

  //console.log(evenSelector2(array))

  //desafios

  const print = (element) =>{
      console.log(element)
  }

  const joinElements = (a , b) => {
      const result = a + b
      console.log(print(result))
  }

  //joinElements('Junior ', 'Silva')

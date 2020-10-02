/*EXERCÍCIO 1

O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

R: o codigo esta fazendo um loop de 0 a 5 somando +1 a varialvel i a cada loop realizado.
e somando a variavel i a varialvel valor a cada loop tambem
o resultado impresso no console seria: 10



EXERCÍCIO 2

Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a. O que vai ser impresso no console?

R: sera impresso no console somente os numeros da lista maiores que 18:
19
21
23
25
27
30


b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` 
é suficiente? Se sim, o que poderia ser usado para fazer isso?


- Desafio (faça apenas se terminar tudo!)

    DESAFIO 1

    Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ? 


    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "0"
      }
      console.log(linha)
      quantidadeAtual++
    }

    R: o resultado seria:

    '0000'


*/

//exercicio 3)
//1
const arrayOriginal = [12, 20, 78, 13, 9, 0, 43]

for (let number of arrayOriginal){
    console.log(number)
}

for (let number of arrayOriginal){
    console.log(`${number} dividido por 10 = ${number/10}`)
}

//2
let arrayPares = []
for (let number of arrayOriginal){

    if (number%2 === 0){
        arrayPares.push(number)
    }
}
console.log(arrayPares)

//3
let i = 0
let arrayString = []
for (let number of arrayOriginal){

    arrayString.push(`o elemento do index ${i} e o numero ${number}`)
    i++
}
console.log(arrayOriginal)
for (let number of arrayString){
    console.log(number)
}

let maxValue = arrayOriginal[0]
let minValue = arrayOriginal[0]

for (let number of arrayOriginal){
    
    if(maxValue < number){

        maxValue = number

    }
    if(minValue > number){

        minValue = number
    }
}

console.log(`esse eh o menor valor: ${minValue} e esse eh o maior valor: ${maxValue}`)

/*alert('Vamos jogar')
console.log('Vamos Jogar')

const chaseNumber = Number(prompt('digite um numero para seu adversario adivinhar!'))

let guess = 0
let i = 0
while(guess !== chaseNumber){

    guess = Number(prompt('tente adivinhar o numero escolhido:'))
    if(guess < chaseNumber){

        alert('Voce errou, mas esta perto tente um numero MAIOR!')
        console.log('Voce errou, mas esta perto tente um numero MAIOR!')
        i++
    }else if(guess > chaseNumber){

        alert('Voce errou, mas esta perto tente um numero MENOR!')
        console.log('Voce errou, mas esta perto tente um numero MENOR!')
        i++
    }else{

        alert('PARABENS voce acertou!!')
        console.log('PARABENS voce acertou!!')
    }
    
}
console.log(`o numero de tentativas foi de ${i}`)
*/

function ranInt(min, max){

    const number = Math.random() * (max - min) + min;

    return Math.round(number)
}

const chaseNumber = ranInt(10, 20)

let j = 0
let guess = 0

while(guess !== chaseNumber){

    guess = Number(prompt('tente adivinhar o numero entre 10 e 20:'))
    if(guess < chaseNumber){

        alert('Voce errou, mas esta perto tente um numero MAIOR!')
        console.log('Voce errou, mas esta perto tente um numero MAIOR!')
        j++
    }else if(guess > chaseNumber){

        alert('Voce errou, mas esta perto tente um numero MENOR!')
        console.log('Voce errou, mas esta perto tente um numero MENOR!')
        j++
    }else{

        alert('PARABENS voce acertou!!')
        console.log('PARABENS voce acertou!!')
    }
    
}
console.log(`o numero de tentativas foi de ${i}`)

// foi bem legal fazer esse desafio , ja sabia como randomizar na linguagem python, que de longe eh bem mais 
//simples, mas em js tive que ler as referencias e aprendi algo novo e que vai ser util mais pra frente!

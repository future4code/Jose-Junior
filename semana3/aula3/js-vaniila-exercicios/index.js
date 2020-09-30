/* Exercicio 1)

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

o codigo acima testa se o numero informado pelo usuario eh impar ou par.
se o numero informado for par ele passa no teste.
se for impar ele nao pasa no teste.
*/

/* exercicio 2)

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a. Para que serve o código acima?
R: para informar o o preco da fruta de acordo com o nome dela.

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
R: o preco indicado sera 2.25

c. Considere que um usuário queira comprar uma `Pêra`,
qual seria a mensagem impressa no console se retirássemos o `break`
que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
R: o preco seria de 5 

*/

/*
 EXERCÍCIO 3

Leia o código abaixo:


const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


a. O que a primeira linha está fazendo?
R: esta pedindo ao usuario um numero e guardando a informacao numa varialvel

b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
R: se o numero for 10, no terminal apareciaria a msg 'esse numero passou no teste'.
   se fosse -10 nao apereceria nenhuma mensagem.

c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    o erro seria que a variavel mensagem numca foi definida fora do escopo filho, logo o escopo pai nao tem acesso a ela.

 */

 //exercicio 4)

 const age = Number(prompt('what is your age?'))

 if (age >= 18){
     console.log(`you are legible to drive!`)
 }else{
     console.log(`sorry, you cant drive yet. wait more ${18 - age} years`)
 }

 //exercicio 5)

 const schedule = prompt('qual turno voce estuda: M (matinal), V (vespetino) ou N (noturno) ?').toUpperCase()

 if (schedule[0] === 'M'){

     console.log('Bom dia!')

 }else if (schedule[0] === 'V'){

     console.log('Boa tarde!')

 }else if (schedule[0] === 'N'){

     console.log('Boa noite!')

 }else{

    console.log('turno nao encontrado!')

 }

 //exercicio 6)

 const schedule = prompt('qual turno voce estuda: M (matinal), V (vespetino) ou N (noturno) ?').toUpperCase()

switch (schedule[0]){

    case 'M':
        console.log('Bom dia!')
        break
    case 'V':
        console.log('Boa tarde!')
        break
    case 'N':
        console.log('Boa noite!')
        break
    default:
        console.log('turno nao encontrado!')
}

//exercicio 7)

const movieGenre = prompt('qual o genero do filme? ').toLowerCase()

const moviePrice = Number(prompt('quanto custa o ingresso? '))

if ((movieGenre === 'fantasia') && (moviePrice <= 15)){

    console.log('Bom filme')

}else{

    console.log('escolha um outro filme')

}

//desafio 1)

const movieGenre = prompt('qual o genero do filme? ').toLowerCase()

const moviePrice = Number(prompt('quanto custa o ingresso? '))

if ((movieGenre === 'fantasia') && (moviePrice <= 15)){

    const snack = prompt('qual snack voces vao comer?').toLowerCase()
    console.log(`Bom filme e com ${snack}`)

}else{

    console.log('escolha um outro filme')

}


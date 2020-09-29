//exercicio 1)
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
// a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
// b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
// c. true

console.log("e. ", typeof resultado)
//e. boolean

//execicio 2)

let array
console.log('a. ', array)
// a. undefined

array = null
console.log('b. ', array)
// b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// c. 11

let i = 0
console.log('d. ', array[i])
// d. 3

array[i+1] = 19
console.log('e. ', array)
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
//f. 9
*/
// exercicio 1)
/*
let age = prompt('How old are you?');

let bfAge= prompt('How old is your best friend?');

let older = Number(age) > Number(bfAge);

console.log(`You are older than your best friend: ${older}`);

console.log(`The diference between you guys is ${Number(age) - Number(bfAge)} years`)
*/

//exercicio 2)

//let even = prompt('type a even number: ');

//console.log(even%2);

//c. o resuldato da sobra de um numero par dividido por 2 sempre sera 0

// d. o resultado da sobra de um numero impar dividido por dois sempre sera 1

//exercicio 3)

let listaDeTarefas = [];

listaDeTarefas[0] = prompt('digite uma tarefa')
listaDeTarefas[1] = prompt('digite uma tarefa')
listaDeTarefas[2] = prompt('digite uma tarefa')

console.log(`0. ${listaDeTarefas[0]}\n 1. ${listaDeTarefas[1]}\n 2. ${listaDeTarefas[2]} `)

let remove = Number(prompt('qual tarefa vc ja realizou 0, 1 ou 2'));

listaDeTarefas.splice(remove, remove);

console.log(listaDeTarefas)

let user = prompt('usuario:')

let email = prompt('digite seu email: ')

console.log(` email ${email} cadastrado com sucesso! Seja bem-vindo ${user}`)

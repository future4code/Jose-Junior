/*
    exercicio 1:

    a = 10
    b = 10

    console.log(b) "considerando que o tipo de variavel nao esta declarado,
                    acredito que ocorrera um erro, desconsiderando isso, sera impresso no 
                    console o numero 10"

    b = 5
    console.log(a, b) "considerando que o tipo de variavel nao esta declarado,
                    acredito que ocorrera um erro, desconsiderando isso, sera impresso no 
                    console os numeros 10 e 5."

*/

/* 
    exercicio 2:

    a = 10
    b = 20
    c = a
    b = c
    a = b

    console.log(a, b, c) "considerando que o tipo de variavel nao esta declarado,
                            acredito que ocorrera um erro, desconsiderando isso, 
                                sera impresso no console 10, 10, 10"
*/
// a)
let name;

// b)
let age;

// c)
console.log(typeof(name, age))

// d)
/*
 o tipo impresso no console foi de  'undefined', acredito que como nao adicionamos
 nenhum valor na variavel criada o javascript nao tem como definir o seu tipo.
 */

// e)
 name = prompt('What is your name? ')
 age = prompt('how old are you? ')

 // f)
 /*  
  o tipo de ambas as variaveis foi dada como string, acredito que por padrao o javascript
  classifica as variaveis recebidas pelo prompt como strings mesmo sendo um numero
  como precaucao caso o usuario coloque um valor alphanumerico.
 */

// g)

console.log(`Ola ${name}, voce tem ${age} anos!`)


// exercicio 2)
let question1 = 'Where do you live?'
let question2 = 'what do you do?'
let question3 = 'who you live with?'
let question4 = 'what is you mother`s name?'
let question5 = 'how many siblings do you have?'

let answer1 = prompt(question1)
let answer2 = prompt(question2)
let answer3 = prompt(question3)
let answer4 = prompt(question4)
let answer5 = prompt(question5)

console.log(`1- ${question1}`)
console.log(`A: ${answer1}`)
console.log(`2- ${question2}`)
console.log(`A: ${answer2}`)
console.log(`3- ${question3}`)
console.log(`A: ${answer3}`)
console.log(`4- ${question4}`)
console.log(`A: ${answer4}`)
console.log(`5- ${question5}`)
console.log(`A: ${answer5}`)


//exercicio 3)
// a)

let myFavorityFoods = [ 'Sushi',
                        'Pizza',
                        'Lazanha',
                        'Pudim',
                        'Coxinha'];

// b)
console.log(myFavorityFoods)

//c)
console.log(`Those is my favoritys foods: \n ${myFavorityFoods[0]}\n ${myFavorityFoods[1]}\n ${myFavorityFoods[2]}\n ${myFavorityFoods[3]} \n ${myFavorityFoods[4]}`)

// d)
let newFood = prompt('Tell your favority food: ')

myFavorityFoods[3] = newFood

console.log(myFavorityFoods)


// exercicio 4)

let questions = ['Are you a Girl?',
                'Do you play soccer?',
                'Are wearing glasses?']
let answer = [false, true, true]

console.log(`${questions[0]} : ${answer[0]}\n ${questions[1]} : ${answer[1]}\n ${questions[2]} : ${answer[2]}`)

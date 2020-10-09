/*EXERCICIOS DE INTERPRETACAO
1-  declara uma funcao conversorDeMoeda que recebe como 
parametro o valor em dolar.
a funcao converte o valor recebio como parametro na quantidade
equivalente em Reais de acordo com o valor de cotacao
informado pelo usuario atraves do prompt criado dentro da funcao.

no console sera impresso o resultado da multiplicacao de 100 * o valor guardado
na variavel 'cotacao' 

2- declara uma funcao que calcula um valor apos um investimento,
a funcao recebe dois parametros: tipo de investimento e Valor
para cada tipo de investimento ha um valor diferente a ser multiplicado
pelo valor informado como parametro.
se o tipo de investimento for incorreto ou nao reconhecido dentro da funcao,
ela retorna um alert para o usuario.

no console sera impresso:
165
TIPO DE INVESTIMENTO INFORMADO INCORRETO!

3- declara 3 arrays, sendo uma com numeros aleatorios e duas vazias
a seguir eh criado um loop for of para o array de numeros
com o objetivo de separar numeros pares de impares atraves de condicoes if e else
e adicionando atraves do metodo push numeros pares ao array1
e numeros impares ao array2.
Infelizmente o codigo nao rodara depois da linha seguinte ao if, pois 
o codigo tenta mudar uma variavel constante adicionando algo nela.

no console sera impresso os erros cometidos.

4- declara um array de numeros e duas variaveis, numero1 guardando o valor infinity 
e outra numero2 0.
e criado um loop for of do array de numeros, em cada loop verifica-se
se o numero atual e menor que numero1 se sim numero1 recebe o valor do numero,
e se numero e maior que numero2 se sim numero2 receber o valor de numero.

no console sera impresso:
-10
1590
*/

//Exercicios de Logica de programacao
//1. Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.

const arrayList = [29, 19, 30, 32, 1,  43, 35]
function firstLoop(){

    for(let i = 0; i < arrayList.length; i++){
        console.log(arrayList[i])
    }
}

function secondLoop(){
    
    let i = 0

    while(i < arrayList.length){
        console.log(arrayList[i])
        i++
    }
}

function thirdLoop(){

    for(number of arrayList){
        console.log(number)
    }
}

// 2. Para este exercício considere as seguintes variáveis:

const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2 // true
const booleano4 = !booleano3  // false
/*
Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:

a) booleano1 && booleano2 && !booleano4
false

b) (booleano1 && booleano2) || !booleano3
false

c)  `(booleano2 || booleano3) && (booleano4 || booleano1)`
true

d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)
true

e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`
true
*/

/*
3. Você tem que escrever um código que, dado um número N,
 ele imprima (no console) os N primeiros números pares 
 (por exemplo, se N for 3, você deve imprimir 0, 2 e 4; se N for 5,
 deve imprimir 0, 2, 4, 6 e 8).  Um colega seu disse que já começou 
 esta tarefa, mas não conseguiu terminar. Dê uma olhada no código dele:

const quantidadeDeNumerosPares
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
}
Este código funciona? nao
Por quê? porque  nao foi adicionado nenhum valor a variavel quantidadeDeNumerosPares.
porque o valor de i nao eh incrmentado a cada loop, gerando um loop infinito.
Caso não funcione, corrija a implementação dele.
*/
function nPares(){
    const quantidadeDeNumerosPares = Number(prompt('digite um numero'))

    let i = 0

    while(i <= quantidadeDeNumerosPares-1) {
        console.log(i*2)
        i++
    }
}
/*
4. Vocês lembram de trigonometria? (Oh, não, trigonometria).
Relaxem. O exercício é simples, mas mexe com isso. 
Veja bem: quando nos ensinam triângulos (uma figura de três 
lados), nós aprendemos como classifica-los dependendo do 
tamanho de seus lados. Se um triângulo possuir os três lados iguais,
ele é chamado de "Equilátero". Se possuir, dois (e somente 2) lados iguais, diz-se que ele é "Isósceles".
Se os três lados tiverem medidas diferentes, ele é "Escaleno". Faça uma função que receba como parâmetro
os tamanhos dos três lados do triângulo: a, b, c  e
retorne se ele é equilátero, isósceles ou escaleno.
*/
function isTriangle(a, b, c){
    //primeiro verificar se eh possivel formar um triangulo
    // checkando se um dos lados sempre seja menor que a soma dos outros dois.
    if( a < b+c && b < c+a && c < b+a){

         if(a === b && b === c){
        return console.log('Equilatero')

        }else if((a === b && b !== c) || (a !== b & b === c) || (a === c && c !== b) ){
            
            return console.log('Isosceles')
        }else{

            console.log('Escaleno')
        }
    
    }else{
        console.log('Nao eh possivel formar um triagulo')
    }
   
}
/*
5. Faça um programa que, dados dois números,
i. indique qual é o maior,

ii. determine se eles são divisíveis um pelo outro 
(use o operador `%`) e

iii. determine a diferença entre eles 
(o resultado deve ser um número positivo sempre)
*/

function compareDoisNUmeros(a, b){
    let maior = 0
    let menor = 0

    if(a >= b){
        maior = a
        menor = b
    }else{
        maior = b
        menor = a
    }
    console.log(`o maior e: ${maior}`)
    
    if(maior % menor === 0){
        console.log(`${maior} e divisivel por ${menor}`)
    }else{
        console.log(`${maior} nao e divisivel por ${menor}`)
    }
    if(menor % maior === 0){
        console.log(`${menor} e divisivel por ${maior}`)
    }else{
        console.log(`${menor} nao e divisivel por ${maior}`)
    }
    console.log(`a diferenca entre eles e ${maior - menor}`)

}
/*
Escreva uma função que receba um array de números e
imprima na tela o segundo maior e o segundo menor número. 
Em seguida, invoque essa função. (Não é permitido usar funções de ordenação de vetores.) 
*/
function maiorESegundoMenor(array){
    let maior = array[0]
    let menor = array[0]
    let menores = [array[0]]
    for(number of array){
        if (number > maior){
            maior = number
        }
        if (number < menor){
            menor = number
            menores.push(menor)
        }
    }
    let menor2 = menores[0]
    for(number of menores){
        if(number < menor2 && number > menor){
            menor2 = number
        }
    }
    console.log(`o maior numero eh ${maior} e o segundo menor eh ${menor2}`)
}
maiorESegundoMenor(arrayList)

//Escreva uma função não nomeada que faça um alert("Hello Future4");
//Em seguida, invoque essa função.

const funcaoNaoNomeada = () =>{
    alert("Hello Future4");
}
funcaoNaoNomeada();
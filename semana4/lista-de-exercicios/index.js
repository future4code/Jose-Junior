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
//funcaoNaoNomeada();

//Exercícios de Objetos

//Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos.
//R: 'um objeto dentro do javascript eh uma variavel que pode conter 1 ou mais propriedades e cada proriedade tera uma chave e um valor
//e podemos utilizar quando queremos que nossa variavel seja mais especifica e contenha propriedades como no real world'


// Crie uma função chamada criaRetangulo que recebe como 
//parâmetros dois lados (lado1 e lado2) e retorna um objeto
// com 4 informações: largura (lado1), altura (lado2), 
//perímetro (2 * (lado1 + lado2)) e área (lado1 * lado2).

function criaRetangulo(lado1, lado2){
    const retangulo = {
        'largura': lado1,
        'altura': lado2,
        'perimetro': 2 * (lado1 + lado2),
        'area': (lado1 * lado2)
    }
    return retangulo
}

// Crie um objeto para representar seu filme favorito. 
//Ele deve ter as seguintes propriedades: título, ano, diretor 
//e atores/atrizes (lista com pelo menos 2 atores/atrizes). 
//Imprima na tela a seguinte string, baseada nos valores do objeto:
// Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e 
//estrelado por ATOR 1, ATRIZ 2, ATOR n. A lista de atores/atrizes deve ser 
//impressa inteira, independente do tamanho da lista.

function filmeFavorito(){
    const filme = {
        'titulo':'Back to the Future',
        'ano': 1985,
        'diretor': 'Robert Zemeckis',
        'atores': ['Michael J. Fox', ' Christopher Lloyd']
    }
    console.log(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`)
}

// 4.
// Crie um objeto que represente uma pessoa qualquer, com as propriedades de nome, idade, email e endereco. Crie uma função chamada anonimizarPessoa, que deverá retornar um novo objeto com as mesmas propriedades, mas com a string ANÔNIMO no lugar do nome. O objeto original deve ser mantido com o nome da pessoa.
const Junior = {
    'nome': 'Junior',
    'idade': 29,
    'email': 'foo@gmail.com',
    'endereco': 'av. bar numero 0'
}

const anonimizarPessoa = (objeto)=>{
    const anonimo = {
        ...objeto,
        'nome': 'ANONIMO'
    }
    return anonimo
}

//EXERCICIOS DE FUNCOES DE ARRAYS

const pessoas1 = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
//a) Faça uma função que retorne um novo array 
//só com os adultos (pessoas com idade igual ou superior a 20)

function maioresQue20 (array){
    const newArray = array.filter((pessoa)=>{
        return pessoa.idade >=20
    })
    return newArray
}

//Faça uma função que retorne um novo array
//só com as crianças/adolescentes (pessoas com idade inferior a 20)

function menoresQue20 (array){
    const newArray = array.filter((pessoa)=>{
        return pessoa.idade < 20
    })
    return newArray
}

const arrayNumeros = [1, 2, 3, 4, 5, 6]

//a) Escreva uma função que retorne um array com as entradas multiplicadas por 2. Isto é [2, 4, 6, 8, 10, 12].

function multiplyBy2(array){
    const newArray = array.map((numero)=>{
        return numero * 2
    })
    return newArray
}
console.log(multiplyBy2(arrayNumeros))

//b) Escreva uma função que **retorne** um array com as entradas multiplicadas por 3 e como strings. Isto é: `["3", "6", "9", "15", "18"]`

function multiplyBy3(array){
    const newArray = array.map((numero)=>{
        return (numero * 3).toString()
    })
    return newArray
}
console.log(multiplyBy3(arrayNumeros))

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

//a) Escreva uma função que receba este array e devolva outro array somente com as pessoas que tem permissão de entrar no brinquedo

function pessoasPermitidas(array){
    const permitidas = array.filter((pessoas)=>{
        return pessoas.idade > 14 && pessoas.idade < 60 && pessoas.altura >= 1.5
    })
    return permitidas
}

//b) Escreva uma função que receba este array e devolva outro array somente com as pessoas que não podem entrar no brinquedo.

function pessoasNaoPermitidas(array){
    const naoPermitidas = array.filter((pessoas)=>{
        return pessoas.altura < 1.5
    })
    return naoPermitidas

}

// 4. Você foi contratado por um escritório médico para gerar e-mails automáticos para seus clientes, lembrando-os de sua consulta marcada; ou avisa-los que foi cancelada. Considere, então, essas consultas:

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

function emails(array){
    array.forEach((element) => {
        if(!element.cancelada){
            if(element.genero === 'masculino'){
                console.log(`Olá, Sr. ${ element.nome}. Estamos enviando esta mensagem para
                lembrá-lo da sua consulta no dia ${ element.dataDaConsulta}. Por favor, acuse
                o recebimento deste e-mail.`)
            }else{
                console.log(`Olá, Sra. ${ element.nome}. Estamos enviando esta mensagem para
                lembrá-la da sua consulta no dia ${ element.dataDaConsulta}. Por favor, acuse
                o recebimento deste e-mail.`) 
            }
        }else{
            if(element.genero === 'masculino'){
                console.log(`Olá, Sr. ${ element.nome }. Infelizmente, sua consulta marcada
                para o dia ${ element.dataDaConsulta } foi cancelada. Se quiser, pode entrar em 
                contato conosco para remarcá-la`)
            }else{
                console.log(`Olá, Sra. ${ element.nome }. Infelizmente, sua consulta marcada
                para o dia ${ element.dataDaConsulta } foi cancelada. Se quiser, pode entrar em 
                contato conosco para remarcá-la`)
            }
        }
    });
}

//console.log(emails(consultas))

//5. Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas as compras realizadas pelo cliente. Veja abaixo:
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizarSaldo(array){
    array.forEach((cliente)=>{
        const gastos = cliente.compras
        let valorAnterior = 0
        const gastoTotal = gastos.reduce((previews, currently)=>{
            return previews + currently
        }, valorAnterior)

        cliente.saldoTotal -= gastoTotal
    })
    console.log(array)
}

// atualizarSaldo(contas)

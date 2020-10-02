/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
function comprarCarta() {
   // Cria array de cartas
   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
 
   // Cria array de naipes
   const naipes = ["♦️", "♥️", "♣️", "♠️"]
 
   // Sorteia uma carta
   const numero = cartas[Math.floor(Math.random() * 13)]
 
   // Sorteia um naipe
   const naipe = naipes[Math.floor(Math.random() * 4)]
 
   let valor
 
   // Verifica se é uma das letras e coloca o valor correspondente na variável valor
   if (numero === "A") {
     valor = 11
   } else if (numero === "J" || numero === "Q" || numero === "K") {
     valor = 10
   } else { // Se nao for uma das letras, só converte a string para número
     valor = Number(numero)
   }
 
   // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
   const carta = {
     texto: numero + naipe,
     valor: valor
   }
 
   return carta
 }


/*
 alert('Vamos Jogar uma rodada de blackjack (21)?')

 const pc = [comprarCarta(), comprarCarta()]
 const player = [comprarCarta(), comprarCarta()]

let pcSum = 0 
let playerSum = 0

for(carta of pc){
   pcSum += carta.valor
}
for(carta of player){
   playerSum += carta.valor
}

alert(`player cards: ${player[0].texto}, ${player[1].texto}. total: ${playerSum}
computer cards: ${pc[0].texto}, ${pc[1].texto}. total: ${pcSum}`)

console.log(`player cards: ${player[0].texto}, ${player[1].texto}. total: ${playerSum}
computer cards: ${pc[0].texto}, ${pc[1].texto}. total: ${pcSum}`)

if(pcSum > playerSum && pcSum <= 21 || playerSum > 21){

   alert('Computer won!')
   console.log('Computer won!')

}else if(playerSum > pcSum && playerSum <= 21 || pcSum > 21){

   alert('You won!')
   console.log('You won!')

}else{

   alert('its a tie.')
   console.log('its a tie')

} */
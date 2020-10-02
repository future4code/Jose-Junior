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



 const initial = confirm('Vamos Jogar uma rodada de blackjack (21)?')

if(initial === true){

   let pc = [comprarCarta(), comprarCarta()]
   let player = [comprarCarta(), comprarCarta()]

   // garantindo que as cartas nao serao dois Ases
   while(pc[0].valor === 11 && pc[1].valor === 11){
      pc = [comprarCarta(), comprarCarta()]
   }
   while(player[0].valor === 11 && player[1].valor === 11){
      player = [comprarCarta(), comprarCarta()]
   }

   let pcSum = 0 
   let playerSum = 0
   let pcCards = ''
   let playerCards = ''

   

   
   for(carta of player){
      playerSum += carta.valor
      playerCards += ' '+ carta.texto
   }
  
   let cards = true

   while (cards && playerSum < 21){
         cards = confirm(`player cards ${playerCards}. total: ${playerSum}
   the revealed computer card is : ${pc[0].texto} \n Do you wanna take another card`)
 
   if(!cards){
      break
   }else{
      player.push(comprarCarta())
      playerSum = 0
      playerCards = ''
   }
   for(carta of player){
      playerSum += carta.valor
      playerCards += ' '+ carta.texto
   }

   }
   for(carta of pc){
      pcSum += carta.valor
      pcCards += ' '+ carta.texto
   }
   while(pcSum  <= playerSum){
      pc.push(comprarCarta())
      pcCards = ''
      pcSum = 0
      for(carta of pc){
         pcSum += carta.valor
         pcCards += ' '+ carta.texto
      }

   }
  


   if(pcSum > playerSum && pcSum <= 21){

      alert(`Computer won!\ncards: ${pcCards} total: ${pcSum}\n yours card: ${playerCards},   total: ${playerSum}`)
      console.log('Computer won!')

   }else if(playerSum > pcSum && playerSum <= 21){

      alert(`You won:\nyours card: ${playerCards},  total: ${playerSum}\n Computer cards ${pcCards}, total: ${pcSum}`)
      console.log('You won!')
   }else if(playerSum > 21 && pcSum > 21){
      
      alert(`no winner.\nyours card: ${playerCards}, total: ${playerSum}\n Computer cards ${pcCards}, total: ${pcSum}`)


   }else{

      alert(`its a tie.\nyours card: ${playerCards}, total: ${playerSum}\n Computer cards ${pcCards}, total: ${pcSum}`)
      console.log('its a tie')
   }


}else{
   console.log('end game')
}

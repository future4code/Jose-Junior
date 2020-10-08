let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'
    divDespesas.innerHTML += `<div class='cada-despesa'>indice
    <h2>Valor</h2>
    <h3>Tipo</h3>
    <h3>descricao</h3>
    </div>`

    // AQUI VEM A IMPLEMENTAÇÃO
    despesas.forEach((despesa, idx) => {
        const elementDiv = document.createElement('div')
        elementDiv.innerHTML = `<div class='cada-despesa'>${idx+1 }<h2>R$ ${despesa.valor}</h2><h2>${despesa.tipo}</h2><h2>${despesa.descricao}</h2></div>`
        divDespesas.append(elementDiv)
    });
    divDespesas.innerHTML += `    <button onclick='despesaOrganizada()'>Ordenar Valor</button>
    <button onclick='imprimirDespesas(arrDespesas)'>Ordenar data</button>`
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO
    /*arrDespesas.forEach((despesa)=>{
      gastoTotal += Number(despesa.valor)
    })*/

    //desafio
    gastoTotal = arrDespesas.reduce((previwes, currentValue )=>{
        return previwes + currentValue.valor
    }, gastoTotal)
    const alimentacao = arrDespesas.filter((despesa)=>{
        return despesa.tipo === 'alimentação'
    }).forEach((despesa)=>{
        gastoAlimentacao += Number(despesa.valor)
    })

    const utilidades = arrDespesas.filter((despesa)=>{
        return despesa.tipo === 'utilidades'
    }).forEach((despesa)=>{
        gastoUtilidades += Number(despesa.valor)
    })

    const viagem = arrDespesas.filter((despesa)=>{
        return despesa.tipo === 'viagem'
    }).forEach((despesa)=>{
        gastoViagem += Number(despesa.valor)
    })
    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)

    if(valorMin >= 0 && validarTipo(tipoFiltro) && valorMax > 0){
         
        // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO
        let despesasFiltradas = arrDespesas.filter((despesa)=>{
        if(tipoFiltro === 'todos'){
            return despesa.valor > 0
        }
        return despesa.tipo === tipoFiltro && despesa.valor >= valorMin && despesa.valor <= valorMax
    })
        imprimirDespesas(despesasFiltradas)
    }else{
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
    
}

function despesaOrganizada(){
    const newArray = arrDespesas.filter((despesa)=>{
        return despesa.valor > 0
    }).sort((a, b)=>{
        return a.valor - b.valor
    }).reverse()
    
    limparFiltros()
    imprimirDespesas(newArray)
    imprimirExtrato()

}

// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}
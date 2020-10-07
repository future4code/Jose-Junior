function selectDay() {
    
    const option = document.querySelector('#dias-semana')
    const optionHour = document.querySelector('#horas-dia')
    const valueHour = optionHour.value
    const value = option.value
    makeTask(value, valueHour)
   

}

let i = 0

function makeTask(value, valueHour){


    const daySelected = document.querySelector(`#${value}`)
    const taskInput = document.querySelector('#tarefa')
    const taskValue = taskInput.value

    if (taskValue === ''){
        alert('Tarefa em branco!')
        taskInput.value = ''
        return 0
    }else{

        i ++
        const ul = document.querySelector(`.${value}`)

        if(ul){

            ul.innerHTML += `<li onclick="taskDone('${taskValue}')" id='${taskValue}'>${taskValue}</li>`
            taskInput.value = ''
        
        }else{

            const elementUl = createUnorderedList(`${value}`)
            elementUl.innerHTML += `<li onclick="taskDone('${taskValue}')" id='${taskValue}'>${taskValue}</li>`
            daySelected.append(elementUl)
        }
        
    //cleaning the value after done.
    taskInput.value = ''

    }
    
}

function createUnorderedList(classe){
    const element = document.createElement('ul')
    element.className = classe
    return element
}

function taskDone(id){
    const li = document.querySelector('#'+id)
    
    if(li.style.textDecoration === 'line-through'){
        li.style.textDecoration = 'none'
    }else{
        li.style.textDecoration = 'line-through'
    }
    

}







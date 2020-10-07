let allPost = []

function formObject(){
    const title = document.querySelector('#titulo-post')
    const autor = document.querySelector('#autor-post')
    const image = document.querySelector('#image-post')
    if(image.value.includes('https://')){
        const content = document.querySelector('#conteudo-post')

        const post = {
            title: title.value,
            autor: autor.value,
            image: image.value,
            content: content.value
        }
        //cleaning the inputs
        title.value = ''
        autor.value = ''
        content.value = ''
        image.value = ''


        // calling the function to actually create the post
        allPost.push(post)
        postingContent(allPost)

    }else{
        return alert('insira um link valido e que comece com http://')
    }
    
  

}

function postingContent(allPost){
      
        const formulario = document.querySelector('#formulario')
        formulario.style.display = 'none'
        const section = document.querySelector('#post')
        section.style.display = 'block'
        const buttonBack = document.querySelector('#back')
        buttonBack.style.display = 'block'
        section.innerHTML = ''
       

        for(post of allPost){ 
            const divElement = document.createElement('div')
            divElement.className = 'content-post'

        
            divElement.innerHTML += `<div class='title'><h2>${post.title}</h2></div>`
            divElement.innerHTML += `<div class='autor'><h4>By: ${post.autor}</h4></div>`
            divElement.innerHTML += `<div class='image-div'> <img src='${post.image}'> </div>`
            divElement.innerHTML += `<div class='content'><p>${post.content}</p></div>`
            
            section.append(divElement)
        }
         
}

function comeBack(){
    const formulario = document.querySelector('#formulario')
    formulario.style.display = 'flex'
    const section = document.querySelector('#post')
    section.style.display = 'none'
    const buttonBack = document.querySelector('#back')
        buttonBack.style.display = 'none'
}

function goPost(){
    const formulario = document.querySelector('#formulario')
    formulario.style.display = 'none'
    const section = document.querySelector('#post')
    section.style.display = 'block'
    const buttonBack = document.querySelector('#back')
    buttonBack.style.display = 'block'
   
}


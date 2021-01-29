import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { create,
         login, 
         signUp, 
         infoUser, 
         infoUserById } from './endponts/user' 
import { createTable,
         createRecipe,
         getRecipeById, 
         getRecipes} from './endponts/recipes'


const app: Express = express()
app.use(express.json())
app.use(cors())
//users
app.get('/user/create', create)
app.post('/user/login', login)
app.post('/user/signup', signUp)
app.get('/user', infoUser)
app.get('/user/:id', infoUserById)

// recipes
app.get('/recipes/create', createTable)
app.post('/recipes', createRecipe)
app.get('/recipes/all', getRecipes)
app.get('/recipes/:id', getRecipeById)


const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    }else{
        console.log(`Error in running Server`)
    }
})



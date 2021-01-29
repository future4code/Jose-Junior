import { connection } from '../../data/connection'
import { Response, Request } from 'express'
import { getTokenData } from '../../middleware/token'


export async function getRecipes(req:Request, res: Response) {
    try {
       const token = req.headers.authorization
       
        if(!token){
            throw new Error('not authorized')
        }

        const auth = getTokenData(token)

        const result = await connection('receitas')
    
        result.forEach(recipe=>{
            const [day, month, year] = new Date(recipe.created_date).toLocaleDateString('pt-BR').split('/')
            const date = `${day}/${month}/${year}`
            recipe.created_date = date
            
        })
     

        res.send({result})
    } catch (error) {
        res.status(401).send({message: error.sqlMessage||error.message})
}
}
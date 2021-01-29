import { connection } from '../../data/connection'
import { Response, Request } from 'express'
import { getTokenData } from '../../middleware/token'
import { generate } from '../../middleware/idGenerate'

export async function createRecipe(req:Request, res: Response) {
    try {
        const token = req.headers.authorization
       const { title,
               description,
             } = req.body
        if(!title || !description){
            throw new Error('please send a complete body request')
        }
        if(!token){
            throw new Error('not authorized')
        }
        const auth = await getTokenData(token)
        const [month, day, year] = new Date().toLocaleDateString('pt-BR').split('/')
        const created_date = `${year}-${month}-${day}`
    
        const id = await generate()      
        await connection('receitas')
        .insert({id, 
                title, 
                description, 
                created_date, 
                user_id: auth.id
            })

        res.send('recipe created')
    } catch (error) {
        res.status(400).send({message: error.sqlMessage||error.message})
}
}

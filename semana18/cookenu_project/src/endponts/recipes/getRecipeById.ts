import { connection } from '../../data/connection'
import { Response, Request } from 'express'
import { getTokenData } from '../../middleware/token'


export async function getRecipeById(req:Request, res: Response) {
    try {
        const id = req.params.id
       const token = req.headers.authorization
       
        if(!token){
            throw new Error('not authorized')
        }
        if(!id){
            throw new Error('missing paramter id')
        }

        const auth = getTokenData(token)

        const result = await connection('receitas')
        .join('usuario', 'receitas.user_id', 'usuario.id')
        .select('receitas.title', 'receitas.description','receitas.created_date','usuario.name')
        .where('receitas.id', '=', id)

        const receita = result[0]
        const [month, day, year] = new Date(receita.created_date).toLocaleDateString('pt-BR').split('/')
        const date = `${day}/${month}/${year}`

        res.send({id:receita.id, title: receita.title, description: receita.description, created_date: date, creatorName: receita.name})
    } catch (error) {
        res.status(401).send({message: error.sqlMessage||error.message})
}
}
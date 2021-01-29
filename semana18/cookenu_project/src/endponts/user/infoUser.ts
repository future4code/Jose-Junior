import { connection } from '../../data/connection'
import { Response, Request } from 'express'
import { getTokenData } from '../../middleware/token'

export async function infoUser(req:Request, res: Response) {
    try {
        const token = req.headers.authorization
      
        if(!token){
            throw new Error('not authorized')
        }

        const auth = getTokenData(token)
        const result = await connection('usuario')
        .where({id: auth.id})

        const user = result[0]
       
        res.send({id: user.id, name: user.name, email: user.email})
    } catch (error) {
        res.status(401).send({message: error.sqlMessage||error.message})
}
}
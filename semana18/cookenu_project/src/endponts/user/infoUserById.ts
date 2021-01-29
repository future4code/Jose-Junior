import { connection } from '../../data/connection'
import { Response, Request } from 'express'
import { compareHash } from '../../middleware/hash'
import { getTokenData } from '../../middleware/token'


export async function infoUserById(req:Request, res: Response) {
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

        const result = await connection('usuario')
        .where({id: id})
        
        const user = result[0]
       
        res.send({id: user.id, name: user.name, email: user.email})
    } catch (error) {
        res.status(401).send({message: error.sqlMessage||error.message})
}
}
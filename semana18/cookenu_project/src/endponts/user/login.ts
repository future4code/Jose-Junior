import { connection } from '../../data/connection'
import { Response, Request } from 'express'
import { compareHash } from '../../middleware/hash'
import { generateToken } from '../../middleware/token'


export async function login(req:Request, res: Response) {
    try {
       const { email,
               password,
             } = req.body
        if(!email || !password ){
            throw new Error('please send a complete body request')
        }
        const user = await connection('usuario')
        .where({email})

        const hashPassword = user[0].password

        const s = await compareHash(password, hashPassword)

        if(!s){
            throw new Error('password incorrect')
        }    
        
        const newToken = await generateToken(user[0].id)

        res.send({token: newToken})
    } catch (error) {
        res.status(400).send({message: error.sqlMessage||error.message})
}
}
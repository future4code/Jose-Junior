import { connection } from '../../data/connection'
import { Response, Request } from 'express'
import { hash } from '../../middleware/hash'
import { generateToken } from '../../middleware/token'
import { generate } from '../../middleware/idGenerate'
import { authData } from '../../middleware/token'

export async function signUp(req:Request, res: Response) {
    try {
       const { name,
               email,
               password,
             } = req.body
        if(!name || !email || !password){
            throw new Error('please send a complete body request')
        }
        
        const hashPassword = await hash(password)
        const id = await generate()      
        
        const token = await generateToken(id)
        await connection('usuario')
        .insert({id, 
                name, 
                email, 
                password:hashPassword, 
            })

        res.send({token})
    } catch (error) {
        res.status(400).send({message: error.sqlMessage||error.message})
}
}

import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export type authData = {
    id:string
}

export function generateToken (id:string):string{
    const token: string = jwt.sign(
        {id: id},
        process.env.JWT_KEY as string,
        { expiresIn : '7d'}
    )
        return token
}

export function getTokenData (token: string): authData{
    try {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string,
        ) as authData

        return payload
    } catch (error) {
        throw new Error(error.message)
        
    }
}
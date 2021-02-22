import { connection } from '../../data/connection'
import { Response, Request } from 'express'

export async function create(req:Request, res: Response) {
    try {
        await connection.schema.createTable('usuario', table =>{
            table.string('id').primary().notNullable()
            table.string('name').notNullable()
            table.string('email').notNullable().unique()
            table.string('password').notNullable()
        })
        res.send('table created!')
    } catch (error) {
        res.status(400).send({message: error.sqlMessage||error.message})
    }
}
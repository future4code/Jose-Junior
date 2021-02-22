import { connection } from '../../data/connection'
import { Response, Request } from 'express'

export async function createTable(req:Request, res: Response) {
    try {
        await connection.schema.createTable('receitas', table =>{
            table.string('id').primary().notNullable()
            table.string('title').notNullable()
            table.string('description').notNullable()
            table.date('created_date').notNullable()
            table.string('user_id').unsigned
            table.foreign('user_id').references('usuario.id')
        })
        res.send('table created!')
    } catch (error) {
        res.status(400).send({message: error.sqlMessage||error.message})
    }
}
import express, { Router, Request, Response } from "express";
import knex from "knex"
import {connection} from '../index'



const router: Router = express.Router()

router.get('/table', async (req: Request, res: Response)=>{
    try {
       await connection.schema.createTable('Users', (user)=>{
          user.increments('id')
          user.string('name').notNullable()
          user.string('nickname').notNullable()
          user.string('email').notNullable().unique()
         
       })
       res.status(200).send('table created!')
    } catch (err) {
       throw new Error('something went wrong!')
    }
 })

 router.put('/', async (req: Request, res: Response)=>{
    let errorResponse: number = 400
   try {
      const {name, nickname, email} = req.body
      if(!name || !nickname || !email){
         throw new Error('Please send a complete form!')
      }
      await connection
      .insert({name, nickname, email})
      .into('Users')

      res.status(200).send('User added')

   } catch (error) {
      res.status(errorResponse).send(error.message || error.sqlmessage)
   }
 })

 router.get('/all', async (req: Request, res: Response)=>{
   let errorResponse: number = 400
    try {
      const result = await connection
         .select('id', 'nickname')
         .from('Users')
      
      res.status(200).send({users: result})
    } catch (error) {
       res.status(errorResponse).send(error.sqlmessage || error.message)
    }
 })

 router.get('/:id', async (req: Request, res: Response)=>{
   let errorResponse: number = 400
    try {
       const id: string = req.params.id as string
       if(Number(id) === NaN){
          throw new Error('Please send a number as Id') 
      }
      const result = await connection
         .select('id', 'nickname')
         .from('Users')
         .where('id', '=', `${id}`)
      if(!result.length){
         errorResponse = 404
         throw new Error('user not found or not existe') 
      }
      res.status(200).send(result)
    } catch (error) {
       res.status(errorResponse).send(error.sqlmessage || error.message)
    }
 })

 router.put('/edit/:id', async (req: Request, res: Response)=>{
   let errorResponse: number = 400
    try {
       const id: string = req.params.id as string
       const {name, nickname} = req.body
       if(Number(id) === NaN){
          throw new Error('Please send a number as Id') 
      }
      if(!name || !nickname){
         throw new Error('Please send a number as Id') 
      }
      await connection('Users')
         .where({id: id})
         .update({name: name, nickname: nickname})
      
      res.status(200).send('user updated')
    } catch (error) {
       res.status(errorResponse).send(error.sqlmessage || error.message)
    }
 })

 
 
 export default router
import express, { Router, Request, Response } from "express";
import {user, task, STATUS} from '../types/index'
import {connection} from '../index'




const router: Router = express.Router()

router.get('/table', async (req: Request, res: Response)=>{
    try {
       await connection.schema.createTable('Tasks', (task)=>{
          task.increments()
          task.string('title').notNullable()
          task.string('description').notNullable()
          task.string('status').defaultTo('to_do')
          task.date('limitDate').notNullable()
          task.integer('creatorId').unsigned()
          task.foreign('creatorId')
          .references('Users.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
          task.string('creatorNickname')
         

       })
       res.status(200).send('table created!')
    } catch (err) {
       throw new Error('something went wrong!')
    }
 })

 router.post('/', async (req: Request, res: Response)=>{
    let errorResponse: number = 400
   try {
      const {title, description, limit_date, creatorId} = req.body
      if(!title || !description || !limit_date || ! creatorId){
         throw new Error('Please send a complete form!')
      }
      if(Number(creatorId)=== NaN){
        throw new Error('Please send a number as id')
      }
      const result: user[] = await connection
      .select('*')
      .from('Users')
      .where({id: creatorId})

      if(!result.length){
        throw new Error('Creator Id is not recognized')
      }

      const [day, month, year] = limit_date.split('/')
      const limitDate: string = `${year}-${month}-${day}` 
      const creatorNickname = result[0].nickname
      await connection
      .insert({title, description, limitDate, creatorId, creatorNickname })
      .into('Tasks')

      res.status(200).send('Task added')

   } catch (error) {
      res.status(errorResponse).send(error.message || error.sqlmessage)
   }
 })

 router.get('/', async (req: Request, res: Response)=>{
    try {
        const creatorId = req.query.creatorId
        if(!creatorId){
            throw new Error('must send a creator id as query param')
        }
        const result: task[] = await connection
        .select('*')
        .from('Tasks').join('Users', (table)=>{
           table.on('Users.id', '=', "Tasks.creatorId")
        }).where({creatorid: creatorId})
        
        if(!result.length){
            throw new Error('None tasks found or id creator is not recognized')
          }

        result.forEach(task=>{
            task.limitDate = new Date(result[0].limitDate)
            .toLocaleDateString("sq-AL",{ 
                year: 'numeric', 
                day: '2-digit', 
                month: '2-digit' 
              })
        })

        res.status(200).send(result)
        
    } catch (error) {
        res.status(400).send(error.sqlmessage || error.message)
    }
 })


 router.get('/:id', async (req: Request, res: Response)=>{
   let errorResponse: number = 400
    try {
       const id: string = req.params.id as string
       if(Number(id) === NaN){
          throw new Error('Please send a number as Id') 
      }
      const result: task[] = await connection
         .select('*')
         .from('Tasks')
         .where({id: id})
      if(!result.length){
         errorResponse = 404
         throw new Error('task not found or not existe') 
      }
      result[0].limitDate = new Date(result[0].limitDate)
      .toLocaleDateString("sq-AL",{ 
          year: 'numeric', 
          day: '2-digit', 
          month: '2-digit' 
        })

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

 router.put('/status/edit/:id', async (req: Request, res: Response)=>{
   let errorResponse: number = 400
    try {
       const id: string = req.params.id as string
       const status = req.body.status
       if(Number(id) === NaN){
          throw new Error('Please send a number as Id') 
      }
      if(!status){
         throw new Error('Please send a correct status \n ex: doing, done or to_do ') 
      }
      
         await connection('Tasks')
           .where({id: id})
           .update({status: status.toLowerCase()})
   
      res.status(200).send('status updated')
      
    } catch (error) {
       res.status(errorResponse).send(error.sqlmessage || error.message)
    }
 })
 

 export default router
import { connection } from '../../Connector'
import express, { Router, Request, Response } from 'express'
import { select_aula48 } from './SQLquerys'
import { Types, orderBy }  from '../../types/types'


const router: Router = express.Router()

router.get('/', async(req: Request, res: Response): Promise<void> =>{
    try {

        const search = req.query.name as string

        if(!search){
            res.statusCode = 400
            throw new Error('must send a name as search parameter')
        }

       const users = await select_aula48.where('name', 'LIKE', `%${search}%`)

       if(!users.length){
           res.statusCode = 404
           throw new Error('no search results')
       }

       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 })

 router.get('/type/:type', async(req: Request, res: Response): Promise<void> =>{
    try {

        const type = req.params.type

        if(!type){
            res.statusCode = 400
            throw new Error('must send a type')
        }

        if(!(type.toLocaleUpperCase() in Types)){
            res.statusCode = 400
            throw new Error('types allowed : Teacher, Operations, CX')
        }

       const users = await select_aula48.where('type', '=', `${type}`)

       if(!users.length){
           res.statusCode = 404
           throw new Error('no search results')
       }

       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 })

 router.get('/order', async(req: Request, res: Response): Promise<void> =>{
    try {

        const { by, type = 'ASC' } = req.query as orderBy

        if(!by || !['name', 'type'].includes(by)){
            res.statusCode = 400
            throw new Error('must send how to order ex: by name or by type')
        }

        if( !['ASC', 'DESC'].includes(type)){
            res.statusCode = 400
            throw new Error('must send how to order ex: ASC or DESC')
        }

       const users = await select_aula48.orderBy(by, type)

       if(!users.length){
           res.statusCode = 404
           throw new Error('no search results')
       }

       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 })


router.get('/all', async(req: Request, res: Response): Promise<void> =>{
    try {

       const users = await select_aula48

       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 })

 router.get('/page', async(req: Request, res: Response): Promise<void> =>{
    try {

       const users = await select_aula48.limit(5)

       res.status(200).send(users)
       
    } catch (error) {
      
       res.send(error.message || error.sqlMessage)
    }
 })

 router.get('/pagination', async(req: Request, res: Response): Promise<void> =>{
    try {
    
        const { page = '1' } = req.query 
        const { by = 'name', type = 'ASC'} = req.query as orderBy

        if(Number(page) === NaN){
            throw new Error('must send a number as page')
        }
        const initPage : number = Number(page)
        const showLimitPage: number = 5
        const offSetpage: number = showLimitPage * (initPage - 1)

       const users = await select_aula48.limit(showLimitPage).offset(offSetpage).orderBy(by, type)

       res.status(200).send(users)
       
    } catch (error) {
       
       res.send(error.message || error.sqlMessage)
    }
 })

 

export default router
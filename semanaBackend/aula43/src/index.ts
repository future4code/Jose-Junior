//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';
import {users} from './data'
import {Types, user} from './types'

//extra: importando configuração de rede do node
import { AddressInfo } from "net"; 
import { isTryStatement } from 'typescript';

//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());


app.get('/user/all', (req: Request, res: Response)=>{
    res.status(200).send(users)
})

app.get('/user/all/:type', (req: Request, res: Response)=>{
    try {
        const typeParam: string = req.params.type;
        let type: Types;
        for(let tp in Types ){

            switch(typeParam.toUpperCase()){
                case 'ADMIN':
                    type = Types.ADMIN
                    break
                case 'NORMAL':
                    type = Types.NORMAL
                    break
                default:
                    throw new Error('Type do not mach any type.')
            }
            
            const results = users.filter(user => user.type === type)

            res.status(200).send(results)

        }


    } catch (error) {
        res.status(422).send(error.message)
    }
})

app.get('/user/search', (req: Request, res: Response)=>{
    let errorStatus:number = 400;
    try {
        if(!req.query.name){
            errorStatus = 422
            throw new Error('No param name was sent, please send a name param')
        }
        const name: string= req.query.name as string
        const results: user[] = users.filter(user=> user.name.toUpperCase().includes(name.toUpperCase()))
        if(!results.length){
            errorStatus = 404
            throw new Error(`We could not find any user that matches ${name}`)
        }
        res.status(200).send(results)
    } catch (error) {
        res.status(errorStatus).send(error.message)
    }
})

app.post('/user/newUser',  (req: Request, res: Response)=>{
    let errorStatus:number = 400;
    try {
        const name: string= req.body.name
        const email: string= req.body.email
        const age: string= req.body.name  

        if(!name || !email || !age){
          
            throw new Error('please send a complete body')
        }

    
    } catch (error) {

        res.status(errorStatus).send(error.message)
        
    }
    

})




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  

import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries, country, namesOnly } from './countries'

const app: Express = express()

app.use(express.json())
app.use(cors())


app.get("/countries/all", (req: Request, res: Response) => {
    const countriesNames: namesOnly[] = countries.map(country=>{
        const countryName: namesOnly = {
            id: country.id,
            name: country.name
        }
        return countryName
    })

   res.status(200).send(countriesNames)
})


app.get("/countries/search", (req: Request, res: Response)=>{
    const name: string = req.query.name as string;
    const capital: string = req.query.capital as string;
    const continent: string = req.query.continent as string;
    
    const results: country[] = countries.filter(country=>{
        if(name){
            return country.name.includes(name) 
        }
        if(capital){
            return country.capital.includes(capital)
        }
        if (continent){
            return country.continent.includes(continent)
        }

    })
    try {
        if(!results.length){
            throw new Error('No Results Found')
        }
        res.status(200).send(results)
    } catch (err) {

        res.status(404).send(err.message)
        
    }
    
    
})

app.put("/countries/edit/:id", (req: Request, res: Response)=>{
    const name: string = req.body.name
    const capital: string = req.body.capital
    const result: country[] = countries.filter(country=> country.id === Number(req.params.id))
    try {
        if(!result.length){
            throw new Error('Bad request')
        }
        countries.forEach(country=>{
            if(country.id === result[0].id){
                country.name = name
                country.capital = capital
            }
        })
        res.status(200).send('success')
    } catch (err) {

        res.status(500).send(err.message)
        
    }

})

app.get("/countries/:id", (req: Request, res: Response)=>{
    const idCountry = req.params.id
    const country = countries.filter(cntr => cntr.id === Number(idCountry))
    try {
        if(!country.length){
            throw new Error('Country not Found')
        }

        res.status(200).send(country)
    } catch (err) {
        res.status(404).send(err.message)
    }
})






app.listen(3003, () => {
   console.log("Servidor rodando na porta 3003")
})
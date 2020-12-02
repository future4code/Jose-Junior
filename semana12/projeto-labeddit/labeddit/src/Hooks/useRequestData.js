
import { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { ContextGlobal } from '../Global/Context/context';



export default function useRequestData(url, initState){
   
    const [data, setData] = useState(initState)
    const {states} = useContext(ContextGlobal)

    useEffect(()=>{

        axios.get(url, {headers: {auth : states.token}}).then(response=>{
            setData(response.data)
            
        }).catch(error=>{
            console.log(error.message)
        })
    }, [url])

    return data
}
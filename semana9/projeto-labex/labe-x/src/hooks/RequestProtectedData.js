import React, { useState, useEffect } from 'react';
import axios from 'axios'



export default function useRequestProtectedData(url, token ,initState){
   
    const [data, setData] = useState(initState)

    useEffect(()=>{

        axios.get(url, {headers: {auth :token}}).then(response=>{
            setData(response.data)
            
        }).catch(error=>{
            console.log(error.message)
        })
    }, [url, token])

    return data
}
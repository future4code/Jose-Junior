import React, { useState, useEffect } from 'react';
import axios from 'axios'



export default function useRequestData(url, initState){
   
    const [data, setData] = useState(initState)

    useEffect(()=>{

        axios.get(url, {headers: {auth :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDM4Njh9.mmOrfGKlXpE3pIDUZfS3xV5ZwttOI2Exmoci9Sdsxjs'}}).then(response=>{
            setData(response.data)
            
        }).catch(error=>{
            console.log(error.message)
        })
    }, [url])

    return data
}
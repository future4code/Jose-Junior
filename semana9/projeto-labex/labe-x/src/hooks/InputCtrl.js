import React, { useState } from 'react';

export default function useInputCtrl(initState){
   
    const [value, setValue] = useState(initState)

    const handleInput = (event)=>{
        setValue(event.target.value)
    }

    return [value, handleInput]
}
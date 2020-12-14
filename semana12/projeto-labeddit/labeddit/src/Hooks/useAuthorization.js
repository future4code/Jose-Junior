import { useContext, useEffect } from 'react';
import { useHistory} from 'react-router-dom'
import { ContextGlobal } from '../Global/Context/context';



export default function useAuthorization(){


    const history = useHistory()
    const {states} = useContext(ContextGlobal)

    useEffect(()=>{

        const token = states.token

        !token && history.push('/')
    }, [history])

}
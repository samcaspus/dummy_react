import { DECREMENT_VALUE, ERROR, INCREMENT_VALUE } from "../constants"

export const incriment = (value) =>{
    if(value===10){
        alert("cannot increase further")
        return{
            type: ERROR
        }
    }
    return {
        type: INCREMENT_VALUE
    }
}


export const decrease = (value) =>{
    if(value===0){
        alert("cannot decrease further")
        return{
            type: ERROR
        }
    }
    return {
        type: DECREMENT_VALUE
    }
}
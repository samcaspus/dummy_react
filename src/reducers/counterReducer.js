import { DECREMENT_VALUE, ERROR, INCREMENT_VALUE } from "../constants";

const inetialState = {
count: 0
}


export default function counterReducer(state = inetialState,action){

    switch(action.type){
        case INCREMENT_VALUE:
            return{
                ...state,
                count: state.count+1
            }

        case DECREMENT_VALUE:
            return {
                ...state,
                count: state.count-1
            }
        case ERROR:
            return state
            
        default:
            return state;
    }
    
}
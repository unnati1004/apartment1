import { ADD_FLAT } from "./action";

export const reducer = (store,{type,payload})=>{
    switch(type){
        case ADD_FLAT:
            return {...store,flat:payload}
        default:
            return store;    
    }
}


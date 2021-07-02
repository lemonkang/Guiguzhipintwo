import { combineReducers } from "redux";
import { Increment } from "./action-types";



 const defaultreducer=(state=0,action)=>{
     console.log("reducer中的state"+state);
    switch (action.type) {
        case Increment:
            
        return action.payload
    
        default:
                 return state
    }
}
export default combineReducers({
    defaultreducer
})
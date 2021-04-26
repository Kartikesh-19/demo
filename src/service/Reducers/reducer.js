import { ADD_ITEM } from "../Constants";

const initialState={
    cardData:[]
}
export default function cardItems(state=[],action){
    switch(action.type){
        case ADD_ITEM:
            console.log("dyss",action);
            
            return[
                ...state,
                {cardData:action.data}
            ]
         
            default:
                return state
    }

}
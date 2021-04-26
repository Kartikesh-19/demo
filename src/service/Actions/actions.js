import {ADD_ITEM} from '../Constants'
export const addToCart=(data)=>{
    return{
        type:ADD_ITEM,
        data:data
    }
}
// export const removeToCart=(data)=>{
//     return {
//         type:REMOVE_ITEM,
//         data:data
//     }
// }

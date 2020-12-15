
import {
    ADD_TO_CART,
    FETCH_PRODUCT,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    DELETE_CART,
    UPDATE_CART
} from '../constants/CartTypes'

var data = JSON.parse(localStorage.getItem('CART'));
const intitalState = data ? data : [];

const cartReducer = (state = intitalState,action)=>{
    var {item,quantity} = action;
    var index = -1;
    switch(action.type){
        
        case FETCH_PRODUCT :
            state = action.products
            return [...state]
            

        case ADD_TO_CART :
            index = findProductIndex(state,item);
            if(index !== -1){
                state[index].quantity += quantity;
            }else{
                state.push({
                    item,
                    quantity
                })
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state] 


            // case INCREASE_QUANTITY:
            //     state.numberCart++
            //     state.Carts[action.payload].quantity++;
               
            //    return{
            //        ...state
            //    }
            // case DECREASE_QUANTITY:
            //     let quantity = state.Carts[action.payload].quantity;
            //     if(quantity>1){
            //         state.numberCart--;
            //         state.Carts[action.payload].quantity--;
            //     }
               
            //     return{
            //         ...state
            //     }

            case DELETE_CART:
                index = findProductIndex(state,item)
                if(index !== -1){
                    state.splice(index,1);
                }  
                localStorage.setItem('CART',JSON.stringify(state));
                return [...state] 
                
            
            case UPDATE_CART:
                index = findProductIndex(state,item)
                if(index !== -1){
                    state[index].quantity = quantity
                }  
                localStorage.setItem('CART',JSON.stringify(state));
                return [...state] 
                        
 


        default:return [...state]
    }
}

var findProductIndex = (cart,item)=>{
    let index = -1;
    if(cart.length > 0){
        for(var i = 0;i<cart.length;i++){
            if(cart[i].item._id === item._id){
                index = i;
                break;
            }
        }
    }
    return index;
}



export default cartReducer;








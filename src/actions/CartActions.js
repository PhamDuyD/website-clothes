import * as types from '../constants/CartTypes'

import apiCaller from '../utils/apiCaller'

export const fetchProductRequest = ()=>{
    return (dispatch)=>{
        return apiCaller('api/Product','GET',null).then(res =>{
            dispatch(fetchProduct(res.data))
        })
    }
}

export const fetchProduct = (products)=>({
    type :types.FETCH_PRODUCT,
    products // [{},...]
})

export const addToCart = (item,quantity)=>({
    type:types.ADD_TO_CART,
    item,
    quantity
})


export const IncreaseQuantity = (payload)=>({
    type:types.INCREASE_QUANTITY,
    payload
})
export const DecreaseQuantity = (payload)=>({
    type:types.DECREASE_QUANTITY,
    payload
})


export function DeleteCart(item){
    return{
        type:'DELETE_CART',
        item
    }
}

export function UpdateCart(item,quantity){
    return{
        type:'UPDATE_CART',
        item,
        quantity
    }
}
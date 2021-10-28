import { CartActionTypes } from './../../types/cart';


export const addToCart = (product) => {
    debugger
        return({
            type: CartActionTypes.ADD_TO_CART,
            payload: product
        })
}
export const deleteProductFromCart = (products) => {
    debugger
    return{
        type: CartActionTypes.DELETE_FROM_CART,
        payload: products
    }
}
export const increaseItem = (newArr: any[]) => {

    debugger
    return{
        type: CartActionTypes.INCREASE_ITEM,
        payload: newArr
    }
}
export const decreaseItem = (newArr: any[]) => {

    debugger
    return{
        type: CartActionTypes.DECREASE_ITEM,
        payload: newArr
    }
}



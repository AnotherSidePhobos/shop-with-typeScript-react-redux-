import { CartAction, CartActionTypes } from './../../types/cart';
import { CartState } from './../../types/cart';
import {IsExistInCart} from './../../utils/utils';

let initialState: CartState = {
    cartItems: []
}


export const cart_reducer = (state = initialState, action: CartAction) : CartState => {
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
            return{
                ...state,
                cartItems: IsExistInCart(state.cartItems, action.payload)
            }
        case CartActionTypes.DELETE_FROM_CART:
            return{
                ...state,
                cartItems: action.payload
            }
        case CartActionTypes.INCREASE_ITEM:
            return{
                ...state,
                cartItems: action.payload
            }
        case CartActionTypes.DECREASE_ITEM:
            return{
                ...state,
                cartItems: action.payload
            }
        
        default:
            return state
    }
}
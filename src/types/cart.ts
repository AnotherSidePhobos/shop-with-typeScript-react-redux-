export interface CartState {
    cartItems: any[]
}

export enum CartActionTypes{
    ADD_TO_CART = 'ADD_TO_CART',
    DELETE_FROM_CART = 'DELETE_FROM_CART',
    INCREASE_ITEM = 'INCREASE_ITEM',
    DECREASE_ITEM = 'DECREASE_ITEM',

}

interface addToCart{
    type: CartActionTypes.ADD_TO_CART,
    payload: object
}
interface deleteToCart{
    type: CartActionTypes.DELETE_FROM_CART,
    payload: any[]
}
interface increaseItem{
    type: CartActionTypes.INCREASE_ITEM,
    payload: any
}
interface decreaseItem{
    type: CartActionTypes.DECREASE_ITEM,
    payload: any
}


export type CartAction = deleteToCart | addToCart | decreaseItem | increaseItem;

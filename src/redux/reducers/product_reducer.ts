import { ProductState, ProductAction, ProductActionTypes } from '../../types/product';

let initialState :ProductState = {
    products: [],
    loading: false,
    error: null,
    product: {},
    currentPage: 1,
    pageSize: 3,
    totalItemsCount: 0
}

export const product_reducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCT:
            return{
                ...state,
                loading: true,
                error: null,
            }            
        case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }            
        case ProductActionTypes.FETCH_PRODUCT_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }            
        case ProductActionTypes.FETCH_SELECTED_PRODUCT:
            debugger
            return{
                ...state,
                loading: false,
                product: action.payload
            }            
        case ProductActionTypes.SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload
            }            
        case ProductActionTypes.GET_TOTAL_PRODUCTS:
            debugger
            return{
                ...state,
                totalItemsCount: action.payload
            }            
    
        default:
            return state
    }
}
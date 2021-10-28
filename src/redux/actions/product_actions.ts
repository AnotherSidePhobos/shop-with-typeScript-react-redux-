import { ProductAction, ProductActionTypes } from '../../types/product';
import { Dispatch } from "redux";
import axios from 'axios'
export const fetchProducts = (currentPage, pageSize) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCT
            })
            const response = await axios.get(`http://localhost:3003/products?_page=${currentPage}&_limit=${pageSize}`)
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCT_ERROR,
                payload: 'something is wrong...'
            })
        }
    }
}

export const fetchSelectedProduct = (product) => {
    debugger
        return({
            type: ProductActionTypes.FETCH_SELECTED_PRODUCT,
            payload: product
        })
}


export const setCurrentPage = (page) => {
    return{
        type: ProductActionTypes.SET_CURRENT_PAGE,
        payload: page
    }
}
export const getTotalProducts = (products) => {

        return{
            type: ProductActionTypes.GET_TOTAL_PRODUCTS,
            payload: products.length
        }
}
export const fetchProductForSearchAction = (products) => {
debugger
        return{
            type: ProductActionTypes.FETCH_PRODUCTS_BY_SEARCH,
            payload: products
        }
}
export const fetchItemsBySearch = (items: any[]) => {

debugger

    console.log("searchText: ", items);
        return{
            type: ProductActionTypes.FETCH_PRODUCTS_BY_SEARCH,
            payload: items
        }
}
export const fetchAfterSearch = () => {

debugger

        return{
            type: ProductActionTypes.FETCH_AFTER_SEARCH,
        }
}
// export const fetchItemsBySearch = (items: any[]) => {

// debugger

//     console.log("searchText: ", items);
//         return{
//             type: ProductActionTypes.FETCH_PRODUCTS_BY_SEARCH,
//             payload: items
//         }
// }
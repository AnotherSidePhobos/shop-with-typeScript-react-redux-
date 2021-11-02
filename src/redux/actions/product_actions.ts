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
export const fetchAllProductBySearch = (inputSearch) => {
    debugger
    return async (dispatch: Dispatch<ProductAction>) => {

        const response = await axios.get(`http://localhost:3003/products`)
        debugger
        let newResponse = response.data.filter((res) => res.title.toLowerCase().includes(inputSearch.toLowerCase())) 

        dispatch({
            type: ProductActionTypes.FETCH_PRODUCT_BY_SEARCH,
            payload: newResponse
        })

    }
}

export const fetchSelectedProduct = (product) => {
    debugger
        return({
            type: ProductActionTypes.FETCH_SELECTED_PRODUCT,
            payload: product
        })
}
export const setProductByPrice = (products, priceCategory) => {
    let sortedProducts;
    debugger
    if (priceCategory === 'Chip') {
        sortedProducts = products.sort((a, b) => {
            return a.price - b.price
        })
    }else if(priceCategory === 'Expensive'){
        sortedProducts = products.sort((a, b) => {
            return b.price - a.price
        })
    }
    return({
        type: ProductActionTypes.FETCH_PRODUCT_BY_CAT,
        payload: sortedProducts
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
import { getTotalProducts } from './../redux/actions/product_actions';
export interface ProductState {
    products: any[],
    loading: boolean,
    error: null | string,
    product: any,
    currentPage: number,
    pageSize: number,
    totalItemsCount: number
}

export enum ProductActionTypes{
    FETCH_PRODUCT = 'FETCH_PRODUCT',
    FETCH_SELECTED_PRODUCT = 'FETCH_SELECTED_PRODUCT',
    FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
    FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    GET_TOTAL_PRODUCTS = 'GET_TOTAL_PRODUCTS'
}

interface fetchProductAction{
    type: ProductActionTypes.FETCH_PRODUCT
}
interface fetchSelectedProduct{
    type: ProductActionTypes.FETCH_SELECTED_PRODUCT,
    payload: object
}
interface fetchProductSuccessAction{
    type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
    payload: any[]
}
interface fetchProductErrorAction{
    type: ProductActionTypes.FETCH_PRODUCT_ERROR,
    payload: string
}
interface setCurrentPage{
    type: ProductActionTypes.SET_CURRENT_PAGE,
    payload: number
}
interface getTotalProducts{
    type: ProductActionTypes.GET_TOTAL_PRODUCTS,
    payload: number
}

export type ProductAction = fetchProductAction | getTotalProducts | setCurrentPage | fetchProductSuccessAction | fetchProductErrorAction | fetchSelectedProduct;

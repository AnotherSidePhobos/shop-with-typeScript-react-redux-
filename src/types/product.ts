export interface ProductState {
    products: any[],
    //productsForSearch: any[],
    loading: boolean,
    error: null | string,
    product: any,
    currentPage: number,
    pageSize: number,
    totalItemsCount: number,
    //searchFiled: string
}

export enum ProductActionTypes{
    FETCH_PRODUCT = 'FETCH_PRODUCT',
    FETCH_PRODUCT_BY_CAT = 'FETCH_PRODUCT_BY_CAT',
    FETCH_SELECTED_PRODUCT = 'FETCH_SELECTED_PRODUCT',
    FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
    FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    GET_TOTAL_PRODUCTS = 'GET_TOTAL_PRODUCTS',
    FETCH_PRODUCT_BY_SEARCH = 'FETCH_PRODUCT_BY_SEARCH'
}

interface fetchProductAction{
    type: ProductActionTypes.FETCH_PRODUCT
}
interface setProductByPrice{
    type: ProductActionTypes.FETCH_PRODUCT_BY_CAT,
    payload: any[]
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
interface fetchAllProductBySearch{
    type: ProductActionTypes.FETCH_PRODUCT_BY_SEARCH,
    payload: any[]
}



export type ProductAction = setProductByPrice | fetchAllProductBySearch | fetchProductAction | getTotalProducts | setCurrentPage | fetchProductSuccessAction | fetchProductErrorAction | fetchSelectedProduct;

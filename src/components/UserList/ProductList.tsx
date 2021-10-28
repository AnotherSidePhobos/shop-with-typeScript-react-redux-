import React, { useEffect } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import {fetchProducts, getTotalProducts} from './../../redux/actions/product_actions';
import MediaCard from './../../components/Card/Card';
import './ProductList.css';
import BasicPagination from './../Pagination/Pagination';
import {fetchAllProductsApiById, getTotalCountApi} from './../../API/api';
import {fetchProductForSearchAction} from './../../redux/actions/product_actions';
const UserList = () => {

    const {products, loading, error,} = useTypedSelector(state => state.product)
    const currentPage: number = useTypedSelector(state => state.product.currentPage);
    const pageSize: number = useTypedSelector(state => state.product.pageSize);
    console.log(products);

    const dispatch = useDispatch()


    // useEffect(() => {
    //     dispatch(fetchProducts(1, 3))
    // }, [])
    React.useEffect(() => {
        getTotalCountApi()
        .then((response) => dispatch(fetchProductForSearchAction(response)))
      }, [])

    useEffect(() => {
        getTotalCountApi()
        .then((response) => dispatch(getTotalProducts(response)))
        
        dispatch(fetchProducts(currentPage, pageSize))
    }, [currentPage])
    return (
        <div>
            <div className='cards'>
                {
                    products.map((product) => (
                        <MediaCard key={product.id} product={product}/>
                    ))
                }
            </div>
            <br/>
            <hr/>
            <div className='pagination'>
                <BasicPagination/>
            </div>
        </div>
    )
}

export default UserList
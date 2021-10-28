import React, { useEffect } from 'react'
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchAllProductsApiById } from '../../API/api';
import { fetchSelectedProduct } from '../../redux/actions/product_actions';
const Detail = () => {
debugger
    let { productId } = useParams<{productId?: string}>();

    const dispatch = useDispatch()

    useEffect(() => {
        fetchAllProductsApiById(productId)
        .then((response) => dispatch(fetchSelectedProduct(response)))

    }, [])
    const {product} = useTypedSelector(state => state.product)
    console.log('here: ', product);
    return (
        <div>
            <h2>{product.title} </h2>
            <img src={product.img}/>
        </div>
    )
}

export default Detail

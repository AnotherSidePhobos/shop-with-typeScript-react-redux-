import React, { useEffect } from 'react'
import {useParams} from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchAllProductsApiById } from '../../API/api';
import { fetchSelectedProduct } from '../../redux/actions/product_actions';
import Button from '@mui/material/Button';
import './Detail.css';
import {addToCart} from './../../redux/actions/cart_actions';

const Detail = (props) => {
    console.log("props: ", props.addToCart);
debugger
    let { productId } = useParams<{productId?: string}>();

    const dispatch = useDispatch()
    const onBackClicked = () => {
        props.history.goBack()
    }
    useEffect(() => {
        fetchAllProductsApiById(productId)
        .then((response) => dispatch(fetchSelectedProduct(response)))

    }, [])
    const onAddCartClicked = (product) => {
        props.addToCart(product)
    }
    const {product} = useTypedSelector(state => state.product)
    console.log('here: ', product);
    return (
        <div className='detail__card'>
            <h2>{product.title} </h2>
            <div className='img__and-details'>
                <div className='image'>
                    <img src={product.img}/>
                </div>
                <div className='details'>
                    <div>
                        {product.details}
                    </div>
                    <div style={{float: "left", marginLeft: "20px", marginTop: "200px"}}>
                        <Button onClick={() => onAddCartClicked(product)} variant="contained">Add to cart</Button>
                        <Button onClick={onBackClicked} style={{marginLeft: "10px"}} variant="contained">back</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default connect(null, {addToCart})(Detail) 

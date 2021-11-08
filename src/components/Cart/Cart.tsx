import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CustomizedTables from '../CustomizedTables/CustomizedTables';
import './Cart.css';
import Container from '@mui/material/Container';
import {ThemeContext} from './../../context/theme-context';

const Cart = () => {
    const theme = React.useContext(ThemeContext)
    const {cartItems} = useTypedSelector(state => state.cart)
    console.log("cartItems: ", cartItems);
    return (
        <div style={{background: theme.background, height: '100vh'}}>
            <Container fixed>
                {
                    <CustomizedTables cartItems={cartItems}/>
                }
            </Container>

        </div>
    )
}

export default Cart

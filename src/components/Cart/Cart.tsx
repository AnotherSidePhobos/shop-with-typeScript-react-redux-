import { useTypedSelector } from '../../hooks/useTypedSelector';
import CustomizedTables from '../CustomizedTables/CustomizedTables';
import './Cart.css';
import Container from '@mui/material/Container';

const Cart = () => {

    const {cartItems} = useTypedSelector(state => state.cart)
    console.log("cartItems: ", cartItems);
    return (
        <Container fixed>
            {
                <CustomizedTables cartItems={cartItems}/>
            }
        </Container>
    )
}

export default Cart

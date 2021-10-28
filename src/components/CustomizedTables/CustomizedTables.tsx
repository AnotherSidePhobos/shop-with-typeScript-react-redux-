import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { deleteProductFromCart, increaseItem, decreaseItem } from '../../redux/actions/cart_actions';
import {Link} from 'react-router-dom';
import { isTemplateExpression } from 'typescript';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables(props: { cartItems: any[] } ) {

  const cartItems = useTypedSelector(state => state.cart.cartItems)

  const dispatch = useDispatch();

  const onDeleteClicked = (id) => {
    let newCartItems = cartItems.filter((item) => item.id !== id);
    dispatch(deleteProductFromCart(newCartItems))
  }
  const increaseItemClicked = (id) => {
    let newArr = cartItems.map((item) => {
      if (item.id == id) {
        item = {...item, count: item.count + 1}
      }
      return item
    })
    let test = newArr
    debugger
    dispatch(increaseItem(newArr))
  }

  const decreaseItemClicked = (id) => {
    let newArr = cartItems.map(item => {
        if(item.id === id){
            item={...item, count:item.count === 1 ? item.count=1 : item.count - 1}
        }
        return item;
    })
    dispatch(decreaseItem(newArr))

  }




  // let incResilt;
  // const increaseItemClicked = (id) => {

  //   debugger
  //   incResilt = cartItems.map(item => {
  //     if (item.id == id) {
  //         item={...item, count: item.count +1}
  //     }
  //   }

  //   dispatch(increaseItem(incResilt))
  //   )
  // }

  if (!cartItems.length) {
    return(
      <>
        <h1>There is not any items in the cart</h1>
        <Link style={{color: "black", cursor: "pointer"}} to='/'>Back to Home</Link>
      </>
    )
  }else{
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="center">Count</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.cartItems.map((item) => (
              <StyledTableRow key={item.title}>
                <StyledTableCell component="th" scope="row">
                  {item.title}
                </StyledTableCell>
                <StyledTableCell align="center">{new Intl.NumberFormat().format(item.price * item.count) + 'rub'}</StyledTableCell>
                <StyledTableCell align="center">{item.date}</StyledTableCell>
                <StyledTableCell align="center">{item.category}</StyledTableCell>
                <StyledTableCell align="center">{item.count}</StyledTableCell>
                <StyledTableCell align="center">
                <Button onClick={() => increaseItemClicked(item.id)} variant="outlined">Plus</Button>
                  </StyledTableCell>
                <StyledTableCell align="center">
                <Button onClick={() => decreaseItemClicked(item.id)} variant="outlined">Minus</Button>
                  </StyledTableCell>
                <StyledTableCell align="center">
                  <Button onClick={() => {onDeleteClicked(item.id)}} variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
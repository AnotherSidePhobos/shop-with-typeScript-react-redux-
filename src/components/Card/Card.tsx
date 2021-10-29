import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addToCart} from './../../redux/actions/cart_actions';

interface IMyProps {
  product: any
}

const MediaCard: React.FC<IMyProps> = (props: IMyProps) => {
  const dispatch = useDispatch();
  const addToCartClicked: any = (product) => {
    dispatch(addToCart(product))
  }
  console.log("props:", props);
  return (
    <Card sx={{ maxWidth: 345, marginTop: 10 }}>
      <Link to={`/detail/${props.product.id}`}>
        <CardMedia
          component="img"
          height="300"
          image={props.product.img}
          alt={props.product.title}
        />

      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {
            props.product.details.length > 100 ? props.product.details.slice(0, 150) + "..." : props.product.details
          }

        </Typography>
      </CardContent>
      <CardActions style={{display: "flex", justifyContent: 'space-around'}}>
          <Button size="small">Learn More</Button>
          <Box>
            <Typography gutterBottom variant="h6" component="div">
              {
                new Intl.NumberFormat().format(props.product.price)
                
              } rub
            </Typography>
          </Box>
      </CardActions>
      <Button onClick={() => {addToCartClicked(props.product)}} style={{width: "90%", marginBottom: "10px"}} variant="contained">Add To Cart</Button>
      
    </Card>
  );
}
export default MediaCard
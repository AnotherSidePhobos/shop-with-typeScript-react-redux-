import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {getTotalCountApi} from './../../API/api';
import {setProductByPrice} from './../../redux/actions/product_actions';
import { useDispatch } from 'react-redux';

export default function BasicSelect() {

  const dispatch = useDispatch()
  const handleChange = (event) => {
    debugger
    getTotalCountApi()
    .then((response) => dispatch(setProductByPrice(response, event.target.value)))
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Price"
          onChange={handleChange}
        >
          <MenuItem value={'Chip'}>Chip First</MenuItem>
          <MenuItem value={'Expensive'}>Expensive first</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
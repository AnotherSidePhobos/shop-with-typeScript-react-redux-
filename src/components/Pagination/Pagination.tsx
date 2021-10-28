import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {setCurrentPage, getTotalProducts} from './../../redux/actions/product_actions';
import { stat } from 'fs';

const BasicPagination: React.FC = () => {

    const pageSize: number = useTypedSelector(state => state.product.pageSize)
    const currentPage: number = useTypedSelector(state => state.product.currentPage)
    const totalItemsCount: number = useTypedSelector(state => state.product.totalItemsCount)
    const dispatch = useDispatch()
    const countPages = Math.ceil(totalItemsCount / pageSize)
    let pages: number[] = [];

    for (let i = 0; i <= countPages; i++) {
        pages.push(i)
    }

    const onPageClick = (event, page) => {
        dispatch(setCurrentPage(page))
    }
    return (
        <>
            <Stack spacing={2}>
            <Pagination onChange={onPageClick} count={countPages} page={currentPage} color="primary" />
            </Stack>
        </>
    );
}
export default BasicPagination;
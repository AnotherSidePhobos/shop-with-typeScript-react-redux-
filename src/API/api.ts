import axios from 'axios';

export const getTotalCountApi = () => {
    debugger
    return axios.get(`http://localhost:3003/products`)
    .then(response => response.data)
}
export const fetchAllProductsApiByCat = (currentPage, pageSize) => {
    debugger
    return axios.get(`http://localhost:3003/products?_page=${currentPage}&_limit=${pageSize}`)
    .then(response => response.data)
}

export const fetchAllProductsApiById = (id) => {
    debugger
    return axios.get(`http://localhost:3003/products?id=${id}`)
    .then(response => response.data[0])
}
import React, {FC, useContext} from 'react'
import UserList from '../components/UserList/ProductList'
import Container from '@mui/material/Container';
import Register from '../components/Register/Register';
import SideBar from '../components/SideBar/SideBar';
import {ThemeContext} from './../context/theme-context';
const Home: FC = () => {

    const theme = useContext(ThemeContext)
    return (
        <div style={{display: 'flex', background: theme.background}}>
            <SideBar/>
            <Container fixed>
                <div>
                    <UserList/>
                </div>
            </Container>
        </div>
    )
}

export default Home


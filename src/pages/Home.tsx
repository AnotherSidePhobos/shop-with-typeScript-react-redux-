import React, {FC} from 'react'
import UserList from '../components/UserList/ProductList'
import Container from '@mui/material/Container';
import Register from '../components/Register/Register';
import SideBar from '../components/SideBar/SideBar';
const Home: FC = () => {



    return (
        <div style={{display: 'flex'}}>
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


import React, {FC} from 'react'
import UserList from '../components/UserList/ProductList'
import Container from '@mui/material/Container';

const Home: FC = () => {



    return (
        <Container fixed>
            <div>
                <UserList/>
            </div>
        </Container>
    )
}

export default Home


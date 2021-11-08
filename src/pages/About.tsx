import React, {FC, useContext} from 'react'
import Container from '@mui/material/Container';
import {ThemeContext} from './../context/theme-context';

const About: FC = () => {
    const theme = useContext(ThemeContext)
    return (
        <div style={{background: theme.background, height: '100vh'}}>
            <Container fixed>
                <h1>About</h1>
                <p>In out shop we can blablabla</p>

            </Container>
        </div>
    )
}

export default About

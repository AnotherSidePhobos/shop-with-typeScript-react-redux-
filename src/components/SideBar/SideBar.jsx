import './SideBar.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BasicSelect from './../BasicSelect/BasicSelect';
import {ThemeContext} from './../../context/theme-context';

const SideBar = () => {
    const theme = React.useContext(ThemeContext)
    return (
        <div style={{background: theme.background}} className='sideBar'>
            Sorting
            <BasicSelect/>
        </div>
    )
}

export default SideBar

import './SideBar.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BasicSelect from './../BasicSelect/BasicSelect';
const SideBar = () => {
    return (
        <div className='sideBar'>
            Sorting
            <BasicSelect/>
        </div>
    )
}

export default SideBar

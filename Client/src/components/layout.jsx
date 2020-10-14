import React from 'react';
import { Box } from '@material-ui/core';

let Layout = (props) => {
    return (
        <Box component="div" className='layout'>
            {props.children}
        </Box>
    )
}

export default Layout;
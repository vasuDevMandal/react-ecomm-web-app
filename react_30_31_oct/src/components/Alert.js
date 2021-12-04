import React from 'react';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref){
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} severity="error"/>
})

export default Alert;
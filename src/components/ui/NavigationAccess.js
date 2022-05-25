import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import navigationSX from '../../theme/NavigationSX'


const NavigationAccess = () => {
    return (
        <Box sx={navigationSX.accountBoxDesktop}>
            <Button key='login' sx={navigationSX.pagesButtonDesktop}>
                <Link to='/login' className='link'>
                    <LoginIcon fontSize="medium" sx={navigationSX.pagesIconDesktop} />
                    Ingresar
                </Link>
            </Button>
        </Box>
    )
}

export default NavigationAccess

import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import navigationSX from '../../theme/NavigationSX'


const NavLogOut = () => {
    return (
        <Box sx={navigationSX.accountBoxDesktop}>
            <Button key='login' sx={navigationSX.pagesButtonDesktop}>
                <Link to='/' className='app-bar-desktop-link'>
                    <LoginIcon fontSize="medium" sx={navigationSX.pagesIconDesktop} />
                    Acceder
                </Link>
            </Button>
        </Box>
    )
}

export default NavLogOut

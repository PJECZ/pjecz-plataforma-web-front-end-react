import React from 'react'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import navigationSX from '../../theme/NavigationSX'
import '../../css/global.css'


const NavigationMenu = () => {
    return (
        <Box sx={navigationSX.pagesBoxDesktop}>
            <Button key='noticias' sx={navigationSX.pagesButtonDesktop}>
                <Link to='/' className='app-bar-desktop-link'>
                    Noticias
                </Link>
            </Button>
        </Box>
    )
}

export default NavigationMenu

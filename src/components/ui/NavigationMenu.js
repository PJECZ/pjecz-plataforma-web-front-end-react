import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import navigationSX from '../../theme/NavigationSX'
import '../../css/global.css'


const NavigationMenu = () => {
    return (
        <Box sx={navigationSX.pagesBoxDesktop}>
            <Button key='aplicaciones' sx={navigationSX.pagesButtonDesktop}>
                <Link to='/' className='app-bar-desktop-link'>
                    Aplicaciones
                </Link>
            </Button>
            <Button key='manuales' sx={navigationSX.pagesButtonDesktop}>
                <Link to='/' className='app-bar-desktop-link'>
                    Manuales
                </Link>
            </Button>
            <Button key='noticias' sx={navigationSX.pagesButtonDesktop}>
                <Link to='/' className='app-bar-desktop-link'>
                    Noticias
                </Link>
            </Button>
            <Button key='panel' sx={navigationSX.pagesButtonDesktop}>
                <Link to='/' className='app-bar-desktop-link'>
                    Panel
                </Link>
            </Button>
        </Box>
    )
}

export default NavigationMenu

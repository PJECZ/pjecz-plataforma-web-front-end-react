import React from 'react'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import navigationSX from '../../theme/NavigationSX'
import '../../css/global.css'


const NavCatalogos = () => {
    return (
        <Box sx={navigationSX.pagesBoxDesktop}>
            <Button key='distritos' sx={navigationSX.pagesButtonDesktop}>
                <Link to='/catalogos/distritos' className='app-bar-desktop-link'>
                    Distritos
                </Link>
            </Button>
            <Button key='materias' sx={navigationSX.pagesButtonDesktop}>
                <Link to='/catalogos/materias' className='app-bar-desktop-link'>
                    Materias
                </Link>
            </Button>
        </Box>
    )
}

export default NavCatalogos

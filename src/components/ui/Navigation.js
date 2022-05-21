import React, { useState } from 'react';
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LabelIcon from '@mui/icons-material/Label';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import '../../css/global.css';


export const Navigation = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigationStyles = {
        box: { flexGrow: 1, mt: 15 },
        mobileBox: {
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
        },
        desktopBox: {
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
        },
        menuButton: {
            my: 2,
            color: 'white',
            alignItems: 'center',
            display: 'inline-flex',
        },
        menuIcon: { marginRight: '8px' },
    }

    return (
        <Box styles={navigationStyles.box}>
            <AppBar position='absolute'>
                <Toolbar>

                    <Box sx={navigationStyles.mobileBox}>
                        <IconButton color='inherit'>
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    </Box>

                    <Box sx={navigationStyles.desktopBox}>
                        <Button key='inicio' sx={navigationStyles.menuButton}>
                            <Link to='/' className='app-bar-desktop-link'>
                                <HomeIcon fontSize="small" sx={navigationStyles.menuIcon} />
                                Plataforma Web
                            </Link>
                        </Button>
                        <Button
                            id='catalogos-button'
                            aria-controls={open ? 'catalogos-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            color='inherit'
                            sx={navigationStyles.menuButton}
                        >
                            <LabelIcon fontSize="small" sx={navigationStyles.menuIcon} />
                            Catálogos
                        </Button>
                        <Menu
                            id='catalogos-menu'
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{ 'aria-labelledby': 'catalogos-button' }}
                        >
                            <MenuItem onClick={handleClose}><Link to='/catalogos/distritos'>Distritos</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to='/catalogos/materias'>Materias</Link></MenuItem>
                        </Menu>
                    </Box>

                    <Button key='perfil' sx={navigationStyles.menuButton}>
                        <Link to='/profile' className='app-bar-desktop-link'>
                            <PersonIcon fontSize="small" sx={navigationStyles.menuIcon} />
                            Perfil
                        </Link>
                        <Link to='/logout' className='app-bar-desktop-link'>
                            <LogoutIcon fontSize="small" sx={navigationStyles.menuIcon} />
                            Salir
                        </Link>
                    </Button>

                </Toolbar>
            </AppBar>
        </Box>
    );

}

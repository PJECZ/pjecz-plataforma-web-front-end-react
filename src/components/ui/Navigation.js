import React, { useContext, useEffect } from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'

import UserContext from '../../context/user/UserContext'

import NavigationAccess from './NavigationAccess'
import NavigationMain from './NavigationMain'
import NavigationLogged from './NavigationLogged'
import NavigationPublic from './NavigationPublic'

import navigationSX from '../../theme/NavigationSX'
import '../../css/global.css'


const Navigation = () => {

    // Obtener el contexto de usuario
    const { isLogged, username, getUser } = useContext(UserContext)
    useEffect(() => {
        getUser()
    }, [])

    return(
        <AppBar position='absolute'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <MenuIcon sx={navigationSX.menuIconMobile} />
                    <Typography variant='h6' noWrap component='a' href='/' sx={navigationSX.systemNameMobile}>
                        Plataforma Web
                    </Typography>
                    <MenuIcon sx={navigationSX.menuIconDesktop} />
                    <Typography variant='h5' noWrap component='a' href='/' sx={navigationSX.systemNameDesktop}>
                        Plataforma Web
                    </Typography>
                    {isLogged ? <NavigationMain /> : <NavigationPublic />}
                    {isLogged ? <NavigationLogged username={username} /> : <NavigationAccess />}
                </Toolbar>
            </Container>
        </AppBar>
    )

}

export default Navigation

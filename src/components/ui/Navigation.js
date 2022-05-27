import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'

import NavigationAccess from './NavigationAccess'
import NavigationMain from './NavigationMain'
import NavigationLogged from './NavigationLogged'
import NavigationPublic from './NavigationPublic'

import navigationSX from '../../theme/NavigationSX'
import '../../css/global.css'

import { Profile } from '../../actions/AuthActions'


const Navigation = () => {

    // Determinar si el usuario esta logueado
    const [isLogged, setIsLogged] = useState(false)
    const [username, setUsername] = useState('')
    useEffect(() => {
        async function fetchData() {
            const profile = await Profile()
            if (profile.status === 200) {
                setIsLogged(true)
                setUsername(profile.data.email)
            } else if (profile.status === 401) {
                setIsLogged(false)
                window.localStorage.removeItem('data')
            }
        }
        fetchData()
    }, [isLogged])

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

import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import AdbIcon from '@mui/icons-material/Adb'

import NavigationAccess from './NavigationAccess'
import NavigationMenu from './NavigationMenu'
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

    if (isLogged) {
        return (
            <AppBar position='absolute'>
                <Container>
                    <Toolbar>
                        <AdbIcon sx={navigationSX.adbIconMobile} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={navigationSX.systemMobile}
                        >
                            Plataforma Web
                        </Typography>
                        <AdbIcon sx={navigationSX.adbIconDesktop} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={navigationSX.systemDesktop}
                        >
                            Plataforma Web
                        </Typography>
                        <NavigationMenu />
                        <NavigationLogged username={username} />
                    </Toolbar>
                </Container>
            </AppBar>
        )
    } else {
        return(
            <AppBar position='absolute'>
                <Container>
                    <Toolbar>
                        <MenuIcon sx={navigationSX.threeLinesIconMobile} />
                        <Typography variant='h6' noWrap component='a' href='/' sx={navigationSX.systemNameMobile}>
                            Plataforma Web
                        </Typography>
                        <MenuIcon sx={navigationSX.threeLinesIconDesktop} />
                        <Typography variant='h5' noWrap component='a' href='/' sx={navigationSX.systemNameDesktop}>
                            Plataforma Web
                        </Typography>
                        <NavigationPublic />
                        <NavigationAccess />
                    </Toolbar>
                </Container>
            </AppBar>
        )
    }

}

export default Navigation

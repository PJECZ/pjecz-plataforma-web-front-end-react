import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import AdbIcon from '@mui/icons-material/Adb'
import NavCatalogos from './NavCatalogos'
import NavLogIn from './NavLogIn'
import navigationSX from '../../theme/NavigationSX'
import '../../css/global.css'


const Navigation = () => {

    // Determinar si el usuario esta logueado
    const [isLogged, setIsLogged] = useState(false)
    function checkStorage() {
        if (window.localStorage.getItem('data')) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }
    useEffect(() => {
        checkStorage()
        return () => {}
    }, [isLogged])

    return (
        <AppBar position='static'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

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
                    <NavCatalogos />
                    <NavLogIn />

                </Toolbar>
            </Container>
        </AppBar>
    )

}

export default Navigation

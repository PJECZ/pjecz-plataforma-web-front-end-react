import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Grid, Typography } from '@mui/material'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'


const LogOutScreen = () => {

    // Revisar si ya esta logueado
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

    // Salir de la sesion
    const logout = () => {
        window.localStorage.removeItem('data')
        setIsLogged(false)
    }

    if (isLogged) {
        return (
            <Container sx={commonSX.container}>
                <Grid container spacing={2}>
                    <Grid item md={3} xs={12}></Grid>
                    <Grid item md={6} xs={12}>
                        <Card align='center' sx={commonSX.card}>
                            <Typography variant='h5' sx={commonSX.title}>
                                Salir del sistema
                            </Typography>
                            <Button
                                variant='contained'
                                fullWidth
                                type='button'
                                onClick={logout}
                            >
                                Salir
                            </Button>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}></Grid>
                </Grid>
            </Container>
        )
    } else {
        return (
            <Container sx={commonSX.container}>
                <Grid container spacing={2}>
                    <Grid item md={3} xs={12}></Grid>
                    <Grid item md={6} xs={12}>
                        <Card align='center' sx={commonSX.card}>
                            <Typography variant='h5' sx={commonSX.title}>
                                Esta fuera del sistema
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}></Grid>
                </Grid>
            </Container>
        )
    }

}

export default LogOutScreen

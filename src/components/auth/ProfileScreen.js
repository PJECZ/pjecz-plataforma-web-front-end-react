import React, { useEffect } from 'react'
import { Container, Grid, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'


const ProfileScreen = () => {

    // Redirigir a la raiz cuando no haya iniciado sesion
    const data = JSON.parse(window.localStorage.getItem('data'))
    const navigate = useNavigate()
    useEffect(() => {
        if (!data) {
            navigate('/')
        }
    })

    return (
        <Container sx={commonSX.container}>
            <Typography variant='h5' sx={commonSX.title}>
                Mi perfil
            </Typography>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <TextField
                        label="Nombre"
                        type="text"
                        fullWidth
                        aria-readonly
                        value={'Juan Perez'}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        label="CURP"
                        type="text"
                        fullWidth
                        aria-readonly
                        value={'OEJV770826HTSRMÍ82'}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        label="Correo electronico"
                        type="email"
                        fullWidth
                        aria-readonly
                        value={'juan.perez@correo.com'}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        label="Telefono"
                        type="text"
                        fullWidth
                        aria-readonly
                        value={'844 111 2233'}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Distrito"
                        type="text"
                        fullWidth
                        aria-readonly
                        value={'Distrito Judicial de Saltillo'}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Autoridad"
                        type="text"
                        fullWidth
                        aria-readonly
                        value={'Oficialia Mayor'}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Oficina"
                        type="text"
                        fullWidth
                        aria-readonly
                        value={'SLT-OM-DI'}
                    />
                </Grid>
            </Grid>
        </Container>
    )

}

export default ProfileScreen

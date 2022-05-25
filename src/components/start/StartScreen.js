import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Grid, Typography } from '@mui/material'
import ModuloCard from './ModuloCard'
import commonSX from '../../theme/CommonSX'


const StartScreen = () => {

    // Redirigir al login cuando no haya iniciado sesion
    const data = JSON.parse(window.localStorage.getItem('data'))
    const navigate = useNavigate()
    useEffect(() => {
        if (!data) {
            navigate('/login')
        }
    })

    return (
        <Container sx={commonSX.container}>
            <Typography variant='h5' sx={commonSX.title}>
                Inicio
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <ModuloCard title='Distritos' link='/catalogos/distritos' />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <ModuloCard title='Materias' link='/catalogos/materias' />
                </Grid>
            </Grid>
        </Container>
    )

}

export default StartScreen

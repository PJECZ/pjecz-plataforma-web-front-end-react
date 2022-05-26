import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Grid, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'
import ModuloCard from './ModuloCard'


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
                    <ModuloCard title='Autoridades' link='/autoridades/autoridades' />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <ModuloCard title='Distritos' link='/autoridades/distritos' />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <ModuloCard title='Domicilios' link='/inventarios/domicilios' />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <ModuloCard title='Materias' link='/autoridades/materias' />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <ModuloCard title='Modulos' link='/usuarios/modulos' />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <ModuloCard title='Oficinas' link='/inventarios/oficinas' />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <ModuloCard title='Roles' link='/usuarios/roles' />
                </Grid>
            </Grid>
        </Container>
    )

}

export default StartScreen

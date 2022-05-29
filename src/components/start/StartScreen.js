import React from 'react'
import { Grid, Typography } from '@mui/material'

import ModuloCard from './ModuloCard'

import CommonScreen from '../ui/CommonScreen'
import commonSX from '../../theme/CommonSX'


const StartScreen = () => {

    return (
        <CommonScreen>
            <Typography variant='h5' sx={commonSX.title}>
                Inicio
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <ModuloCard title='Autoridades' link='/autoridades' />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <ModuloCard title='Distritos' link='/distritos' />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <ModuloCard title='Domicilios' link='/domicilios' />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <ModuloCard title='Materias' link='/materias' />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <ModuloCard title='Modulos' link='/modulos' />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <ModuloCard title='Oficinas' link='/oficinas' />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <ModuloCard title='Roles' link='/roles' />
                </Grid>
            </Grid>
        </CommonScreen>
    )

}

export default StartScreen

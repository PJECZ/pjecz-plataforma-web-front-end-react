import React, { useEffect, useState } from 'react'
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Distrito } from '../../actions/DistritosActions'


const DetailDistrito = ({ distrito_id }) => {

    // Consultar Distrito
    const [distrito, setDistrito] = useState({
        id: null,
        nombre: '',
        nombre_corto: '',
    })
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Distrito(distrito_id)
            if (response.status === 200) {
                setDistrito(response.data)
                setConsultado(true)
            }
        }
        fetchData()
    }, [distrito_id])

    if (consultado) {
        return (
            <Card sx={commonSX.card} elevation={4}>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        Distrito
                    </Typography>
                </CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Nombre"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={distrito.nombre}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Nombre corto"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={distrito.nombre_corto}
                        />
                    </Grid>
                </Grid>
            </Card>
        )
    } else {
        return (
            <Card sx={commonSX.card}>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        Distrito
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }

}

export default DetailDistrito

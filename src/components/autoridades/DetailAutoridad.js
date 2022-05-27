import React, { useEffect, useState } from 'react'
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Autoridad } from '../../actions/AutoridadesActions'


const DetailAutoridad = (props) => {

    // Consultar Autoridad
    const [autoridad, setAutoridad] = useState({
        id: null,
        clave: '',
        descripcion: '',
    })
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Autoridad(props.autoridad_id)
            if (response.status === 200) {
                setAutoridad(response.data)
                setConsultado(true)
            }
        }
        fetchData()
    }, [props])

    if (consultado) {
        return (
            <Card sx={commonSX.card} elevation={4}>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        Autoridad
                    </Typography>
                </CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Clave"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={autoridad.clave}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Descripcion"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={autoridad.descripcion}
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
                        Autoridad
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }

}

export default DetailAutoridad

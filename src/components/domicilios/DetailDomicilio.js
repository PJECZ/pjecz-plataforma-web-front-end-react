import React, { useEffect, useState } from 'react'
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Domicilio } from '../../actions/DomiciliosActions'

const DetailDomicilio = ({ domicilio_id }) => {

    // Consultar Domicilio
    const [domicilio, setDomicilio] = useState({
        id: null,
        estado: '',
        municipio: '',
        calle: '',
        num_ext: '',
        num_int: '',
        colonia: '',
        cp: '',
        completo: '',
    })
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Domicilio(domicilio_id)
            if (response.status === 200) {
                setDomicilio(response.data)
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
                        Domicilio
                    </Typography>
                </CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Estado"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={domicilio.estado}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Municipio"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={domicilio.municipio}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Calle"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={domicilio.calle}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            label="No. Exterior"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={domicilio.num_ext}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            label="No. Interior"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={domicilio.num_int}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            label="Colonia"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={domicilio.colonia}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            label=""
                            type="text"
                            fullWidth
                            aria-readonly
                            value={domicilio.cp}
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
                        Domicilio
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }

}

export default DetailDomicilio

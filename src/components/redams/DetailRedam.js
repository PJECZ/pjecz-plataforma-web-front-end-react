import React, { useEffect, useState } from 'react'
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Redam } from '../../actions/RedamsActions'


const DetailRedam = ({ redam_id }) => {

    // Consultar Redam
    const [redam, setRedam] = useState({
        id: null,
        clave: '',
        descripcion: '',
    })
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Redam(redam_id)
            if (response.status === 200) {
                setRedam(response.data)
                setConsultado(true)
            }
        }
        fetchData()
    }, [redam_id])

    if (consultado) {
        return (
            <Card sx={commonSX.card} elevation={4}>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        REDAM Deudor Alimentario
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="ID"
                                type="text"
                                fullWidth
                                aria-readonly
                                value={redam.id}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Nombre"
                                type="text"
                                fullWidth
                                aria-readonly
                                value={redam.nombre}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    } else {
        return (
            <Card sx={commonSX.card}>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        REDAM Deudor Alimentario
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }
}

export default DetailRedam

import React, { useEffect, useState } from 'react'
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Modulo } from '../../actions/ModulosActions'


const DetailModulo = ({ modulo_id }) => {

    // Consultar Modulo
    const [modulo, setModulo] = useState({
        id: null,
        nombre: '',
    })
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Modulo(modulo_id)
            if (response.status === 200) {
                setModulo(response.data)
                setConsultado(true)
            }
        }
        fetchData()
    }, [modulo_id])

    if (consultado) {
        return (
            <Card sx={commonSX.card} elevation={4}>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        Modulo
                    </Typography>
                </CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Nombre"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={modulo.nombre}
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
                        Modulo
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }

}

export default DetailModulo

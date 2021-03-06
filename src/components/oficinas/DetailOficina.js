import React, { useEffect, useState } from 'react'
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Oficina } from '../../actions/OficinasActions'


const DetailOficina = ({ oficina_id }) => {

    // Consultar Oficina
    const [oficina, setOficina] = useState({
        id: null,
        clave: '',
        descripcion: '',
    })
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Oficina(oficina_id)
            if (response.status === 200) {
                setOficina(response.data)
                setConsultado(true)
            }
        }
        fetchData()
    }, [oficina_id])

    if (consultado) {
        return (
            <Card sx={commonSX.card} elevation={4}>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        Oficina
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Clave"
                                type="text"
                                fullWidth
                                aria-readonly
                                value={oficina.clave}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Descripcion"
                                type="text"
                                fullWidth
                                aria-readonly
                                value={oficina.descripcion}
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
                        Oficina
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }

}

export default DetailOficina

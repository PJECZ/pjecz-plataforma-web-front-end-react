import React, { useEffect, useState } from 'react'
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Materia } from '../../actions/MateriasActions'


const DetailMateria = ({ materia_id }) => {

    // Consultar Materia
    const [materia, setMateria] = useState({
        id: null,
        nombre: '',
    })
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Materia(materia_id)
            if (response.status === 200) {
                setMateria(response.data)
                setConsultado(true)
            }
        }
        fetchData()
    }, [materia_id])

    if (consultado) {
        return (
            <Card sx={commonSX.card} elevation={4}>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        Materia
                    </Typography>
                </CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Nombre"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={materia.nombre}
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
                        Materia
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }

}

export default DetailMateria

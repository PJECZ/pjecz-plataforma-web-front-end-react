import React, { useEffect, useState } from 'react'
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Rol } from '../../actions/RolesActions'


const DetailRol = ({ rol_id }) => {

    // Consultar Rol
    const [rol, setRol] = useState({
        id: null,
        nombre: '',
    })
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Rol(rol_id)
            if (response.status === 200) {
                setRol(response.data)
                setConsultado(true)
            }
        }
        fetchData()
    }, [rol_id])

    if (consultado) {
        return (
            <Card sx={commonSX.card} elevation={4}>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        Rol
                    </Typography>
                </CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Nombre"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={rol.nombre}
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
                        Rol
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }

}

export default DetailRol

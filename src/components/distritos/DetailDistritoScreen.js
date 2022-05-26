import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Grid, TextField, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Distrito } from '../../actions/DistritosActions'


const DetailDistritoScreen = () => {

    // Redirigir al login cuando no haya iniciado sesion
    const data = JSON.parse(window.localStorage.getItem('data'))
    const navigate = useNavigate()
    useEffect(() => {
        if (!data) {
            navigate('/login')
        }
    })

    // Consultar Distrito
    const { id } = useParams()
    const [distrito, setDistrito] = useState({
        id: null,
        nombre: '',
        nombre_corto: '',
    })
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Distrito(id)
            if (response.status === 200) {
                setDistrito(response.data)
                setConsultado(true)
            }
        }
        fetchData()
    }, [id])

    // Consultar Oficinas del Distrito
    //const [oficinas, setOficinas] = useState([])
    //const [consultadoOficinas, setConsultadoOficinas] = useState(false)
    //useEffect(() => {
    //    async function fetchData() {
    //        const response = await OficinasDelDistrito(id)
    //        if (response.status === 200) {
    //            setOficinas(response.data.items)
    //            setConsultadoOficinas(true)
    //        }
    //    }
    //    fetchData()
    //}, [])

    if (consultado) {
        return (
            <Container sx={commonSX.container}>
                <Typography variant='h5' sx={commonSX.title}>
                    Distrito
                </Typography>
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
            </Container>
        )
    } else {
        return (
            <Container sx={commonSX.container}>
                <Progress />
            </Container>
        )
    }

}

export default DetailDistritoScreen

import React, { useEffect, useState } from 'react'
import { Container, Grid, TextField, Typography } from '@mui/material'

import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'

import { Profile } from '../../actions/AuthActions'


const ProfileScreen = () => {

    // Revisar si ya esta logueado
    const [isLogged, setIsLogged] = useState(false)
    function checkStorage() {
        if (window.localStorage.getItem('data')) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }
    useEffect(() => {
        checkStorage()
        return () => {}
    }, [isLogged])

    // Consultar Perfil
    const [consultado, setConsultado] = useState(false)
    const [profile, setProfile] = useState({
        nombres: '',
        apellido_paterno: '',
        apellido_materno: '',
        curp: '',
        email: '',
        telefono_celular: '',
        distrito_nombre: '',
        autoridad_descripcion: '',
        oficina_clave: '',
    })
    useEffect(() => {
        async function fetchData() {
            const response = await Profile()
            if (response.status === 200) {
                setConsultado(true)
                setProfile(response.data)
            }
        }
        fetchData()
    }, [])

    if (consultado) {
        return (
            <Container sx={commonSX.container}>
                <Typography variant='h5' sx={commonSX.title}>
                    Mi perfil
                </Typography>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <TextField
                            label="Nombre"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={profile.nombres}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            label="CURP"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={profile.curp}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            label="Correo electronico"
                            type="email"
                            fullWidth
                            aria-readonly
                            value={profile.email}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            label="Telefono"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={profile.telefono_celular}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Distrito"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={profile.distrito_nombre}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Autoridad"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={profile.autoridad_descripcion}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Oficina"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={profile.oficina_clave}
                        />
                    </Grid>
                </Grid>
            </Container>
        )
    } else {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Esta fuera del sistema
                </Typography>
            </ContainerCardCenter>
        )
    }
}

export default ProfileScreen

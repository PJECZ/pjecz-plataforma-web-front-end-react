import React, { useEffect } from 'react'
import { Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { commonSX } from '../ui/commonSX'
import '../../css/global.css'


export const LogOutScreen = () => {

    // Redirigir a la raiz cuando no haya iniciado sesion
    const data = JSON.parse(window.localStorage.getItem('data'))
    const navigate = useNavigate()
    useEffect(() => {
        if (!data) {
            navigate('/')
        }
    })

    return (
        <Container sx={commonSX.container}>
            <Typography variant='h5' sx={commonSX.title}>
                Salir del sistema
            </Typography>
        </Container>
    )

}

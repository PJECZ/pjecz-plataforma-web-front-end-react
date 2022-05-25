import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Typography } from '@mui/material'
import commonSX from '../../theme/CommonSX'


const StartScreen = () => {

    // Redirigir al login cuando no haya iniciado sesion
    const data = JSON.parse(window.localStorage.getItem('data'))
    const navigate = useNavigate()
    useEffect(() => {
        if (!data) {
            navigate('/login')
        }
    })

    return (
        <Container sx={commonSX.container}>
            <Typography variant='h5' sx={commonSX.title}>
                Inicio
            </Typography>
        </Container>
    )

}

export default StartScreen

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/material'

import commonSX from '../../theme/CommonSX'


const CommonScreen = (props) => {

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
            {props.children}
        </Container>
    )

}

export default CommonScreen

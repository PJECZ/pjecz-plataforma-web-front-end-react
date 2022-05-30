import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/material'

import UserContext from '../../context/user/UserContext'

import commonSX from '../../theme/CommonSX'


const ContainerLoggedScreen = (props) => {

    // Obtener el contexto de usuario
    const { isLogged } = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogged) {
            navigate('/login') // Redirigir al login cuando no haya iniciado sesion
        }
    }, [])

    if (isLogged) {
        return (
            <Container sx={commonSX.container}>
                {props.children}
            </Container>
        )
    } else {
        return null
    }

}

export default ContainerLoggedScreen

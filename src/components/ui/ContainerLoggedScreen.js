import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/material'

import UserContext from '../../context/user/UserContext'

import commonSX from '../../theme/CommonSX'


const ContainerLoggedScreen = (props) => {

    // Obtener el contexto de usuario
    const { isLogged } = useContext(UserContext)

    // Redirigir al login cuando NO haya iniciado sesion
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogged) {
            navigate('/login')
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

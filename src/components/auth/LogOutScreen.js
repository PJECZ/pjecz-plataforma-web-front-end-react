import React, { useContext } from 'react'
import { Button, Typography } from '@mui/material'

import UserContext from '../../context/user/UserContext'

import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'
import { Link } from 'react-router-dom'


const LogOutScreen = () => {

    // Obtener el contexto de usuario
    const { isLogged, setLogOutUser } = useContext(UserContext)

    // Salir de la sesion
    const logOut = () => {
        window.localStorage.removeItem('token')
        setLogOutUser()
    }

    if (isLogged) {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Salir del sistema
                </Typography>
                <Button
                    variant='contained'
                    fullWidth
                    type='button'
                    onClick={logOut}
                >
                    Salir
                </Button>
            </ContainerCardCenter>
        )
    } else {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Esta fuera del sistema
                </Typography>
                <Typography variant='body1'>
                    <Link to='/' className='link'>
                        Volver al inicio
                    </Link>
                </Typography>
            </ContainerCardCenter>
        )
    }

}

export default LogOutScreen

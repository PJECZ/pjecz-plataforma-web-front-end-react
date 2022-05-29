import React, { useContext, useState } from 'react'
import { Button, Card, Grid, TextField, Typography } from '@mui/material'

import UserContext from '../../context/user/UserContext'

import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'

import { LogIn } from '../../actions/AuthActions'


const cleanFormData = {
    username: '',
    password: '',
}

const LogInScreen = () => {

    // Obtener el contexto de usuario
    const { isLogged, username, getUser } = useContext(UserContext)

    // Formulario
    const [formData, setFormValues] = useState({
        username: '',
        password: '',
    })
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    // Enviar el formulario
    const submitForm = () => {
        LogIn(formData).then((response) => {
            if (response.status === 200) {
                const { data } = response
                window.localStorage.setItem('token', data.access_token)
                getUser()
            } else {
                setIsError(true)
                setErrorMessage(response.data.detail)
            }
        })
        setFormValues(cleanFormData)
    }

    if (isLogged) {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Bienvenido {username}
                </Typography>
            </ContainerCardCenter>
        )
    } else if (isError) {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Error al tratar de ingresar
                </Typography>
                <Typography variant='body1'>
                    {errorMessage}
                </Typography>
            </ContainerCardCenter>
        )
    } else {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Ingresar a Plataforma Web
                </Typography>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Correo electronico"
                                type="email"
                                fullWidth
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Contraseña"
                                type="password"
                                fullWidth
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Card variant='outlined'>
                                <Typography variant='body1'>
                                    No soy un robot
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant='contained'
                                fullWidth
                                type='submit'
                                onClick={submitForm}
                            >
                                Ingresar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </ContainerCardCenter>
        )
    }

}

export default LogInScreen

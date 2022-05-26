import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Container, Grid, TextField, Typography } from '@mui/material'
import { LogIn } from '../../actions/AuthActions'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'


const cleanFormData = {
    username: '',
    password: '',
}

const LogInScreen = () => {

    // Redirigir a la pagina inicial cuando ya haya iniciado sesion
    const [isLogged, setIsLogged] = useState(false)
    const data = JSON.parse(window.localStorage.getItem('data'))
    const navigate = useNavigate()
    useEffect(() => {
        if (data) {
            setIsLogged(true)
            navigate('/')
        }
    })

    // Formulario de login
    const [formData, setFormValues] = useState({
        username: '',
        password: '',
    })
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    // Observar los cambios en los campos del formulario
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    // Enviar el formulario de login
    const submitForm = () => {
        LogIn(formData).then((response) => {
            if (response.status === 200) {
                setIsLogged(true)
                const { data } = response
                window.localStorage.setItem('data', JSON.stringify(data))
            } else {
                setIsError(true)
                setErrorMessage(response.data.detail)
            }
        })
        setFormValues(cleanFormData)
    }

    if (isLogged) {
        return (
            <Container sx={commonSX.container}>
                <Typography variant='h5' sx={commonSX.title}>
                    Bienvenido
                </Typography>
            </Container>
        )
    } else if (isError) {
        return (
            <Container sx={commonSX.container}>
                <Grid container spacing={2}>
                    <Grid item md={3} xs={12}></Grid>
                    <Grid item md={6} xs={12}>
                        <Card align='center' sx={commonSX.card}>
                            <Typography variant='h5' sx={commonSX.title}>
                                Error al tratar de ingresar
                            </Typography>
                            <Typography variant='body1'>
                                {errorMessage}
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}></Grid>
                </Grid>
            </Container>
        )
    } else {
        return (
            <Container sx={commonSX.container}>
                <Grid container spacing={2}>
                    <Grid item md={3} xs={12}></Grid>
                    <Grid item md={6} xs={12}>
                        <Card align='center' sx={commonSX.card}>
                            <Typography variant='h5' sx={commonSX.title}>
                                Plataforma Web V3.0
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
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}></Grid>
                </Grid>
            </Container>
        )
    }

}

export default LogInScreen

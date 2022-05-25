import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Modulos } from '../../actions/ModulosActions'


const ModulosScreen = () => {

    // Redirigir al login cuando no haya iniciado sesion
    const data = JSON.parse(window.localStorage.getItem('data'))
    const navigate = useNavigate()
    useEffect(() => {
        if (!data) {
            navigate('/login')
        }
    })

    // Consultar Modulos
    const [datos, setDatos] = useState([])
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Modulos()
            if (response.status === 200) {
                setDatos(response.data.items)
                setConsultado(true)
            }
        }
        fetchData()
    }, [])

    if (consultado) {
        return (
            <Container sx={commonSX.container}>
                <Typography variant='h5' sx={commonSX.title}>
                    Modulos
                </Typography>
                <Card variant='outlined'>
                    <TableContainer componet={Paper}>
                        <Table size="small">
                            <TableBody>
                                {datos.map((item, indice) =>
                                    <TableRow key={indice}>
                                        <TableCell>
                                            {item.nombre}
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
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

export default ModulosScreen

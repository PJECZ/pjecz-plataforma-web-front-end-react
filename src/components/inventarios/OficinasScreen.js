import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Oficinas } from '../../actions/OficinasActions'


const OficinasScreen = () => {

    // Redirigir al login cuando no haya iniciado sesion
    const data = JSON.parse(window.localStorage.getItem('data'))
    const navigate = useNavigate()
    useEffect(() => {
        if (!data) {
            navigate('/login')
        }
    })

    // Consultar Oficinas
    const [oficinas, setOficinas] = useState([])
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Oficinas()
            if (response.status === 200) {
                setOficinas(response.data.items)
                setConsultado(true)
            }
        }
        fetchData()
    }, [])

    if (consultado) {
        return(
            <Container sx={commonSX.container}>
                <Typography variant='h5' sx={commonSX.title}>
                    Oficinas
                </Typography>
                <Card variant='outlined'>
                    <TableContainer componet={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Clave</TableCell>
                                    <TableCell>Descripcion</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {oficinas.map((oficina, indice) =>
                                    <TableRow key={indice}>
                                        <TableCell>{oficina.clave}</TableCell>
                                        <TableCell>{oficina.descripcion}</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </Container>
        )
    } else {
        return(
            <Container sx={commonSX.container}>
                <Progress />
            </Container>
        )
    }

}

export default OficinasScreen

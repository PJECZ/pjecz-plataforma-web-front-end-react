import React, { useState, useEffect } from 'react'
import { Card, Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Materias } from '../../actions/MateriasActions'
import commonSX from '../../theme/CommonSX'


const MateriasScreen = () => {

    // Redirigir a la raiz cuando no haya iniciado sesion
    const data = JSON.parse(window.localStorage.getItem('data'))
    const navigate = useNavigate()
    useEffect(() => {
        if (!data) {
            navigate('/')
        }
    })

    const [datos, setDatos] = useState([])
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Materias()
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
                    Materias
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
                <Typography variant='h3' sx={commonSX.title}>
                    Cargando...
                </Typography>
            </Container>
        )
    }

}

export default MateriasScreen

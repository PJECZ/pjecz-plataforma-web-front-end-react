import React, { useEffect, useState } from 'react'
import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Modulos } from '../../actions/ModulosActions'


const ListModulos = () => {

    // Consultar Modulos
    const [modulos, setModulos] = useState([])
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Modulos()
            if (response.status === 200) {
                setModulos(response.data.items)
                setConsultado(true)
            }
        }
        fetchData()
    }, [])

    if (consultado) {
        return (
            <Card sx={commonSX.card} elevation={4}>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        Modulos
                    </Typography>
                    <TableContainer componet={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {modulos.map((modulo, indice) =>
                                    <TableRow key={indice}>
                                        <TableCell>
                                            <Link to={`/modulos/${modulo.id}`} className='link'>
                                                {modulo.nombre}
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                        </TableContainer>
                </CardContent>
            </Card>
        )
    } else {
        return (
            <Card sx={commonSX.card}>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        Modulos
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }

}

export default ListModulos

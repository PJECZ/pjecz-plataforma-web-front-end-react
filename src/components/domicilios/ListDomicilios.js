import React, { useEffect, useState } from 'react'
import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Domicilios } from '../../actions/DomiciliosActions'


const ListDomicilios = () => {

    // Consultar Domicilios
    const [domicilios, setDomicilios] = useState([])
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Domicilios()
            if (response.status === 200) {
                setDomicilios(response.data.items)
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
                        Domicilios
                    </Typography>
                    <TableContainer componet={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Completo</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {domicilios.map((domicilio, indice) =>
                                    <TableRow key={indice}>
                                        <TableCell>
                                            <Link to={`/domicilios/${domicilio.id}`} className='link'>
                                                {domicilio.completo}
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
                        Domicilios
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }

}

export default ListDomicilios

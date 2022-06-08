import React, { useEffect, useState } from 'react'
import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Redams } from '../../actions/RedamsActions'


const ListRedams = (props) => {

    // Consultar REDAM
    const [redams, setRedams] = useState([])
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Redams(props)
            if (response.status === 200) {
                setRedams(response.data.items)
                setConsultado(true)
            }
        }
        fetchData()
    }, [props])

    if (consultado) {
        return (
            <Card sx={commonSX.card} elevation={4}>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        REDAM Deudores Alimentarios
                    </Typography>
                    <TableContainer componet={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Nombre</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {redams.map((redam, indice) =>
                                    <TableRow key={indice}>
                                        <TableCell>
                                            <Link to={`/redam/${redam.id}`} className='link'>
                                                {redam.id}
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            {redam.nombre}
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
                        REDAM Deudores Alimentarios
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }

}

export default ListRedams

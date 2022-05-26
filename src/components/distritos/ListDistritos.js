import React, { useEffect, useState } from 'react'
import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Distritos } from '../../actions/DistritosActions'


const ListDistritos = () => {

    // Consultar Distritos
    const [distritos, setDistritos] = useState([])
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Distritos()
            if (response.status === 200) {
                setDistritos(response.data.items)
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
                        Distritos
                    </Typography>
                    <TableContainer componet={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {distritos.map((distrito, indice) =>
                                    <TableRow key={indice}>
                                        <TableCell>
                                            <Link to={`/distritos/${distrito.id}`} className='link'>
                                                {distrito.nombre}
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
                        Distritos
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }

}

export default ListDistritos

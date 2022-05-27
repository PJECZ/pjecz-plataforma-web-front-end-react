import React, { useEffect, useState } from 'react'
import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Autoridades } from '../../actions/AutoridadesActions'


const ListAutoridades = () => {

    // Consultar Autoridades
    const [autoridades, setAutoridades] = useState([])
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Autoridades()
            if (response.status === 200) {
                setAutoridades(response.data.items)
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
                        Autoridades
                    </Typography>
                    <TableContainer componet={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Clave</TableCell>
                                    <TableCell>Descripcion</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {autoridades.map((autoridad, indice) =>
                                    <TableRow key={indice}>
                                        <TableCell>
                                            <Link to={`/autoridades/${autoridad.id}`} className='link'>
                                                {autoridad.clave}
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            {autoridad.descripcion}
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
                        Autoridades
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }

}

export default ListAutoridades

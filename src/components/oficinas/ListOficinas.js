import React, { useEffect, useState } from 'react'
import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Oficinas } from '../../actions/OficinasActions'


const ListOficinas = (props) => {

    console.log(props)

    // Consultar Oficinas
    const [oficinas, setOficinas] = useState([])
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Oficinas(props)
            if (response.status === 200) {
                setOficinas(response.data.items)
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
                        Oficinas
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
                                {oficinas.map((oficina, indice) =>
                                    <TableRow key={indice}>
                                        <TableCell>
                                            <Link to={`/oficinas/${oficina.id}`} className='link'>
                                                {oficina.clave}
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            {oficina.descripcion}
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
                        Oficinas
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }

}

export default ListOficinas

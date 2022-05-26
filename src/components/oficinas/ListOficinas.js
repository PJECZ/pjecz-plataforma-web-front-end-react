import React, { useEffect, useState } from 'react'
import { Card, CardContent, Paper, Table, TableBody, TableContainer, TableHead } from '@mui/material'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Oficinas } from '../../actions/OficinasActions'


const ListOficinas = () => {

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
        return (
            <Card>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        Oficinas
                    </Typography>
                    <TableContainer componet={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableCell>Clave</TableCell>
                                <TableCell>Descripcion</TableCell>
                            </TableHead>
                            <TableBody>
                                {oficinas.map((oficina, indice) =>
                                    <TableRow key={indice}>
                                        <TableCell>
                                            <Link to={`/autoridades/oficinas/${oficina.id}`} className='link'>
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
            <Card>
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

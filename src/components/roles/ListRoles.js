import React, { useEffect, useState } from 'react'
import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Roles } from '../../actions/RolesActions'


const ListRoles = () => {

    // Consultar Roles
    const [roles, setRoles] = useState([])
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Roles()
            if (response.status === 200) {
                setRoles(response.data.items)
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
                        Roles
                    </Typography>
                    <TableContainer componet={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {roles.map((rol, indice) =>
                                    <TableRow key={indice}>
                                        <TableCell>
                                            <Link to={`/roles/${rol.id}`} className='link'>
                                                {rol.nombre}
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
                        Roles
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }

}

export default ListRoles

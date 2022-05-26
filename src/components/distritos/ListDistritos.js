import React, { useEffect, useState } from 'react'
import { Card, CardContent, Paper } from '@mui/material'

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
            <Card>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        Distritos
                    </Typography>
                    <TableContainer componet={Paper}>
                        <Table size="small">
                            <TableBody>
                                {distritos.map((distrito, indice) =>
                                    <TableRow key={indice}>
                                        <TableCell>
                                            <Link to={`/autoridades/distritos/${distrito.id}`} className='link'>
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
            <Card>
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

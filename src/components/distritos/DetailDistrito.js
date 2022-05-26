import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'
import Progress from '../ui/Progress'

import { Distrito } from '../../actions/DistritosActions'


const DetailDistrito = () => {

    // Consultar Distrito
    const { id } = useParams()
    const [distrito, setDistrito] = useState({
        id: null,
        nombre: '',
        nombre_corto: '',
    })
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Distrito(id)
            if (response.status === 200) {
                setDistrito(response.data)
                setConsultado(true)
            }
        }
        fetchData()
    }, [id])

    if (consultado) {
        return (
            <Card>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        Distrito
                    </Typography>
                </CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Nombre"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={distrito.nombre}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Nombre corto"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={distrito.nombre_corto}
                        />
                    </Grid>
                </Grid>
            </Card>
        )
    } else {
        return (
            <Card>
                <CardContent>
                    <Typography variant='h5' sx={commonSX.title}>
                        Distrito
                    </Typography>
                    <Progress />
                </CardContent>
            </Card>
        )
    }

}

export default DetailDistrito

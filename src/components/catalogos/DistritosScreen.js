import React, { useState, useEffect } from 'react';
import { Card, Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { Distritos } from '../../actions/DistritosActions';


export const DistritosScreen = () => {

    const [datos, setDatos] = useState([]);
    const [consultado, setConsultado] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await Distritos();
            if (response.status === 200) {
                setDatos(response.data.items);
                setConsultado(true);
            }
        }
        fetchData();
    }, []);

    if (consultado) {
        return (
            <Container sx={{ marginTop: 12 }}>
                <Typography variant='h3' sx={{ marginBottom: 2 }}>Distritos</Typography>
                <Card variant='outlined'>
                    <TableContainer componet={Paper}>
                        <Table size="small">
                            <TableBody>
                                {datos.map((item, indice) =>
                                    <TableRow key={indice}>
                                        <TableCell>
                                            {item.nombre}
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </Container>
        );
    } else {
        return (
            <Container sx={{ marginTop: 12 }}>
                <Typography variant='h3'>Cargando...</Typography>
            </Container>
        );
    };

}

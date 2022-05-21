import React from 'react';
import { Container, Typography } from '@mui/material';
import { commonSX } from '../ui/commonSX';
import '../../css/global.css';


export const LogOutScreen = () => {
    return (
        <Container sx={commonSX.container}>
            <Typography variant='h5' sx={commonSX.title}>
                Salir del sistema
            </Typography>
        </Container>
    );
}

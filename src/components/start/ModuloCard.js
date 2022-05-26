import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Paper, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'


const ModuloCard = (props) => {

    const moduloCardStyles = {
        paper: {
            height: 120,
            width: 180,
            margin: 4,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        },
    }

    return (
        <Link to={props.link}>
            <Paper elevation={3} sx={moduloCardStyles.paper}>
                <Box textAlign='center'>
                    <RocketLaunchIcon fontSize='large' />
                    <Box>
                        <Typography variant='body1'>
                            {props.title}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Link>
    )

}

export default ModuloCard

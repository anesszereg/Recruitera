import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        width: '264px',
        height: '135px',
        padding: '26px 24px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '8px',
        border: '1px solid #f5f5f5',
        backgroundColor: 'white',
    },
})

function CvCard({ icon: Icon, text }) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Box sx={{
                color: 'rgba(36, 99, 235, 1)',
            }}>

            <Icon size={30} color='rgba(36, 99, 235, 1)' />
            </Box>
            <Typography variant="h6" color="initial">
                {text}
            </Typography>
        </div>
    )
}

export default CvCard

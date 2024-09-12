import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { ImCheckmark } from "react-icons/im";


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '10px',
        width: '369px',
        padding: '20px 40px',
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
        border: '1px solid #f5f5f5',
        height: '196px'
    },

})

function AnalytcsCart() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Box sx={{
                display: 'flex',
                gap: '10px',
                alignItems: "center"
            }}>
                <ImCheckmark size={15} />
                <span>Complete Onboarding</span>

            </Box>
            <Box sx={{
                display: 'flex',
                gap: '10px',
                alignItems: "center"
            }}>
                <ImCheckmark size={15} />
                <span>Complete Onboarding</span>

            </Box>
            <Box sx={{
                display: 'flex',
                gap: '10px',
                alignItems: "center"
            }}>
                <ImCheckmark size={15} />
                <span>Complete Onboarding</span>

            </Box>
            <Box sx={{
                display: 'flex',
                gap: '10px',
                alignItems: "center"
            }}>
                <ImCheckmark size={15} />
                <span>Complete Onboarding</span>

            </Box>
            <Box sx={{
                display: 'flex',
                gap: '10px',
                alignItems: "center"
            }}>
                <ImCheckmark size={15} />
                <span>Complete Onboarding</span>

            </Box>

        </div>
    )
}

export default AnalytcsCart
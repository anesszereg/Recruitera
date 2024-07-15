import { makeStyles } from '@mui/styles'
import React from 'react'
import Typography from '@mui/material/Typography'
import { Avatar, Box } from '@mui/material'

import image from '../assets/images/noone.png'




const useStyles = makeStyles({

    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:'15px'


    
    }
,
    nbr_project:{
        width: '100px',
        height: 'fit-content',
        borderRadius: '4px',
        padding: '4px ',
        backgroundColor:'rgba(143, 255, 0, 0.15)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    }


})

function User({url , name, role , nbr_project}) {

    const classes = useStyles()
console.log('====================================');
console.log(role , name);
console.log('====================================');

  return (
    <div className={classes.container}>
        <Box display='flex' alignItems='center' gap='15px'>

            <Avatar alt="Cindy Baker" src={image} sx={{ width: 48, height: 48 }} />
            <Box display='flex' flexDirection='column' gap='4px' >
                <Typography fontSize={'14px'} color="initial">{name}</Typography>
                <Typography fontSize={'10px' } fontWeight={'600'} color="rgba(126, 126, 126, 1)">
                    {role}
                </Typography>

            </Box>

        </Box>
        <div className={classes.nbr_project}>
            <Typography fontSize={'14px'} color="rgba(0, 183, 7, 1)">{nbr_project}</Typography>

        </div>
    </div>
  )
}

export default User
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    TextField, Typography,
    Grid
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { buttonStyles } from '../Layout/buttonStyles';
import { TiArrowRight, TiUserAdd } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { createMaterial } from '../Redux/MaterialSlice';
import Material from '../Pages/Material';
import { CiEdit } from "react-icons/ci";





const useStyles = makeStyles({
    dialogStyle: {
        width: '600px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginLeft:'100px',
        overflow: 'hidden',

    },
    labelText: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#000',
        marginBottom: '5px'
    }
});

function MaterilaDetails({ isDialogOpen, onCloseDialog }) {


    const classes = useStyles();
    const dispatch = useDispatch();
    const material = useSelector(state => state.material.materials);
    const user = useSelector(state => state.user.user);
    console.log('====================================');
    console.log(material);
    console.log('====================================');

    

    return (
        <Dialog open={isDialogOpen} onClose={onCloseDialog} sx={{
            '& .MuiPaper-root': {
                width: '50%',
                maxWidth: '50%',
                height: '450px',
                padding: '20px',
                borderRadius: '24px',
                overflow: 'hidden'
            }
        }}>
            <DialogTitle fontSize={'24px'} fontWeight={'500'}>Details du material :</DialogTitle>
            <DialogContent sx={{ width: '100%', padding: '30px' , display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',}}>
            <div className={classes.dialogStyle}>
    <Grid container spacing={2} xs={{gap:'20px' ,justifyContent: 'center', alignItems: 'center', width:'100%'}}>
      <Grid item xs={6 }>
        <Box display='flex' alignItems={'center'} gap='10px' marginTop='20px'>
          <Typography variant="body1" color="#7E7E7E">Designation: </Typography>
          <Typography variant="body2" color="initial">{material[0].Designation} </Typography>
        </Box>
        <Box display='flex' alignItems={'center'} gap='10px' marginTop='20px'>
          <Typography variant="body1" color="#7E7E7E">Constructeur: </Typography>
          <Typography variant="body2" color="initial">{material[0].Constructeur} </Typography>
        </Box>
        <Box display='flex' alignItems={'center'} gap='10px' marginTop='20px'>
          <Typography variant="body1" color="#7E7E7E">Etendu: </Typography>
          <Typography variant="body2" color="initial">{material[0].Etendu} </Typography>
        </Box>
        <Box display='flex' alignItems={'center'} gap='10px' marginTop='20px'>
          <Typography variant="body1" color="#7E7E7E">Numero de serie: </Typography>
          <Typography variant="body2" color="initial">{material[0].Numero_de_serie} </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box display='flex' alignItems={'center'} gap='10px' marginTop='20px'>
          <Typography variant="body1" color="#7E7E7E">Classe: </Typography>
          <Typography variant="body2" color="initial">{material[0].Classe} </Typography>
        </Box>
        <Box display='flex' alignItems={'center'} gap='10px' marginTop='20px'>
          <Typography variant="body1" color="#7E7E7E">Unite: </Typography>
          <Typography variant="body2" color="initial">{material[0].Unite} </Typography>
        </Box>
        <Box display='flex' alignItems={'center'} gap='10px' marginTop='20px'>
          <Typography variant="body1" color="#7E7E7E">Resolution: </Typography>
          <Typography variant="body2" color="initial">{material[0].Resolution} </Typography>
        </Box>
        <Box display='flex' alignItems={'center'} gap='10px' marginTop='20px'>
          <Typography variant="body1" color="#7E7E7E">Identification: </Typography>
          <Typography variant="body2" color="initial">{material[0].Identification} </Typography>
        </Box>
      </Grid>
    </Grid>
  </div>

 

            </DialogContent>
            {user.isAdmin? <DialogActions>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap='20px'marginRight={'70px'} marginBottom='-50px'>
    <Box sx={{
        backgroundColor:'rgba(143, 255, 0, 0.15)',
        borderRadius:'8px',
        display:'flex',
      
        gap:'10px',
        padding:'30px 10px',
        

    }}><Typography variant="body1" color="initial">Nom de l'employé 1</Typography></Box>
    <Box  sx={{
        backgroundColor:'rgba(255, 243, 183, 1)',
        borderRadius:'8px',
        display:'flex',
      
        gap:'10px',
        padding:'30px 10px',
        

    }}><Typography variant="body1" color="initial">Nom de l'employé 2</Typography></Box>
    <Box  sx={{
        backgroundColor:'rgba(255, 0, 31, 0.1)',
        borderRadius:'8px',
        display:'flex',
      
        gap:'10px',
        padding:'30px 10px',
        

    }}><Typography variant="body1" color="initial">Nom de l'employé 3</Typography></Box>
  </Box>
                <Button sx={{ ...buttonStyles.primary, height: '40px' }}>
                <CiEdit  size={20}/>
                </Button>

            </DialogActions>:
              <DialogContent sx={{ display: 'flex', justifyContent: 'flex-end' }}>

            <Button  sx={{ ...buttonStyles.primary, height: '40px' }}>
                <CiEdit size={20}/>
        </Button>
              </DialogContent>
            }
        </Dialog>
    );
}

export default MaterilaDetails;

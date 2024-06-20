import React, { useState } from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    TextField,
    Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TiUserAdd } from "react-icons/ti";
import { LuFolderPlus } from 'react-icons/lu';
import { MdFactory } from 'react-icons/md';






const useStyles = makeStyles({

    dailog_style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'

    },
    label_text:{
        fontSize:'14px',
        fontWeight:'500',
        color:'#000',
        marginBottom:'5px'

    }



});



//! style buttons :
const buttons = {
    type_site: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#F5F5F5',
        borderRadius: '8px',
        border: '1px solid #D3D3D3',
        width: '150px',
        height: '150px',
        cursor: 'pointer'
    },
    greyButton: {
        backgroundColor: '#E0E0E0',
        color: '#000'
    },
    primaryButoon: {
        backgroundColor: '#5356FF',
    color: '#fff',
    borderRadius: '5px',
    padding: '0 20px',
    border: '1px solid #5356FF',
    textTransform: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    '&:hover': {
        backgroundColor: '#fff',
        color: '#5356FF',
        border: '1px solid #5356FF'
    }
    },
    greenButton:{
        backgroundColor: 'rgba(143, 255, 0, 0.15)',
    color: '#fff',
    borderRadius: '5px',
    padding: '8px 30px',
    border: '1px solid #00B707',
    textTransform: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    '&:hover': {
        backgroundColor: '#fff',
        color: '#00B707',
        border: '1px solid #00B707'
    }

    }
};



function AddEmpeloyee({ isDialogOpen, onCloseDialog ,onAddClient }) {


    const classes = useStyles();
    const [count, setCount] = useState(0)
    const handleAddEmployee = () => {
        // Your logic to handle adding a site
        console.log('Site added');
            // Pass the form data to the parent component
            onAddClient(formData);
            // Optionally close the dialog after adding the client
            onCloseDialog();
    };

    const [formData, setFormData] = useState({
        name: '',
        prenom:'',
        email: '',
        qualification: '',
        ProjectCount:0,
        // make an increment for the Id:
        Id: count



        
    });


    
    const handleChange = (e) => {
        const { name, value } = e.target;

        // If you need to increment the id on every change
        setCount(prevCount => {
            const newCount = prevCount + 1;
            setFormData({
                ...formData,
                [name]: value,
                id: newCount
            });
            return newCount;
        });
    };


  return (
    <div><Dialog open={isDialogOpen} onClose={onCloseDialog} sx={{
        '& .MuiPaper-root': {
            width: '50%',
            maxWidth: '50%',
            height: '50%',
            padding: '20px',
            borderRadius: '24px'
        }
    }}>
        <DialogTitle fontSize={'24px'} fontWeight={'500'}>Ajouter un Clinet :</DialogTitle>
        <DialogContent sx={{width:'100%',padding:'30px'}}>

                <div className={classes.dailog_style}>
                <Box display={'flex'} gap={'20px'} width={'100%'} justifyContent={'center'}  >
                    <Box display='flex' flexDirection='column' >

                    <label className={classes.label_text} htmlFor="newSiteData.Nom">Nom:</label>
                    <TextField
                    sx={{
                        '& .MuiInputBase-root':{
                            height:'40px',

                        },
                    
                        width:'300px',
                        marginTop:'4px',
                    }}

                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        name='name'
                        />
                        </Box><Box display='flex' flexDirection='column' >

                        <label className={classes.label_text} htmlFor="newSiteData.Nom">Prenom:</label>
                    <TextField
                         sx={{
                            '& .MuiInputBase-root':{
                                height:'40px',
                            },
                              marginTop:'4px',
                              width:'300px',
                            
                        }}
                    value={formData.prenom}
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                    name='prenom'
                    />
                </Box>
                </Box>
                <Box display={'flex'} gap={'20px'} width={'100%'}   justifyContent={'center'}>
                    <Box display='flex' flexDirection='column' width={'84%'} >

                    <label className={classes.label_text} htmlFor="newSiteData.Nom" >Adresse email :</label>
                    <TextField
                    sx={{
                        '& .MuiInputBase-root':{
                            height:'40px',


                        },
                    
                        marginTop:'4px',
                        width:'100%',
                    }}

                        value={formData.email}
                        fullWidth
                        margin="normal"
                        onChange={handleChange}
                        name="email"
                        />
                        </Box>
                </Box>


                <Box width={'84%'} >
                        <label className={classes.label_text} htmlFor="newSiteData.Nom" >Qualification:</label>
                        <Box display={'flex'} gap={'20px'} marginTop={'10px'}>

                            <Button sx={buttons.greenButton}>
                                <Typography variant="subtitle2" color="initial">niveau 1</Typography>
                            </Button>
                            <Button  sx={buttons.greenButton}>
                                <Typography variant="subtitle2" color="initial">niveau 1</Typography>
                            </Button>
                            <Button  sx={buttons.greenButton}>
                                <Typography variant="subtitle2" color="initial">niveau 1</Typography>
                            </Button>
                        </Box>
                            
                        </Box>
                </div>

           
        </DialogContent>
        <DialogActions>
             
                <Button onClick={handleAddEmployee} sx={{ ...buttons.primaryButoon, height: '40px' }}> Ajouter un Employee  <TiUserAdd size={20} /></Button>

        </DialogActions>
    </Dialog></div>
  )
}

export default AddEmpeloyee


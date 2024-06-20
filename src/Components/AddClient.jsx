import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    TextField, Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
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


function AddClient({ isDialogOpen, onCloseDialog ,onAddClient }) {

    const classes = useStyles();

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
        }
    };

    const handleAddClient = () => {
        // Your logic to handle adding a site
        console.log('Site added');
            // Pass the form data to the parent component
            onAddClient(formData);
            // Optionally close the dialog after adding the client
            onCloseDialog();
    };

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        otherAddress: '',
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }


    
    return (
        <div>
            <Dialog open={isDialogOpen} onClose={onCloseDialog} sx={{
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

                                <label className={classes.label_text} htmlFor="newSiteData.Nom">Prenom :</label>
                            <TextField
                                 sx={{
                                    '& .MuiInputBase-root':{
                                        height:'40px',
                                    },
                                      marginTop:'4px',
                                      width:'300px',
                                    
                                }}
                            value={formData.address}
                            fullWidth
                            margin="normal"
                            onChange={handleChange}
                            name='address'
                            />
                        </Box>
                        </Box>
                        <Box display={'flex'} gap={'20px'} width={'100%'}   justifyContent={'center'}>
                            <Box display='flex' flexDirection='column' >

                            <label className={classes.label_text} htmlFor="newSiteData.Nom" >Adresse email :</label>
                            <TextField
                            sx={{
                                '& .MuiInputBase-root':{
                                    height:'40px',


                                },
                            
                                marginTop:'4px',
                                width:'300px',
                            }}

                                value={formData.email}
                                fullWidth
                                margin="normal"
                                onChange={handleChange}
                                name="email"
                                />
                                </Box><Box display='flex' flexDirection='column' >

                                <label className={classes.label_text} htmlFor="newSiteData.Nom">Telephone:</label>
                            <TextField
                                 sx={{
                                    '& .MuiInputBase-root':{
                                        height:'40px',
                                    },
                                      marginTop:'4px',
                                      width:'300px',
                                    
                                }}
                            value={formData.otherAddress}
                            fullWidth
                            margin="normal"
                            onChange={handleChange}
                            name='otherAddress'
                            />
                        </Box>
                        </Box>

                       
                        </div>

                   
                </DialogContent>
                <DialogActions>
                     
                        <Button onClick={handleAddClient} sx={{ ...buttons.primaryButoon, height: '40px' }}><LuFolderPlus size={20}/>  Ajouter Client </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddClient;

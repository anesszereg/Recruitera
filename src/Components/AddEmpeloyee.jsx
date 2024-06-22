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
import { buttonStyles } from '../Layout/buttonStyles';






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
        setCount(count => {
            const newCount = count + 1;
            setFormData({
                ...formData,
                [name]: value,
                id: newCount
            });
            return newCount;
        });
    };


    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (level) => {
        setSelectedButton(level);
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

                        <Button
                sx={selectedButton === 1 ? buttonStyles.greenButton : buttonStyles.greyButton}
                onClick={() => handleButtonClick(1)}
            >
                <Typography variant="subtitle2" color="initial">niveau 1</Typography>
            </Button>
            <Button
                sx={selectedButton === 2 ? buttonStyles.greenButton : buttonStyles.greyButton}
                onClick={() => handleButtonClick(2)}
            >
                <Typography variant="subtitle2" color="initial">niveau 2</Typography>
            </Button>
            <Button
                sx={selectedButton === 3 ? buttonStyles.greenButton : buttonStyles.greyButton}
                onClick={() => handleButtonClick(3)}
            >
                <Typography variant="subtitle2" color="initial">niveau 3</Typography>
            </Button>
                        </Box>
                            
                        </Box>
                </div>

           
        </DialogContent>
        <DialogActions>
             
                <Button onClick={handleAddEmployee} sx={{ ...buttonStyles.primary, height: '40px' }}> Ajouter un Employee  <TiUserAdd size={20} /></Button>

        </DialogActions>
    </Dialog></div>
  )
}

export default AddEmpeloyee


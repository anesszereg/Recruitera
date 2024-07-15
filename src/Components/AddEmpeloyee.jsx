import React, { useState } from 'react';
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
import { buttonStyles } from '../Layout/buttonStyles';

import { useDispatch } from 'react-redux';
import { createUser } from '../Redux/userSlice';

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
    label_text: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#000',
        marginBottom: '5px'
    }
});

function AddEmployee({ isDialogOpen, onCloseDialog }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [selectedButton, setSelectedButton] = useState('');
    const [newUser, setNewUser] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        phone: "",
        address: "",
        image: "",
        status: true
    });

    const handleButtonClick = (level) => {
        setSelectedButton(level);
    };

    const handleAddEmployee = () => {
        const formData = {
            nom: newUser.nom,
            prenom: newUser.prenom,
            password: newUser.password,
            isAdmin: false,
            email: newUser.email,
            phone: '+213.....',
            address: 'Algeria',
            experience: "level 1",
            image: 'path/to/image.jpg',
            status: true
        };

        console.log(newUser.nom);
        console.log(formData);
        dispatch(createUser(formData)); // Dispatch the action to add the employee
        onCloseDialog(); // Optionally close the dialog after adding the employee
    };

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }

    return (
        <Dialog
            open={isDialogOpen}
            onClose={onCloseDialog}
            sx={{
                '& .MuiPaper-root': {
                    width: '50%',
                    maxWidth: '50%',
                    height: 'auto',
                    padding: '20px',
                    borderRadius: '24px'
                }
            }}
        >
            <DialogTitle fontSize={'24px'} fontWeight={'500'}>
                Ajouter un Employer :
            </DialogTitle>
            <DialogContent sx={{ width: '100%', padding: '30px' }}>
                <div className={classes.dailog_style}>
                    <Box display={'flex'} gap={'20px'} width={'100%'} justifyContent={'center'}>
                        <Box display='flex' flexDirection='column'>
                            <label className={classes.label_text} htmlFor="newSiteData.Nom">
                                Nom:
                            </label>
                            <TextField
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: '40px'
                                    },
                                    width: '300px',
                                    marginTop: '4px'
                                }}
                                value={newUser.nom}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                name="nom" // Corrected name attribute
                            />
                        </Box>
                        <Box display='flex' flexDirection='column'>
                            <label className={classes.label_text} htmlFor="newSiteData.Nom">
                                Prenom:
                            </label>
                            <TextField
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: '40px'
                                    },
                                    marginTop: '4px',
                                    width: '300px'
                                }}
                                value={newUser.prenom}
                                fullWidth
                                margin="normal"
                                onChange={handleChange}
                                name="prenom"
                            />
                        </Box>
                    </Box>
                    <Box display={'flex'} gap={'20px'} width={'100%'} justifyContent={'center'}>
                        <Box display='flex' flexDirection='column' width={'40%'}>
                            <label className={classes.label_text} htmlFor="newSiteData.Nom">
                                Adresse email :
                            </label>
                            <TextField
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: '40px'
                                    },
                                    marginTop: '4px',
                                    width: '100%'
                                }}
                                value={newUser.email}
                                fullWidth
                                margin="normal"
                                onChange={handleChange}
                                name="email"
                            />
                        </Box>
                        <Box display='flex' flexDirection='column' width={'40%'}>
                            <label className={classes.label_text} htmlFor="newSiteData.Nom">
                                Password:
                            </label>
                            <TextField
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: '40px'
                                    },
                                    marginTop: '4px',
                                    width: '100%'
                                }}
                                value={newUser.password}
                                fullWidth
                                margin="normal"
                                onChange={handleChange}
                                name="password"
                            />
                        </Box>
                    </Box>
                    <Box width={'84%'}>
                        <label className={classes.label_text} htmlFor="newSiteData.Nom">
                            Qualification:
                        </label>
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
                <Button onClick={handleAddEmployee} sx={{ ...buttonStyles.primary, height: '40px' }}>
                    Ajouter un Employee <TiUserAdd size={20} />
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddEmployee;

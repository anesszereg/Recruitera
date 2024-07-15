import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControl, InputLabel, Select, MenuItem, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TiArrowRight } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { createMaterial } from '../Redux/MaterialSlice';
import { buttonStyles } from '../Layout/buttonStyles';

const useStyles = makeStyles({
    dialogStyle: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '10px'
    },
    labelText: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#000',
        marginBottom: '5px'
    }
});

function SelectMaterial({ isDialogOpen, onCloseDialog }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const materials = useSelector(state => state.material.materials);
    console.log('====================================');
    console.log(materials);
    console.log('====================================');
    const users = useSelector(state => state.user.users);
    console.log('====================================');
    console.log(
        users
    );
    console.log('====================================');
    const [selectedMaterial, setSelectedMaterial] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [step, setStep] = useState(1); // Manage dialog steps
    const maxUsers = 3; // Maximum number of users to select

    const handleChange = (event) => {
        setSelectedMaterial(event.target.value);
    };

    const handleNextStep = () => {
        // Validate selection or perform any necessary checks here
        setStep(2); // Move to the next step
    };

    const handleUserSelection = (event) => {
        const userId = event.target.value;
        if (!selectedUsers.includes(userId) && selectedUsers.length < maxUsers) {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };

    const handleRemoveUser = (userId) => {
        setSelectedUsers(selectedUsers.filter(user => user !== userId));
    };

    const handleSelectMaterials = () => {
        dispatch(createMaterial(selectedMaterial));
        onCloseDialog(); // Close dialog after adding material
    };

    return (
        <Dialog open={isDialogOpen} onClose={onCloseDialog} sx={{
            '& .MuiPaper-root': {
                width: '100%',
                maxWidth: '50%',
                height: '500px',
                padding: '20px',
                borderRadius: '24px'
            }
        }}>
            <DialogTitle fontSize={'24px'} fontWeight={'500'}>
                {step === 1 ? 'Sélectionnez un Matériel' : 'Ajouter un Matériel'}
            </DialogTitle>
            <DialogContent sx={{ width: '100%', padding: '30px' }}>
                <div className={classes.dialogStyle}>
                    {step === 1 ? (
                        <Box width={'400px'} marginLeft='30px'>
                            <Typography variant="body1" color="initial">Matériel :</Typography>
                            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                                <Select
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    value={selectedMaterial}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="" hidden>
                                        <em>Aucun</em>
                                    </MenuItem>
                                    {materials.map((item, index) => (
                                        <MenuItem key={index} value={item.Designation}>{item.Designation}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    ) : (
                        <Box width={'400px'} marginLeft='30px'>
                            <Typography variant="body1" color="initial">Sélectionnez 3 employés :</Typography>
                            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                                <Select
                                    multiple
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    value={selectedUsers}
                                    onChange={handleUserSelection}
                                >
                                    {users.map((user, index) => (
                                        <MenuItem key={index} value={user.id}>{user.nom}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Typography variant="body1" color="initial" style={{ marginTop: '10px' }}>
                                Employés sélectionnés:
                            </Typography>
                            {selectedUsers.map((userId, index) => (
                                <Typography key={index} variant="body1" color="initial">
                                    {users.find(user => user.id === userId[0])?.nom}
                                    <Button onClick={() => handleRemoveUser(userId)} variant="outlined" size="small" sx={{ marginLeft: '10px' }}>
                                        Supprimer
                                    </Button>
                                </Typography>
                            ))}
                        </Box>
                    )}
                </div>
            </DialogContent>
            <DialogActions>
                {step === 1 ? (
                    <Button onClick={handleNextStep} variant="contained" color="secondary" sx={{ ...buttonStyles.primary, height: '40px' }}>
                        Suivant
                    </Button>
                ) : (
                    <>
                        <Button onClick={() => setStep(1)} variant="outlined" color="primary" sx={{ ...buttonStyles.greyButton, height: '40px' }}>
                            Retour
                        </Button>
                        <Button onClick={handleSelectMaterials} variant="contained" color="primary" sx={{ ...buttonStyles.primary, height: '40px' }}>
                            Ajouter <TiArrowRight size={20} />
                        </Button>
                    </>
                )}
            </DialogActions>
        </Dialog>
    );
}

export default SelectMaterial;

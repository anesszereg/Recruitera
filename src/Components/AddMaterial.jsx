import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    TextField
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { buttonStyles } from '../Layout/buttonStyles';
import { TiArrowRight, TiUserAdd } from 'react-icons/ti';

const useStyles = makeStyles({
    dialogStyle: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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

function AddMaterial({ isDialogOpen, onCloseDialog, onAddMaterial }) {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        designation: '',
        class: '',
        manufacturer: '',
        unit: '',
        range: '',
        resolution: '',
        serialNumber: '',
        identification: ''
    });

    const handleAddMaterial = () => {
        console.log('Material added');
        onAddMaterial(formData);
        onCloseDialog();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    return (
        <Dialog open={isDialogOpen} onClose={onCloseDialog} sx={{
            '& .MuiPaper-root': {
                width: '50%',
                maxWidth: '50%',
                height: 'auto',
                padding: '20px',
                borderRadius: '24px'
            }
        }}>
            <DialogTitle fontSize={'24px'} fontWeight={'500'}>Ajouter un Material :</DialogTitle>
            <DialogContent sx={{ width: '100%', padding: '30px' }}>
            <div className={classes.dialogStyle}>
    <Box 
        display="grid" 
        gridTemplateColumns="1fr 1fr" 
        gap={2} // Adjusts the spacing between columns and rows
        width="100%"
    >
        {[
            { label: 'Désignation', name: 'designation' },
            { label: 'Classe', name: 'class' },
            { label: 'Constructeur', name: 'manufacturer' },
            { label: 'Unité', name: 'unit' },
            { label: 'Etendu', name: 'range' },
            { label: 'Résolution', name: 'resolution' },
            { label: 'Numéro de série', name: 'serialNumber' },
            { label: 'Identification', name: 'identification' }
        ].map(({ label, name }) => (
            <Box display='flex' flexDirection='column' key={name} width={'100%'}>
                <label className={classes.labelText} htmlFor={name}>{label} :</label>
                <TextField
                    sx={{
                        '& .MuiInputBase-root': {
                            height: '40px',
                        },
                        width: '90%', // Adjust to fit within the column
                        marginTop: '4px',
                    }}
                    value={formData[name]}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    name={name}
                />
            </Box>
        ))}
    </Box>
</div>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleAddMaterial} sx={{ ...buttonStyles.primary, height: '40px' }}>
                    Ajouter un Material <TiArrowRight size={20} />
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddMaterial;

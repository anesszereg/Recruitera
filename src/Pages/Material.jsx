import React, { useState } from 'react'
import AddMaterial from '../Components/AddMaterial';
import { Button, Typography } from '@mui/material';
import { buttonStyles } from '../Layout/buttonStyles';
import { makeStyles } from '@mui/styles';
import { LuFolderPlus } from 'react-icons/lu';
import ClientCard from '../Components/ClientCard';
import MaterialCard from '../Components/MaterialCard';


// ! style :


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        padding: '40px'
    },
    upSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardContainer: {
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"

    }


});


function Material() {
    const classes = useStyles()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    // ! create fake data :
    // const [clients, setClients] = useState([
    //     {
    //         url: image_company,
    //         name: 'Company One',
    //         description: 'This is a brief description of Company One.'
    //     }, {
    //         url: image_company2,
    //         name: 'Company Two',
    //         description: 'This is a brief description of Company Two.'
    //     },
    // ]);
    const handleOpenDialog = () => {
        console.log('====================================');
        console.log('heloo');
        console.log('====================================');
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleAddMaterial = (newMaterial) => {
        setClients((prevMaterial) => [
            ...prevMaterial,
            newMaterial
        ]);
    };


    return (


        <div className={
            classes.container
        }>
            <div className={
                classes.upSection
            }>
                <Typography variant={'h5'}>List des Materials :</Typography>


                <Button onClick={handleOpenDialog}
                    sx={
                        {
                            ...buttonStyles.primary,
                            height: '40px'
                        }
                }>
                    <LuFolderPlus size={20}/>
                    Ajouter un Material
                </Button>

            </div>
            <div className={
                classes.cardContainer
            }>
              <MaterialCard 
              url={null}
              name='Balance'
              description='Equilibrium of physical, emotional, or financial stability and harmony.'

              />
                </div>


                <AddMaterial isDialogOpen={isDialogOpen} onCloseDialog={handleCloseDialog} onAddMaterial={handleAddMaterial}/>


        </div>
    )
}

export default Material

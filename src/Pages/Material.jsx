import React, { useState } from 'react'
import AddMaterial from '../Components/AddMaterial';
import { Button, Typography } from '@mui/material';
import { buttonStyles } from '../Layout/buttonStyles';
import { makeStyles } from '@mui/styles';
import { LuFolderPlus } from 'react-icons/lu';
import ClientCard from '../Components/ClientCard';
import MaterialCard from '../Components/MaterialCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMaterials } from '../Redux/MaterialSlice';
import MaterilaDetails from '../Components/MaterilaDetails';
// import Material from './Material';


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
    const  dispatch = useDispatch();
    const Materials = useSelector((state) => state.material.materials); // Assuming your state structure has a 'users' array
    


    
   
    const handleOpenDialog = () => {
       
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    // const handleAddMaterial = (newMaterial) => {
    //     setClients((prevMaterial) => [
    //         ...prevMaterial,
    //         newMaterial
    //     ]);
    // };

    useEffect(() => {
        dispatch(fetchMaterials()); // Fetch all users when component mounts
    }
    , [dispatch]);


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
                {
                Materials.map((Material) => 
                <MaterialCard key={Material.id}
                    url={Material.url}
                    name={Material.Designation}
                    description={Material.Classe}
                />)
                }
            
                </div>
                


                <AddMaterial isDialogOpen={isDialogOpen} onCloseDialog={handleCloseDialog} />
             

        </div>
    )
}

export default Material

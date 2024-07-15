import {Box, Button, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import React, { useEffect, useState } from 'react'
import {LuFolderPlus} from 'react-icons/lu';
import ClientCard from '../Components/ClientCard';
import image_company from '../assets/images/company1.png';
import image_company2 from '../assets/images/comany2.png';
import image_company3 from '../assets/images/company3.png';
import image_company4 from '../assets/images/company4.png';

import { MdFactory } from 'react-icons/md';
import AddClient from '../Components/AddClient';
import { buttonStyles } from '../Layout/buttonStyles';
import { ToastContainer } from 'react-toastify';
import { fetchClients } from '../Redux/clientSlice';
import { useDispatch, useSelector } from 'react-redux';


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
        flexWrap: "wrap",

    }


});






function Client() {
    
    
    const classes = useStyles()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.client.clients); // Assuming your state structure has a 'users' array

    // ! create fake data :
//     const [clients, setClients] = useState([
//             {
//             url: null,
//             name: 'Sarl Company ',
//             description: 'inovative  and reliable concrete solutions for construction projects.'
//         },
   
//    ]);
    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleAddClient = (newClient) => {
        // setClients((prevClients) => [...prevClients, newClient]);
    };


    // use effect to get client from the server \
    useEffect(() => {
        dispatch(fetchClients()); // Fetch all client when component mounts
    }, [dispatch]);


    return (


        <div className={
            classes.container
        }>
            <div className={
                classes.upSection
            }>
                <Typography variant={'h5'}>Clients</Typography>


                <Button onClick={
                        handleOpenDialog
                    }
                    sx={
                        {
                            ...buttonStyles.primary,
                            height: '40px'
                        }
                }>
                    <LuFolderPlus size={20}/>
                    Ajouter un clients
                </Button>

            </div>
            <div className={
                classes.cardContainer
            }>
                {
                clients.map((client, index) => (
                    <ClientCard key={index}
                        url={
                            client.url 
                        }
                        name={
                            client.nom_client
                        }
                        description={
                            client.address
                        }/>
                ))
            } </div>

            <AddClient  isDialogOpen={isDialogOpen}
                onCloseDialog={handleCloseDialog}
                onAddClient={handleAddClient}/>

        </div>
    )
}

export default Client


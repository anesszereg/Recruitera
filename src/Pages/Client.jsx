import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react'
import { LuFolderPlus } from 'react-icons/lu';
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
import { FaUserPlus } from 'react-icons/fa6';


// ! style :


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        padding: '40px',
        backgroundColor: 'rgba(241, 245, 249, 1)'
        ,
        height: '90vh'
    },
    upSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardContainer: {
        display: "flex",
        gap: "30px",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '16px',
        height: '60vh',   

    },
    card:{

        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        width:'350px',
        textAlign:'center',



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
                <Typography variant={'body1'}>Candidate Database :
                </Typography>


                <Button onClick={
                    handleOpenDialog
                }
                    sx={
                        {
                            ...buttonStyles.primary,
                            height: '40px'
                        }
                    }>

                    Mass CV Parse
                </Button>

            </div>

            <div className={classes.cardContainer}>

                <Box 
                display={'flex'}
                flexDirection={'column'}
                gap={'10px'}
                alignItems={'center'}
                justifyContent={'center'}
                
                
                >
                    <Typography variant="subtitle1" color="initial">
                        Let's Get Some Candidates Added
                    </Typography>

                    <Typography variant="caption" color="initial">
                        Your candidate database is empty right now but it doesn’t have to stay for long.
                    </Typography>


                    <Button
                        sx={{ ...buttonStyles.primary, height: '40px' }}>
                        Create my first condidats
                    </Button>
                </Box>


                <Box display={'flex'}>
                    <Box className={classes.card}>
                        <FaUserPlus size={20} color={'rgba(36, 99, 235, 1)'} />
                        <Typography variant="body1" color="initial"> Create A Candidate</Typography>
                        <Typography variant="caption" color="initial">It takes less than 10 seconds to add a candidate and it is effortless to track each candidate through the process.</Typography>
                    </Box>
                    <Box className={classes.card}>
                        <FaUserPlus size={20} color={'rgba(36, 99, 235, 1)'} />
                        <Typography variant="body1" color="initial"> Create A Candidate</Typography>
                        <Typography variant="caption" color="initial">It takes less than 10 seconds to add a candidate and it is effortless to track each candidate through the process.</Typography>
                    </Box>
                    <Box className={classes.card}>
                        <FaUserPlus size={20} color={'rgba(36, 99, 235, 1)'} />
                        <Typography variant="body1" color="initial"> Create A Candidate</Typography>
                        <Typography variant="caption" color="initial">It takes less than 10 seconds to add a candidate and it is effortless to track each candidate through the process.</Typography>
                    </Box>
                    
                </Box>



            </div>


        </div>
    )
}

export default Client


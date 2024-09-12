import React, { useEffect, useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { LuFolderPlus } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, createUser } from '../Redux/userSlice'; // Assuming Redux actions are correctly imported

import EmplyeeTable from '../Components/EmplyeeTable';
import AddEmpeloyee from '../Components/AddEmpeloyee';
import { buttonStyles } from '../Layout/buttonStyles';
import axios from 'axios';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        padding: '40px',
        backgroundColor:"rgba(241, 245, 249, 1)",
        height:'90vh'
    },
    upSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

function Employee() {
    const classes = useStyles(); // Assuming useStyles is defined somewhere
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users); // Assuming your state structure has a 'users' array



    const [currentPage, setCurrentPage] = useState(1);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const rowsPerPage = 10;

    useEffect(() => {
        dispatch(getAllUsers()); // Fetch all users when component mounts
    }, [dispatch]);

    // Check if users exist or still loading
    if (!users) {
        return (
            <div className={classes.container}>
                <Typography variant="h5">Loading...</Typography>
            </div>
        );
    }

    // Calculate total pages based on number of users and rows per page
    const totalPages = Math.ceil(users.length / rowsPerPage);

    // Pagination logic to get current rows for the current page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, users.length);
    const currentRows = users.slice(startIndex, endIndex);

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    
    return (
        <div className={classes.container}>
            <div className={classes.upSection}>
                <Typography variant={'body1'}>Live jobs :</Typography>

                <Box display={'flex'} gap={'20px'}>

                <Button onClick={handleOpenDialog} sx={{ ...buttonStyles.primary, height: '40px' }}>
                    
                   Create  job
                </Button>

                <Button onClick={handleOpenDialog} sx={{ ...buttonStyles.greyButton, height: '40px' }}>
                    
                        See Closed Jobs
                </Button>
                </Box>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Location</TableCell>
                            <TableCell align="left">Salary</TableCell>
                            <TableCell align="left">CVs in Progress</TableCell>
                            <TableCell align="left">Hires Required</TableCell>
                            <TableCell align="left">Job On Website</TableCell>
                            <TableCell align="center">Actions</TableCell>
                            {/* <TableCell align="left"></TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentRows.map((row, i) => (
                            <EmplyeeTable key={row.id} row={row} />
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={10} align="right">
                                <Box display={'flex'} gap={'10px'} justifyContent={'flex-end'}>

                                    {/* Navigation buttons */}
                                    <Button
                                        sx={{ ...buttonStyles.greyButton, height: '34px' , }}
                                        onClick={handlePreviousPage}
                                        // disabled={currentPage === 1}
                                    >Précédent</Button>

                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <Button
                                            key={index}
                                            onClick={() => setCurrentPage(index + 1)}
                                            // disabled={currentPage === index + 1}
                                            sx={{ ...buttonStyles.greyButton, height: '34px' ,minWidth: '30px', }}
                                            
                                        >{index + 1}</Button>
                                    ))}
                                    <Button
                                    sx={{...buttonStyles.primary,height:'34px'}}

                                        onClick={handleNextPage}
                                        // disabled={currentPage === totalPages}
                                    >Next</Button>
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            <AddEmpeloyee isDialogOpen={isDialogOpen} onCloseDialog={handleCloseDialog}  />
        </div>
    );
}

export default Employee;

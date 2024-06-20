import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import React, { useState } from 'react'
import {LuFolderPlus} from 'react-icons/lu';
import EmplyeeTable from '../Components/EmplyeeTable';
import AddEmpeloyee from '../Components/AddEmpeloyee';


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
    }


});


// !! create fake data :

function createData(Id, ProjectCount, name, email, ) {
  return {
      Id,
      ProjectCount:0,
      name,
      email,

  };
}

const rows = [
    {
        Id: '#1',
        ProjectCount: 5,
        name: ' Doe',
        prenom:'John',
        email: 'jogn.@gmail.com'
    },


];


function Employee() {




    const classes = useStyles()


    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const totalPages = Math.ceil(rows.length / rowsPerPage);

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentRows = rows.slice(startIndex, endIndex);


    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleAddEmployee = (employee) => {
        rows.push(employee);
        setIsDialogOpen(false);
    };

    return (
        <div className={
            classes.container
        }>


            <div className={
                classes.upSection
            }>
                <Typography variant={'h5'}>Liste des Employee :</Typography>


                <Button onClick={
handleOpenDialog
                    }
                    sx={
                        {
                            ...buttons.greanButton,
                            height: '40px'
                        }
                }>
                    <LuFolderPlus size={20} />
                    Ajouter un Employee
                </Button>

            </div>

            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>

                            <TableCell  align="left">#ID</TableCell>
                            <TableCell align="left">Project</TableCell>
                            <TableCell align="left">Nom</TableCell>
                            <TableCell align="left">Prenom</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="center" >Actions</TableCell>
                            <TableCell />
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentRows.map((row, i) => (
                            <EmplyeeTable key={i} row={row} />
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={10} align="right">
                                <Box display={'flex'} gap={'10px'} justifyContent={'flex-end'}>

                                    {/* Navigation buttons */}
                                    <Button
                                        sx={{ ...buttons.greyButton, height: '34px' , }}
                                        onClick={handlePreviousPage}
                                        // disabled={currentPage === 1}
                                    >Précédent</Button>

                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <Button
                                            key={index}
                                            onClick={() => setCurrentPage(index + 1)}
                                            // disabled={currentPage === index + 1}
                                            sx={{ ...buttons.greyButton, height: '34px' ,minWidth: '30px', }}
                                            
                                        >{index + 1}</Button>
                                    ))}
                                    <Button
                                    sx={{...buttons.greanButton,height:'34px'}}

                                        onClick={handleNextPage}
                                        // disabled={currentPage === totalPages}
                                    >Next</Button>
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>

                                        <AddEmpeloyee isDialogOpen={isDialogOpen}
                onCloseDialog={handleCloseDialog}
                onAddClient={handleAddEmployee} />


        </div>
    )
}

export default Employee


const buttons = {
    greanButton: {
        backgroundColor: 'rgba(83, 86, 255, 1)',
        color: '#fff',
        borderRadius: '5px',
        padding: '0 20px',
        border: '1px solid rgba(83, 86, 255, 1)',
        textTransform: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        '&:hover': {
            backgroundColor: '#fff',
            color: 'rgba(83, 86, 255, 1)',
            border: '1px solid rgba(83, 86, 255, 1)'
        }
    },
    greyButton: {
      backgroundColor: '#E7E7E7',
      color: '#515151',
      borderRadius: '5px',
      padding: '0 20px',
      border: '1px solid #E7E7E7',
      textTransform: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      '&:hover': {
          backgroundColor: '#E7E7E7',
          color: '#515151',
          border: '1px solid #515151'
      }
  }
}

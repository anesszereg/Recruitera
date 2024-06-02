import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import React, { useState } from 'react'
import {LuFolderPlus} from 'react-icons/lu';
import EmplyeeTable from '../Components/EmplyeeTable';


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

function createData(Id, ProjectCount, Employee, email, Numerodutelephone) {
  return {
      Id,
      ProjectCount,
      Employee,
      email,
      Numerodutelephone,
  };
}

const rows = [
  createData('#1', 5, 'John Doe', 'john.doe@example.com', '123-456-7890'),
  createData('#2', 3, 'Jane Smith', 'jane.smith@example.com', '123-456-7891'),
  createData('#3', 4, 'Alice Johnson', 'alice.johnson@example.com', '123-456-7892'),
  createData('#4', 2, 'Bob Brown', 'bob.brown@example.com', '123-456-7893'),
  createData('#5', 6, 'Charlie Davis', 'charlie.davis@example.com', '123-456-7894'),
  createData('#6', 1, 'David Evans', 'david.evans@example.com', '123-456-7895'),
  createData('#7', 3, 'Eva White', 'eva.white@example.com', '123-456-7896'),
  createData('#8', 7, 'Frank Green', 'frank.green@example.com', '123-456-7897'),
  createData('#9', 5, 'Grace Hall', 'grace.hall@example.com', '123-456-7898'),
  createData('#10', 2, 'Hank King', 'hank.king@example.com', '123-456-7899'),
  createData('#11', 8, 'Ivy Lee', 'ivy.lee@example.com', '123-456-7800'),
  createData('#12', 4, 'Jack Moore', 'jack.moore@example.com', '123-456-7801'),
  createData('#13', 2, 'Kate Perry', 'kate.perry@example.com', '123-456-7802'),
  createData('#14', 3, 'Luke Quinn', 'luke.quinn@example.com', '123-456-7803'),
  createData('#15', 6, 'Mia Reed', 'mia.reed@example.com', '123-456-7804'),
  createData('#16', 5, 'Nate Scott', 'nate.scott@example.com', '123-456-7805'),
  createData('#17', 7, 'Olivia Turner', 'olivia.turner@example.com', '123-456-7806'),
  createData('#18', 4, 'Paul Walker', 'paul.walker@example.com', '123-456-7807'),
  createData('#19', 3, 'Quinn Young', 'quinn.young@example.com', '123-456-7808'),
  createData('#20', 6, 'Rose Zane', 'rose.zane@example.com', '123-456-7809'),
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



    return (
        <div className={
            classes.container
        }>


            <div className={
                classes.upSection
            }>
                <Typography variant={'h5'}>Liste des sites</Typography>


                <Button onClick={
                        () => setAddSiteDialogOpen(true)
                    }
                    sx={
                        {
                            ...buttons.greanButton,
                            height: '40px'
                        }
                }>
                    <LuFolderPlus size={20}/>
                    Ajouter un Employee
                </Button>

            </div>

            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>

                            <TableCell  align="left">#ID</TableCell>
                            <TableCell align="left">Project</TableCell>
                            <TableCell align="left">Employee</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Numero du telephone</TableCell>
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

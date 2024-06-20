import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import {makeStyles} from '@mui/styles';
import React, { useState } from 'react'
import {LuFolderPlus} from 'react-icons/lu';
import EmplyeeTable from '../Components/EmplyeeTable';
import test_image from '../assets/images/company1.png'
import MaterialTable from '../Components/MaterialTable';


// !! create fake data :

function createData(Id, Material, Date, Status,) {
    return {
        Id,
        Material,
        Date,
        Status,

    };
}


  
const rows = [
    createData('#1', 'Wood', '2024-01-01', 'In Progress'),
    createData('#2', 'Metal', '2024-01-05', 'Completed'),
    createData('#3', 'Plastic', '2024-02-01', 'Pending'),
    createData('#4', 'Glass', '2024-03-01', 'In Progress'),
    createData('#5', 'Ceramic', '2024-04-01', 'Completed'),
  

];


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
    main_section: {
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems: 'center'

    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        // gap:'10px'
    },
    image_container: {
        height: "130px",
        width: '260px',
        objectFit: "contain",
        borderRadius: "8px",
        border: "1px solid #f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: '20px'


    },
    form: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    }


});


function ClientFiles() {

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


    const classes = useStyles()
    return (
        <div className={
            classes.container
        }>
            <div className={
                classes.upSection
            }>
                <Box display={'flex'}
                    alignItems={'center'}
                    gap='10px'>

                    <Typography variant={'h4'}>Clients /</Typography>
                    <Typography variant={'body1'}
                        color={'#7E7E7E'}>
                        #Nom De client</Typography>

                </Box>


                <Button sx={
                    {
                        ...buttons.greanButton,
                        height: '40px'
                    }
                }>
                    <LuFolderPlus size={20}/>
                    Ajouter un Material
                </Button>

            </div>
            <div className={
                classes.main_section
            }>
                <div className={
                    classes.info
                }>
                    <img src={test_image}
                        alt=""
                        className={
                            classes.image_container
                        }/>
                    <div className={
                        classes.form
                    }>
                        <Typography variant="subtitle1"
                            color={'#7E7E7E'}>Nom de la socite:</Typography>
                        <Typography variant="subtitle1" color="initial">
                            sarl company
                        </Typography>
                    </div>
                    <div className={
                        classes.form
                    }>
                        <Typography variant="subtitle1"
                            color={'#7E7E7E'}>Email:</Typography>
                        <Typography variant="subtitle1" color="initial">
                            sarl@gmail.com
                        </Typography>
                    </div>
                    <div className={
                        classes.form
                    }>
                        <Typography variant="subtitle1"
                            color={'#7E7E7E'}>Numero du Telephone:</Typography>
                        <Typography variant="subtitle1" color="initial">
                            +213553647393
                        </Typography>
                    </div>
                    <div className={
                        classes.form
                    }>
                        <Typography variant="subtitle1"
                            color={'#7E7E7E'}>localisation :</Typography>
                        <Typography variant="subtitle1"
                            sx={
                                {
                                    color: '#5356FF',
                                    textDecoration: 'underLine',
                                    cursor: 'pointer'
                                }
                        }>
                            Click pour voir
                        </Typography>
                    </div>
                    <Box marginTop={'50px'}>


                        <div className={
                            classes.form
                        }>
                            <Typography variant="subtitle1"
                                color={'#7E7E7E'}>Nombre totale de material:</Typography>
                            <Typography variant="subtitle1" color="initial">
                                80
                            </Typography>
                        </div>
                        <div className={
                            classes.form
                        }>
                            <Typography variant="subtitle1"
                                color={'#7E7E7E'}>Produits en cours de certification:</Typography>
                            <Typography variant="subtitle1" color="initial">
                                8
                            </Typography>
                        </div>
                        <div className={
                            classes.form
                        }>
                            <Typography variant="subtitle1"
                                color={'#7E7E7E'}>Produits cdertifier:</Typography>
                            <Typography variant="subtitle1" color="initial">
                                6
                            </Typography>
                        </div>
                    </Box>
                </div>


                <TableContainer component={Paper} sx={{
                    width: '70%',
                }}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>

                                <TableCell align="left">#ID</TableCell>
                                <TableCell align="left">Material</TableCell>
                                <TableCell align="left">Date de Debut</TableCell>
                                <TableCell align="left">Status</TableCell>
                                <TableCell align="center">Actions</TableCell>
                                {/* <TableCell/> */}
                                {/* <TableCell/> */}
                            </TableRow>
                        </TableHead>
                        <TableBody> {
                            currentRows.map((row, i) => (
                                <MaterialTable key={i}
                                    row={row}/>
                            ))
                        } </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={10}
                                    align="right">
                                    <Box display={'flex'}
                                        gap={'10px'}
                                        justifyContent={'flex-end'}>

                                        {/* Navigation buttons */}
                                        <Button sx={
                                                {
                                                    ...buttons.greyButton,
                                                    height: '34px'
                                                }
                                            }
                                            onClick={handlePreviousPage}
                                            // disabled={currentPage === 1}
                                        >Précédent</Button>

                                        {
                                        Array.from({
                                            length: totalPages
                                        }, (_, index) => (
                                            <Button key={index}
                                                onClick={
                                                    () => setCurrentPage(index + 1)
                                                }
                                                // disabled={currentPage === index + 1}
                                                sx={
                                                    {
                                                        ...buttons.greyButton,
                                                        height: '34px',
                                                        minWidth: '30px'
                                                    }
                                            }>
                                                {
                                                index + 1
                                            }</Button>
                                        ))
                                    }
                                        <Button sx={
                                                {
                                                    ...buttons.greanButton,
                                                    height: '34px'
                                                }
                                            }

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


        </div>
    )
}

export default ClientFiles


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

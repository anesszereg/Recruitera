import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell, Box, Typography } from '@mui/material'; // Adjust based on your library
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { MdEmail, MdOutlineRemoveRedEye } from 'react-icons/md';
import { HiOutlineDotsVertical } from 'react-icons/hi';

function EmployeeTable({ row }) {
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row" sx={{ color: '#7E7E7E' }}>
          #{row.Id+1}
        </TableCell>
        <TableCell align="center" sx={{ color: '#7E7E7E' }}>
          <Box display='flex' gap='10px' alignItems={'center'}>

          <IoIosCheckmarkCircle color='#29FF00' size={20} />
          <Typography variant="body1" color="initial">

        {row.ProjectCount} 
          </Typography>
          </Box>
        </TableCell>
        <TableCell align="left" sx={{ color: '#7E7E7E' }}>{row.name}</TableCell>
        <TableCell align="left" sx={{ color: '#7E7E7E' }}>{row.prenom}</TableCell>
        <TableCell align="left" sx={{ color: '#7E7E7E' }}>{row.email}</TableCell>

        <TableCell align="center">
          <Box display={'flex'} justifyContent={'center'} gap='10px'>
            <MdEmail size={20} color={'#7E7E7E'} cursor={'pointer'} />
            <MdOutlineRemoveRedEye size={20} color={'#7E7E7E'} cursor={'pointer'} />
            <HiOutlineDotsVertical size={20} color={'#7E7E7E'} cursor={'pointer'} />
          </Box>
        </TableCell>
        <TableCell align="left"></TableCell>
        <TableCell align="left"></TableCell>
        <TableCell align="left"></TableCell>
      </TableRow>
    </React.Fragment>
  );
}

EmployeeTable.propTypes = {
  row: PropTypes.shape({
    Id: PropTypes.string.isRequired,
    Project: PropTypes.number,
    Employee: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    Numerodutelephone: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmployeeTable;

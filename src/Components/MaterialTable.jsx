

import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell, Box, Typography } from '@mui/material'; // Adjust based on your library
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { MdEmail, MdOutlineRemoveRedEye } from 'react-icons/md';
import { HiOutlineDotsVertical } from 'react-icons/hi';


function MaterialTable({ row }) {
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row" sx={{ color: '#7E7E7E' }}>
          {row.Id}
        </TableCell>
        <TableCell align="left" sx={{ color: '#7E7E7E' }}>{row.Material}</TableCell>
        <TableCell align="left" sx={{ color: '#7E7E7E' }}>{row.Date}</TableCell>
        {/* <TableCell align="left" sx={{ color: '#7E7E7E' }}>{row.Numerodutelephone}</TableCell> */}
        <TableCell align="left" sx={{ color: '#7E7E7E' }}>
          <IoIosCheckmarkCircle color='#29FF00' size={20} />
        </TableCell>
        <TableCell align="center">
          <Box display={'flex'} justifyContent={'center'} gap='10px'>
            <MdOutlineRemoveRedEye size={20} color={'#7E7E7E'} cursor={'pointer'} />
            <HiOutlineDotsVertical size={20} color={'#7E7E7E'} cursor={'pointer'} />
          </Box>
        </TableCell>
        {/* <TableCell align="left"></TableCell>
        <TableCell align="left"></TableCell> */}
      </TableRow>
    </React.Fragment>
  );
}

MaterialTable.propTypes = {
  row: PropTypes.shape({
    Id: PropTypes.string.isRequired,
    Material: PropTypes.string.isRequired,
    Date: PropTypes.string.isRequired,

  }).isRequired,
};

export default MaterialTable;

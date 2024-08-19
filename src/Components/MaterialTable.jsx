

import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell, Box, Typography } from '@mui/material'; // Adjust based on your library
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { MdEmail, MdOutlineRemoveRedEye } from 'react-icons/md';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { setDialog } from '../Redux/dialogSlice';


function MaterialTable({ row }) {


  const createdAtDate = new Date(row.createdAt);

  // Step 2: Format the date to display only the date part
  const formattedDate = createdAtDate.toLocaleDateString();// Adjust locale if needed


    const dispatch = useDispatch();
  const handleClick = () => {

    dispatch(setDialog({open:true}))
    
    
  }


  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row" sx={{ color: '#7E7E7E' }}>
          {row.id}
        </TableCell>
        <TableCell align="left" sx={{ color: '#7E7E7E' }}>{row.Constructeur}</TableCell>
        <TableCell align="left" sx={{ color: '#7E7E7E' }}>{formattedDate}</TableCell>
        {/* <TableCell align="left" sx={{ color: '#7E7E7E' }}>{row.Numerodutelephone}</TableCell> */}
        <TableCell align="left" sx={{ color: '#7E7E7E' }}>
          <IoIosCheckmarkCircle color={row.Status === 'complete'? '#29FF00':'#FF9900'  } size={20} />
        </TableCell>
        <TableCell align="center">
          <Box display={'flex'} justifyContent={'center'} gap='10px'>
            <MdOutlineRemoveRedEye size={20} color={'#7E7E7E'} cursor={'pointer'} onClick={handleClick} />
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

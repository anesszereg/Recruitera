import React, { useState, useEffect } from 'react';
import { Box, Avatar, Typography, InputBase, Button } from '@mui/material'; // Import necessary MUI components
import avatar from '../assets/images/avatar.jpg';
import { useSelector } from 'react-redux';
import noOne from '../assets/images/noone.png';
import { IoSearchCircleOutline, IoSearchOutline } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';



function Navbar() {

  const [currentTime, setCurrentTime] = useState(new Date());
  // const user = useSelector((state) => state.user.user);

  // console.log('====================================');
  // console.log(user);
  // console.log('====================================');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);


    return () => clearInterval(intervalId);
  }, []);
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} borderBottom={'1px solid #ccc'} width={'100%'} padding={'15px'}>
      {/* Left side - Search bar */}
      <Box display={'flex'} alignItems={'center'} gap={'10px'}>
        <Box display="flex" alignItems="center" border="1px solid #ccc" borderRadius="5px" padding="5px 5px" width={'500px'}>
          <InputBase placeholder="Search for results"  sx={{
            width: '100%',
            
          }}/>
          <IoSearchOutline />
        </Box>
        <Button variant="contained" color="primary" sx={{
          display: 'flex',
          gap: '10px',
          padding: '5px 10px',
          borderRadius: '5px',
        
          textTransform:'none'
        }}>
          <FaPlus/>
          <Typography variant="button" color="white" textTransform={'none'}>Create</Typography>
        </Button>
      </Box>

      <Box display={'flex'} alignItems={'center'} gap={'15px'}>
        <Typography variant="subtitle2" color="initial"> 
        </Typography>
        <Avatar alt="User Avatar" src={noOne} sx={{ width: 48, height: 48 }} />
      </Box>
    </Box>

  );
}

export default Navbar;

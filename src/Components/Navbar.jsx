import React, { useState, useEffect } from 'react';
import { Box, Avatar, Typography } from '@mui/material'; // Import necessary MUI components
import avatar from '../assets/images/avatar.jpg'; 



function Navbar() {

  const [currentTime, setCurrentTime] = useState(new Date());


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date()); 
    }, 1000); 


    return () => clearInterval(intervalId);
  }, []); 
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} borderBottom={'1px solid #ccc'} width={'100%'} padding={'15px'}>
      <Typography variant="body2" color="initial">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Typography>
      <Box display={'flex'} alignItems={'center'} gap={'15px'}>
        <Typography variant="subtitle2" color="initial">Islam</Typography>
        <Avatar alt="Cindy Baker" src={avatar} sx={{ width: 48, height: 48 }} />
      </Box>
    </Box>
  );
}

export default Navbar;

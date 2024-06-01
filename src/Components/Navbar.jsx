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
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
      <Box display={'flex'} alignItems={'center'} gap={'15px'}>
        <Avatar alt="Cindy Baker" src={avatar} sx={{ width: 48, height: 48 }} />
        <Typography variant="subtitle2" color="initial">user name</Typography>
      </Box>
      <Typography variant="body2" color="initial">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Typography>
    </Box>
  );
}

export default Navbar;

import { makeStyles } from '@mui/styles';
import React from 'react'
import Typography from '@mui/material/Typography'
import { HiOutlineArchive } from 'react-icons/hi';
import { Box } from '@mui/material';




// ! style :


const useStyles = makeStyles({
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '300px',
    borderRadius: '16px',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
    border: '1px solid #f5f5f5',
    height: '320px',
  },
  icon: {
    width: '48px',
    height: '48px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#5356FF"
  },
  image_container:{
    height:"130px",
    objectFit:"contain",
    borderRadius:"8px",
    border:"1px solid #f5f5f5",

  }


});






function ClientCard({url , name , description}) {


  const classes = useStyles()
  
  
  return (
    <div className={classes.container}>

      <img src={url} alt="company_logo" className={classes.image_container} />

      <Typography fontSize={'18px'} fontWeight={'600'} color="initial">{name}</Typography>
      <Typography variant="body2" color="#7E7E7E"> {description}</Typography>

      <Box width='100%' display='flex' justifyContent='end'>

        <div className={classes.icon}>
        <HiOutlineArchive size={24} color='#fff' />

        </div>

      </Box>
      

    </div>
  )
}

export default ClientCard
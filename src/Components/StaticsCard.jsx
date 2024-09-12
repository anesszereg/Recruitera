import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

const useStyles = makeStyles({
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    width: '180px',
    borderRadius: '16px',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
    border: '1px solid #f5f5f5',
    height: '195px',
    backgroundColor: 'white',
  },
  icon: {
    width: '60px',
    height: '60px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  comparison: {
    width: '100%',
    borderRadius: '8px',
    padding: '8px 20px',
    textTransform: 'none',

  },
});

function StaticsCard({
  color, text, data, button
}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.icon} style={{ backgroundColor: color }}>
        <Typography variant="h6" color="white">{data}</Typography>
      </div>
      <Typography variant="subtitle" color="initial">{text}</Typography>

      <Button 
      sx={{ 
        backgroundColor: 'white',
        color: 'rgba(232, 38, 70, 1)',
        borderRadius: '5px',
        padding: '10px 20px',
        border: '1px solid rgba(232, 38, 70, 1)',
        textTransform: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        '&:hover': {
            backgroundColor: '#fff',
            color: 'rgba(232, 38, 70, 1)',
            border: '1px solid rgba(232, 38, 70, 1)'
        },
        fontSize: '12px'
      }}
      >
        {button}
      </Button>
    </div>
  );
}

export default StaticsCard;

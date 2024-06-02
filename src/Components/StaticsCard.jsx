import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const useStyles = makeStyles({
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '430px',
    borderRadius: '16px',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
    border: '1px solid #f5f5f5',
    height: 'auto',
  },
  icon: {
    width: '48px',
    height: '48px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  comparison: {
    width: 'fit-content',
    height: 'fit-content',
    borderRadius: '8px',
    padding: '7px 10px',
  },
});

function StaticsCard({ 
  icon: Icon,IconColor ,

  iconBackgroundColor, 
  title, 
  data, 
  comparisonText, 
  comparisonBackgroundColor ,
    color,
}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.icon} style={{ backgroundColor: iconBackgroundColor }}>
        <Icon size={'24px'} color={IconColor} />
      </div>
      <Typography variant="h6" color="initial">{title}</Typography>
      <Box display='flex' justifyContent='space-between' alignItems={'center'}>
        <Typography variant="subtitle1" color="initial">{data}</Typography>
        <div className={classes.comparison} style={{ backgroundColor: comparisonBackgroundColor }}>
          <Typography fontSize={'12px'} color={color}>{comparisonText}</Typography>
        </div>
      </Box>
    </div>
  );
}

export default StaticsCard;

import { makeStyles } from '@mui/styles';
import React from 'react';
import CvCard from '../Components/CvCard';
import { Home, Person, Work, School, Build, DirectionsCar, Favorite, FitnessCenter, LocalGroceryStore, Restaurant } from '@mui/icons-material'; // Example icons from MUI

const useStyles = makeStyles({
  container: {
    padding: '23px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 290px)',
    gridTemplateRows: 'repeat(4, 150px)',
    gap: '10px',
    height: '100%',
    backgroundColor: 'rgba(241, 245, 249, 1)',
  },
});

function Settings() {
  const classes = useStyles();

  // Array of cards with text and icons
  const cards = [
    { icon: Home, text: 'Home' },
    { icon: Person, text: 'Profile' },
    { icon: Work, text: 'Work' },
    { icon: School, text: 'Education' },
    { icon: Build, text: 'Skills' },
    { icon: DirectionsCar, text: 'Transport' },
    { icon: Favorite, text: 'Favorites' },
    { icon: FitnessCenter, text: 'Fitness' },
    { icon: LocalGroceryStore, text: 'Grocery' },
    { icon: Restaurant, text: 'Dining' },
  ];

  return (
    <div className={classes.container}>
      {cards.map((card, index) => (
        <CvCard key={index} icon={card.icon} text={card.text} />
      ))}
    </div>
  );
}

export default Settings;

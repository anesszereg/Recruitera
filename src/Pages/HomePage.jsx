import React from 'react'
import Typography from '@mui/material/Typography'
import StaticsCard from '../Components/StaticsCard'
import {Box} from '@mui/material'

import {makeStyles} from '@mui/styles';
import {IoHome, IoHomeOutline, IoPerson, IoPersonOutline} from 'react-icons/io5';
import {LuCpu} from 'react-icons/lu';
import User from '../Components/User';
import image from '../assets/images/avatar.jpg'
import map from '../assets/images/map.png'

const useStyles = makeStyles({
    container: {
        padding: ' 23px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        height:'100%'

    },
    card_employee: {

        padding: ' 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '430px',
        borderRadius: '16px',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
        border: '1px solid #f5f5f5',
        height: '100%'

    },map:{
        width:"65%",
        // height: '100%',
        borderRadius: '16px',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
        border: '1px solid #f5f5f5',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        overflow: 'hidden',

    }

})


// ! fake data

const users = [
    {
        url: image,
        name: 'John Doe',
        role: 'Developer',
        nbr_project: 5
    }, {
        url: image,
        name: 'Jane Smith',
        role: 'Designer',
        nbr_project: 8
    }, {

        url: image,
        name: 'Alice Johnson',
        role: 'Manager',
        nbr_project: 3
    },
];


function HomePage() {


    const classes = useStyles();


    return (
        <div className={
            classes.container
        }>
            <Typography variant="h5" color="initial">
                Page d'accueil</Typography>

            <Box display={'flex'}
                gap='30px'
                >

                <StaticsCard icon={IoHomeOutline}
                    iconBackgroundColor='rgba(255, 0, 31, 0.15)'
                    IconColor={'rgba(255, 0, 31, 1)'}
                    title="Nombre total d'employés :"
                    data="56"
                    comparisonText="21 % de plus que le mois dernier"
                    comparisonBackgroundColor="rgba(231, 231, 231, 1)"
                    color='rgba(126, 126, 126, 1)'/>
                <StaticsCard icon={IoPersonOutline}
                    iconBackgroundColor='rgba(83, 86, 255, 0.15)'
                    IconColor={'rgba(83, 86, 255, 1)'}
                    title="Nombre total de Clients :"
                    data="174"
                    comparisonText="41 % de plus que le mois dernier"
                    comparisonBackgroundColor="rgba(143, 255, 0, 0.15)"
                    color="rgba(0, 183, 7, 1)"/>
                <StaticsCard icon={LuCpu}
                    iconBackgroundColor='rgba(255, 153, 0, 0.15)'
                    IconColor={'rgba(255, 153, 0, 1)'}
                    title="Nombre total de Material :"
                    data="1754"
                    comparisonText="65 % de plus que le mois dernier"
                    comparisonBackgroundColor="rgba(143, 255, 0, 0.15)"
                    color='rgba(0, 183, 7, 1)'/>
            </Box>
            <Box display={'flex'}
                gap='30px' height={'100%'}>

                <div className={
                    classes.card_employee
                }>
                    <Typography fontSize={'24px'}
                        fontWeight={'700'}
                        color="initial">Employé du mois</Typography>
                    <Typography fontSize={'13px'}
                        fontWeight={'600'}
                        width='200px'
                        color="rgba(126, 126, 126, 1)">liste des meilleurs employés de ce mois</Typography>

                        <Box marginTop={'20px'}>

                    {
                      users.map((user, index) => (
                        <User key={index}
                        url={
                          user.url
                        }
                        name={
                          user.name
                        }
                        role={
                          user.role
                        }
                        nbr_project={
                          user.nbr_project
                        }/>
                        ))
                      } 
                        </Box>
                </div>

                <div className={
                  classes.map
                }>
                    <Typography fontSize={'24px'}
                        fontWeight={'700'}
                        color="initial">Maps</Typography>
                    <Typography fontSize={'13px'}
                        fontWeight={'600'}
                        color="rgba(126, 126, 126, 1)">Pour une meilleur vision de la localisation de vos client</Typography>


                        <img src={map} alt=""  height={'350px'} />



                </div>

            </Box>
        </div>
    )
}

export default HomePage

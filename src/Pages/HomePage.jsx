import React from 'react'
import StaticsCard from '../Components/StaticsCard'
import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import AnalytcsCart from '../Components/AnalytcsCart';
import { FaRegStar } from 'react-icons/fa';
import { IoAnalyticsSharp, IoPeople, IoPersonOutline, IoPlayOutline } from 'react-icons/io5';
import { FaRegUser } from "react-icons/fa6";

const useStyles = makeStyles({
    container: {
        padding: ' 23px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        height: '100%',
        backgroundColor: 'rgba(241, 245, 249, 1)',


    },
    card: {

        padding: '10px',
        display: 'flex',
        gap: '10px',

        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: '#fff',
        border: '1px solid #f5f5f5',


    }, card2: {

        padding: '10px',
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        backgroundColor: '#fff',
        border: '1px solid #f5f5f5',


    }, map: {
        width: "65%",
        // height: '100%',
        borderRadius: '16px',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
        border: '1px solid #f5f5f5',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        overflow: 'hidden',

    },
    icon: {
        width: '60px',
        height: '60px',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(241, 245, 249, 1)'
    },
    minicard: {
        width: '210px',
        height: '144px',
        backgroundColor: 'white',

        border: '1px solid #f5f5f5',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center'
    }

})






function HomePage() {


    const classes = useStyles();


    return (
        <div className={
            classes.container
        }>


            <Box display={'flex'}
                gap='30px'
            >

                <StaticsCard
                    color={'rgba(232, 38, 70, 1)'}
                    text={'no live jobs yet'}
                    data={'0'}
                    button={'create new job'}

                />
                <StaticsCard
                    color={'rgba(232, 38, 70, 1)'}
                    text={'no live jobs yet'}
                    data={'0'}
                    button={'create new job'}

                />
                <StaticsCard
                    color={'rgba(232, 38, 70, 1)'}
                    text={'no live jobs yet'}
                    data={'0'}
                    button={'create new job'}

                />
                <StaticsCard
                    color={'rgba(232, 38, 70, 1)'}
                    text={'no live jobs yet'}
                    data={'0'}
                    button={'create new job'}

                />
                <AnalytcsCart />
            </Box>
            <Box display={'flex'}
                gap='30px'
                margin={'20px 0'}

            >


                <Box display={'flex'}
                    gap='10px'
                    height={'100%'}
                    flexDirection={'column'}
                    width={'35%'}


                >
                    <div className={classes.card}>
                        <div className={classes.icon}>
                            0
                        </div>
                        <Box >
                            <Typography variant="body1" color="initial"> candidates in Progress</Typography>
                            <Button sx={{
                                backgroundColor: 'white',
                                color: 'rgba(36, 99, 235, 1)',
                                borderRadius: '5px',
                                // padding: '5px ',
                                border: '1px solid rgba(36, 99, 235, 1)',
                                textTransform: 'none',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',

                            }} >
                                view
                            </Button>
                        </Box>
                    </div>
                    <Box className={classes.card2}>
                        <Typography variant="body1" color="initial">
                            jobs on your Personal Job Board
                        </Typography>
                        <Button sx={{
                            backgroundColor: 'rgba(36, 99, 235, 1)',
                            color: 'white',
                            borderRadius: '5px',
                            // padding: '5px ',
                            border: '1px solid rgba(36, 99, 235, 1)',
                            textTransform: 'none',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            '&:hover': {
                                backgroundColor: 'white',
                                color: 'rgba(36, 99, 235, 1)',
                                border: '1px solid rgba(36, 99, 235, 1)'
                            }

                        }}>
                            create my first job
                        </Button>
                    </Box>

                    <Box
                        display={'flex'}
                        gap='10px'

                    >
                        <Box className={classes.minicard} >

                            <Box sx={{
                                height: '40px',
                                width: '40px',
                                borderRadius: '5px',
                                backgroundColor: 'rgba(36, 99, 235, 1)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}>
                                <FaRegStar color='#fff' />
                            </Box>
                            <Typography variant="body1" color="initial">
                                loving recuitment ?
                            </Typography>
                            <Typography variant="subtitle1" color="rgba(99, 114, 136, 1)">
                                leave us a review
                            </Typography>
                        </Box>
                        <Box
                            className={classes.minicard}
                        >
                            <Box sx={{
                                height: '40px',
                                width: '40px',
                                borderRadius: '5px',
                                backgroundColor: 'rgba(36, 99, 235, 1)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}>
                                <IoPlayOutline
                                    color='#fff'
                                />
                            </Box>

                            <Typography variant="body1" color="initial">
                                need some help?
                            </Typography>
                            <Typography variant="subtitle1" color="rgba(99, 114, 136, 1)">
                                watch a demo
                            </Typography>
                        </Box>
                    </Box>
                    <div className={classes.card}>
                        <div className={classes.icon}>
                            <IoAnalyticsSharp size={30} />
                        </div>
                        <Box >
                            <Typography variant="body1" color="initial">see Your usage </Typography>

                        </Box>
                    </div>





                </Box>

                <Box
                    width={'62%'}
                    backgroundColor={'#fff'}
                    flexDirection={'column'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'10px'}
                >
                    <Box display={'flex'} gap={'20px'} justifyContent={'center'}>

                        <FaRegUser
                            size={20}
                            color='rgba(232, 38, 70, 1)'
                        />
                        <FaRegUser
                            size={20}
                            color='rgba(5, 195, 251, 1)'
                        />
                        <FaRegUser
                            size={20}
                            color='rgba(32, 173, 149, 1)'
                        />
                        <FaRegUser
                            size={20}
                            color='rgba(255, 92, 2, 1)'
                        />
                     

                    </Box>
                    <Typography textAlign={'center'} variant="body1" color="initial">Kick start your Database</Typography>
          

                        <Typography width={'50%'} textAlign={'center'} variant="caption" color="rgba(99, 114, 136, 1)">Use the Mass CV Parse feature to upload multiple CVs at one
                            Use your CV parse credits to kickstart your database.</Typography>

                        <Button sx={{
                            backgroundColor:'white',
                            color:  'rgba(36, 99, 235, 1)',
                            borderRadius: '5px',
                            padding: '5px ',
                            border: '1px solid rgba(36, 99, 235, 1)',
                            textTransform: 'none',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            '&:hover': {
                                backgroundColor: 'rgba(36, 99, 235, 1)',
                                color: 'white',
                                border: '1px solid rgba(36, 99, 235, 1)'
                            }
                        }}>
                            upload CVs
                        </Button>




                </Box>
            </Box>
        </div>
    )
}

export default HomePage

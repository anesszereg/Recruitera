import React, {useState} from 'react'
import {Box, Button, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {useNavigate} from 'react-router-dom';
import {HiOutlineArchive} from 'react-icons/hi';
import {FaEdit, FaTools} from "react-icons/fa";
import {MdEdit} from 'react-icons/md';
import { RiEditLine } from "react-icons/ri";


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
        height: '320px'
    },
    icon: {
        width: '48px',
        height: '48px',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#5356FF",
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#191B7E',
            color: '#5356FF',
            border: '2px solid #5356FF'

        }
    },
    image_container: {
        height: "130px",
        objectFit: "contain",
        borderRadius: "8px",
        border: "1px solid #f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"


    }


});

function MaterialCard({url, name, description}) {

    const classes = useStyles()
    const navigate = useNavigate()


    return (

        <div className={
            classes.container
        }>


            {
            url ? <img src={url}
                alt="company_logo"
                className={
                    classes.image_container
                }/> : <Box className={
                classes.image_container
            }>
                <FaTools size={50}/>
            </Box>
        }

            <Typography fontSize={'18px'}
                fontWeight={'600'}
                color="initial">
                {name}</Typography>
            <Typography variant="body2" color="#7E7E7E">
                {
                description ? description : 'check this company '
            }</Typography>

            <Box width='100%' display='flex' justifyContent='end'>

                <div className={
                        classes.icon
                    }
                //     onClick={
                //         () => navigate('/Dashboard/ClientFiles')

                // }
                >
                    <RiEditLine size={24}
                        color='#fff'/>

                </div>

            </Box>


        </div>
    )
}

export default MaterialCard
import {Button, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import React from 'react'
import {LuFolderPlus} from 'react-icons/lu';
import ClientCard from '../Components/ClientCard';
import image_company from '../assets/images/company1.png';
import image_company2 from '../assets/images/comany2.png';
import image_company3 from '../assets/images/company3.png';
import image_company4 from '../assets/images/company4.png';


// ! style :


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        padding: '40px'
    },
    upSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardContainer: {
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
    }


});


// ! create fake data :


const clientData = [
    {
        url: image_company,
        name: 'Company One',
        description: 'This is a brief description of Company One.'
    },
    {
        url: image_company2,
        name: 'Company Two',
        description: 'This is a brief description of Company Two.'
    },
    {
        url: image_company3,
        name: 'Company Three',
        description: 'This is a brief description of Company Three.'
    },
    {
        url: image_company4,
        name: 'Company Four',
        description: 'This is a brief description of Company Four.'
    }, {
        url: image_company,
        name: 'Company Five',
        description: 'This is a brief description of Company Five.'
    }, {
        url: image_company2,
        name: 'Company Six',
        description: 'This is a brief description of Company Six.'
      }, {
        url: image_company3,
        name: 'Company Seven',
        description: 'This is a brief description of Company Seven.'
    }, {
        url: image_company4,
        name: 'Company Eight',
        description: 'This is a brief description of Company Eight.'
    },
];


function Client() {


    const classes = useStyles()


    return (


        <div className={
            classes.container
        }>
            <div className={
                classes.upSection
            }>
                <Typography variant={'h5'}>Clients</Typography>


                <Button onClick={
                        () => setAddSiteDialogOpen(true)
                    }
                    sx={
                        {
                            ...buttons.greanButton,
                            height: '40px'
                        }
                }>
                    <LuFolderPlus size={20}/>
                    Ajouter un clients
                </Button>

            </div>
            <div className={
                classes.cardContainer
            }>
                {
                clientData.map((client, index) => (
                    <ClientCard key={index}
                        url={
                            client.url
                        }
                        name={
                            client.name
                        }
                        description={
                            client.description
                        }/>
                ))
            } </div>

        </div>
    )
}

export default Client


const buttons = {
    greanButton: {
        backgroundColor: 'rgba(83, 86, 255, 1)',
        color: '#fff',
        borderRadius: '5px',
        padding: '0 20px',
        border: '1px solid rgba(83, 86, 255, 1)',
        textTransform: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        '&:hover': {
            backgroundColor: '#fff',
            color: 'rgba(83, 86, 255, 1)',
            border: '1px solid rgba(83, 86, 255, 1)'
        }
    },
    greyButton: {
        backgroundColor: '#E7E7E7',
        color: '#515151',
        borderRadius: '5px',
        padding: '0 20px',
        border: '1px solid #E7E7E7',
        textTransform: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        '&:hover': {
            backgroundColor: '#E7E7E7',
            color: '#515151',
            border: '1px solid #515151'
        }
    }
}

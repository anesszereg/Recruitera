import {makeStyles} from '@mui/styles'
import React, {useState} from 'react'
import logo from '../assets/Svg/logo.svg'
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';

import {TbUsers} from "react-icons/tb";
import {IoMdTime} from "react-icons/io";
import {FaRegUser} from "react-icons/fa6";
import {
    IoMap,
    IoMapOutline,
    IoNotificationsOutline,
    IoNotificationsSharp,
    IoPeople,
    IoPeopleOutline,
    IoPerson,
    IoPersonOutline,
    IoSettingsSharp,
    IoTime,
    IoTimeOutline
} from "react-icons/io5";
import {IoMdNotificationsOutline} from "react-icons/io";
import {IoSettingsOutline} from "react-icons/io5";
import {FiLogOut} from "react-icons/fi";
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
    container: {

        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '40px',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
        borderRight: '1px solid #f5f5f5',
        height: '100vh'


    },
    navigation_center: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

})


function Sidebar() {

    const [Selected, setSelected] = useState(0)


    const navigation = [
        {
            name: 'List des sites',
            icon: <IoMapOutline size={'24px'}/>,
            selectedIcon: <IoMap size={'24px'}
                color='#00414A'/>,
            path: '/Dashboard/Liste-des-sites'
        },
        {
            name: 'Sous-traitant ',
            icon: <IoPeopleOutline size={'24px'}/>,
            selectedIcon: <IoPeople size={'24px'}
                color='#00414A'/>,
            path: '/Dashboard/Sous-traitant'
        },
        {
            name: 'Historique',
            icon: <IoTimeOutline size={'24px'}/>,
            selectedIcon: <IoTime size={'24px'}
                color='#00414A'/>,
            path: '/Dashboard/Historique'
        },
        {
            name: 'Modérateur',
            icon: <IoPersonOutline size={'24px'}/>,
            selectedIcon: <IoPerson size={'24px'}
                color='#00414A'/>,
            path: '/Dashboard/Modérateur'
        }, {
            name: 'Notification',
            icon: <IoNotificationsOutline size={'24px'}/>,
            selectedIcon: <IoNotificationsSharp size={'24px'}
                color='#00414A'/>,
            path: '/Dashboard/Notifications'
        }, {
            name: 'paramètre',
            icon: <IoSettingsOutline size={'24px'}/>,
            selectedIcon: <IoSettingsSharp size={'24px'}
                color='#00414A'/>,
            path: '/Dashboard/paramètre'
        }, {
            name: 'deconnexion',
            icon: <FiLogOut size={'24px'} color='#FF001F'/>,
            path: '/Dashboard/LogOut'
        },


    ]


    const classes = useStyles();
    return (
        <div className={
            classes.container
        }>
            <img src={logo}
                alt="logo"/>


            <div className="navigation_center">
                <List sx={
                    {
                        width: '100%',
                        maxWidth: 500
                    }
                }>
                    {
                    navigation.slice(0, 6).map((item, index) => (
                        <ListItem button
                            key={index}
                            sx={
                                {
                                    width: '250px',  
                                    margin: '10px 0', 
                                   
                                }
                            }
                            onClick={
                                () => setSelected(index)
                        }>

                            <Link  style={{
                                textDecoration:'none',
                                color: Selected === index ? '#00414A' : '#7e7e7e',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                            }} to={
                                item.path
                            }>
                                <ListItemIcon style={{width:'30px'}} > {
                                    Selected === index ? item.selectedIcon : item.icon
                                } </ListItemIcon>
                                <ListItemText sx={
                                        {
                                            fontSize: '16px',
                                            fontWeight: 'bold'
                                        }
                                    }
                                    primary={
                                        item.name
                                    }/>
                            </Link>
                        </ListItem>
                    ))
                } </List>
            </div>

            <div className="navigation_bottom">
                <List> {/* the last item from the array of navigation  */}

                    {
                    navigation.slice(-1).map((item, index) => (
                        <ListItem button
                            key={index}
                            sx={
                                {
                                    width: '250px',  
                                    margin: '10px 0', 
                                   
                                }
                            }
                            >
                            <Link style={{
                                textDecoration:'none',
                                color: '#FF001F',
                                // add hoover
                               
                                display: 'flex',
                            }} to={
                                item.path
                            }>

                                <ListItemIcon> {
                                    item.icon
                                } </ListItemIcon>

                                <ListItemText primary={
                                    item.name
                                }/>
                            </Link>

                        </ListItem>
                    ))
                } </List>
            </div>


        </div>
    )
}

export default Sidebar

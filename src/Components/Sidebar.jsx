import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Recruitera.png';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { PiBagSimpleBold } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import {
    IoHome,
    IoHomeOutline,
    IoPeople,
    IoPeopleOutline,
    IoPerson,
    IoPersonOutline,
    IoSettingsSharp
} from "react-icons/io5";
import { LuCpu } from "react-icons/lu";
import { BsCpuFill } from "react-icons/bs";
import { MdContactSupport } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaListCheck } from 'react-icons/fa6';
import { CiViewBoard } from 'react-icons/ci';

const useStyles = makeStyles({
    container: {
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '50px',
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
});

function Sidebar() {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();

    const [selected, setSelected] = useState();

    const navigation = [
        {
            name: 'Home',
            icon: <IoHomeOutline size={'24px'} />,
            selectedIcon: <IoHome size={'24px'} color='#5356FF' />,
            path: '/Dashboard/Home'
        },
        {
            name: 'Jobs ',
            icon: <PiBagSimpleBold size={'24px'} />,
            selectedIcon: <IoPeople size={'24px'} color='#5356FF' />,
            path: '/Dashboard/Employes'
        },
        {
            name: 'Candidates',
            icon: <IoPersonOutline size={'24px'} />,
            selectedIcon: <IoPerson size={'24px'} color='#5356FF' />,
            path: '/Dashboard/Clients'
        },
        {
            name: 'Board',
            icon: <CiViewBoard size={'24px'} />,
            selectedIcon: <BsCpuFill size={'24px'} color='#5356FF' />,
            path: '/Dashboard/Materiel'
        },
        {
            name: 'checklist',
            icon:<FaListCheck size='24px' />,
            selectedIcon: <IoSettingsSharp size={'24px'} color='#5356FF' />,
            path: '/Dashboard/Settings'
        },
        {
            name: 'Calender',
            icon: <SlCalender />,
            selectedIcon: <MdContactSupport size={'24px'} color='#5356FF' />,
            path: '/Dashboard/Support'
        },
    
    ];

    useEffect(() => {
        const currentPath = location.pathname;
        const currentIndex = navigation.findIndex(item => item.path === currentPath);
        setSelected(currentIndex);
    }, [location.pathname, navigation]);

    return (
        <div className={classes.container}>
            <img src={logo} alt="logo" width={'100px'} />

            <div className={classes.navigation_center}>
                <List sx={{ width: '100%', maxWidth: 500 }}>
                    {navigation.slice(0, 6).map((item, index) => (
                        <ListItem button
                            key={index}
                            sx={{
                                width: '250px',
                                margin: '10px 0',
                                textDecoration: 'none',
                                color: selected === index ? '#5356FF' : '#7e7e7e',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px'
                            }}
                            onClick={() => {
                                setSelected(index);
                                navigate(item.path);
                            }}>
                            <ListItemIcon style={{ width: '30px' }}>
                                {selected === index ? item.selectedIcon : item.icon}
                            </ListItemIcon>
                            <ListItemText sx={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: selected === index ? '#5356FF' : '#7e7e7e'
                            }}
                                primary={item.name} />
                        </ListItem>
                    ))}
                </List>
            </div>

            
        </div>
    );
}

export default Sidebar;

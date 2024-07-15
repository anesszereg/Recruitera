import {makeStyles} from '@mui/styles';
import React, {useState, useEffect} from 'react';
import logo from '../assets/images/LOGO.png';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {TbUsers} from "react-icons/tb";
import {IoMdTime} from "react-icons/io";
import {FaRegUser} from "react-icons/fa6";
import {
    IoHome,
    IoHomeOutline,
    IoMap,
    IoMapOutline,
    IoNotificationsOutline,
    IoNotificationsSharp,
    IoPeople,
    IoPeopleOutline,
    IoPerson,
    IoPersonOutline,
    IoSettingsSharp
} from "react-icons/io5";
import {LuCpu} from "react-icons/lu";
import {BsCpuFill} from "react-icons/bs";
import {MdContactSupport} from "react-icons/md";
import {MdOutlineContactSupport} from "react-icons/md";
import {IoSettingsOutline} from "react-icons/io5";
import {FiLogOut} from "react-icons/fi";
import {Link, useNavigate, useLocation} from 'react-router-dom';

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
});

function Sidebar() {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();

    const [selected, setSelected] = useState();

    const navigation = [
        {
            name: 'Page d accueil',
            icon: <IoHomeOutline size={'24px'}/>,
            selectedIcon: <IoHome size={'24px'} color='#5356FF'/>,
            path: '/Dashboard/Home'
        },
        {
            name: 'Employés ',
            icon: <IoPeopleOutline size={'24px'}/>,
            selectedIcon: <IoPeople size={'24px'} color='#5356FF'/>,
            path: '/Dashboard/Employes'
        },
        {
            name: 'Clients',
            icon: <IoPersonOutline size={'24px'}/>,
            selectedIcon: <IoPerson size={'24px'} color='#5356FF'/>,
            path: '/Dashboard/Clients'
        },
        {
            name: 'Matériel',
            icon: <LuCpu size={'24px'}/>,
            selectedIcon: <BsCpuFill size={'24px'} color='#5356FF'/>,
            path: '/Dashboard/Materiel'
        }, 
        {
            name: 'paramètre',
            icon: <IoSettingsOutline size={'24px'}/>,
            selectedIcon: <IoSettingsSharp size={'24px'} color='#5356FF'/>,
            path: '/Dashboard/Settings'
        }, 
        {
            name: 'Support',
            icon: <MdOutlineContactSupport size={'24px'}/>,
            selectedIcon: <MdContactSupport size={'24px'} color='#5356FF'/>,
            path: '/Dashboard/Support'
        }, 
        {
            name: 'deconnexion',
            icon: <FiLogOut size={'24px'} color='#FF001F'/>,
            path: '/Dashboard/LogOut'
        },
    ];

    useEffect(() => {
        const currentPath = location.pathname;
        const currentIndex = navigation.findIndex(item => item.path === currentPath);
        setSelected(currentIndex);
    }, [location.pathname, navigation]);

    return (
        <div className={classes.container}>
            <img src={logo} alt="logo" width={'100px'}/>

            <div className={classes.navigation_center}>
                <List sx={{width: '100%', maxWidth: 500}}>
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
                            <ListItemIcon style={{width: '30px'}}>
                                {selected === index ? item.selectedIcon : item.icon}
                            </ListItemIcon>
                            <ListItemText sx={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: selected === index ? '#5356FF' : '#7e7e7e'
                            }}
                            primary={item.name}/>
                        </ListItem>
                    ))}
                </List>
            </div>

            <div className={classes.navigation_bottom}>
                <List>
                    {navigation.slice(-1).map((item, index) => (
                        <ListItem button key={index} sx={{width: '250px', margin: '10px 0'}}>
                            <Link style={{
                                textDecoration: 'none',
                                color: '#FF001F',
                                display: 'flex'
                            }}
                            to={item.path}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name}/>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
}

export default Sidebar;

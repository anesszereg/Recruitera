import './App.css'

import Sidebar from './Components/Sidebar';
import {Box} from '@mui/material';
import {Outlet} from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {


    return (


        <Box display={'flex'}>

            <Sidebar/>

            <div className="layout">
                <div className="navbar">
                    <Navbar/>


                </div>


                <Outlet/>


            </div>


        </Box>

    )
}

export default App

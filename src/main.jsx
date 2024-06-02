import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './Pages/HomePage.jsx';
import Login from './Pages/Login.jsx';
import Client from './Pages/Client.jsx';
import Employee from './Pages/Employee.jsx';
import Material from './Pages/Material.jsx';
import Support from './Pages/Support.jsx';



const router = createBrowserRouter([
    {
        path: "/Dashboard",
        element: <App/>,
        children: [
            {
                path: "/Dashboard/Home",
                element: <HomePage/>
            },
            {
                path: "/Dashboard/Client",
                element: <Client    />  
            },
            {
                path: "/Dashboard/Employés",
                element: <Employee/>
            }
            ,
            {
                path: "/Dashboard/Materail",
                element: <Material/>
            }
            ,
            {
                path: "/Dashboard/Support",
                element: <Support/>
            }
        ]

    },
    {
        path: "/login",
        element: <Login/>
    
    }

]);

ReactDOM.createRoot(document.getElementById('root')).render (<React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>,)

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
import ClientFiles from './Pages/ClientFiles.jsx';
import { Provider } from 'react-redux';
import store from './Redux/Store.js';
import Settings from './Pages/Settings.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import SignUp from './Pages/SignUp.jsx';



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
                path: "/Dashboard/Clients",
                element: <Client    />  
            },
            {
                path: "/Dashboard/Employes",
                element: <Employee/>
            }
            ,
            {
                path: "/Dashboard/Materiel",
                element: <Material/>
            }
            ,
            {
                path: "/Dashboard/Support",
                element: <Support/>
            }
            ,
            {
                path: "/Dashboard/ClientFiles/:id",
                element: <ClientFiles/>
            }
            ,
            {
                path: "/Dashboard/Settings",
                element: <Settings/>
            }
        ]

    },
    {
        path: "/",
        element: <LoginPage/>
    
    },
    {
        path:'/Signup',
        element:<SignUp/>
    }

]);

ReactDOM.createRoot(document.getElementById('root')).render (<React.StrictMode>
    <Provider store={store}>
        
    <RouterProvider router={router} />
    </Provider>
</React.StrictMode>,)

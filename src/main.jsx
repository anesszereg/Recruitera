import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './Pages/HomePage.jsx';
import Login from './Pages/Login.jsx';



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    }, {
        path: "/dashboard",
        element: <HomePage/>
    },
    {
        path: "/login",
        element: <Login/>
    
    }

]);

ReactDOM.createRoot(document.getElementById('root')).render (<React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>,)

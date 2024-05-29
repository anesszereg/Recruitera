import React from 'react'
import './Sidebar.css'
import logo from'../../assets/Svg/logo.svg'
function Sidebar() {
    return (
    
    
    <div className="container">
        


        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>

        <div className="list_navigation">

            <ul>
                <li>Home</li>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </div>

        <div className="lougout_bnt">
            <button>Logout</button>
        </div>


    </div>
    
    
    
    
    )
}

export default Sidebar

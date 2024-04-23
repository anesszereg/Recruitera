import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
    
    
    <div className="container">
        


        <div className="logo">
            <img src="https://www.flaticon.com/svg/vstatic/svg/2948/2948130.svg?token=exp=1634878645~hmac=5f8d1f3b6d4c1f3f7f1e3a7d9c1a2f1d" alt="logo"/>
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

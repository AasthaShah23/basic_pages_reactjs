import React from 'react'
import './Header.css';
function Header() {
    return (
        <div>
            <div className="header">
                <div className="header-links">  
                    <img src="./image/Logo.png" alt="myImage" />
                    <p className='dashboard'>Dashboard</p>
                    <p className='link'>Team</p>
                    <p className='link'>Projects</p>
                    <p className='link'>Calender</p>
                </div>

                <div className="login-register-link">
                    <img src="./image/Login-Arrow.png" alt="myImage" />
                    <a href="#">Login</a>
                    <p>/</p>
                    <a href="#">Register</a>
                </div>
            </div>
        </div>
    )
}

export default Header

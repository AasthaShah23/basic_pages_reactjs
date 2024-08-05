import React from 'react'
import './Profile.css';
import Header from '../../Components/Header/Header'

function Profile() {
    return (
        <div className="profile-body">
            <Header />
            <div className="profile-box">
                    <div className="profile-details">
                        <center>
                        <img className='profile-img' src="./image/Profile.png" alt="myimg" />
                        <p className='profile-name'>Bonnie Green</p>
                        </center>
                    </div>
                    <div className="profile-password">
                        <p>Better to be safe than sorry</p>
                        <form action="#">

                            <label htmlFor="">Password</label>
                            <input type="password" placeholder='*************' />

                        </form>

                        <button className='unlock-btn'>
                            <i class="fa-solid fa-unlock"></i>
                            Unlock 
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default Profile

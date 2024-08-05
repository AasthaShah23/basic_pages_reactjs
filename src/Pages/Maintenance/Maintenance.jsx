import React from 'react'
import './Maintenance.css';
import Header from '../../Components/Header/Header'

function Maintenance() {
  return (
    <div className='maintenance-body'>
            <Header />
            <div className="maintenance-box">
                <img className='maintenance-img' src="./image/UnderMaintenance.png" alt="myimg" />
                <h1>Under Maintenance</h1>
                <p>Sorry for the inconvenience but we we're performing some maintenance at the moment. If you need to you
                    <p>can always <span>contact us</span>, otherwise we'll be back online shortly!</p>
                </p>
{/*  */}
                <button className='go-back-btn2'>
                    <i class="fa-solid fa-angle-left"></i>
                    Go back home
                </button>
            </div>
        </div>
  )
}

export default Maintenance

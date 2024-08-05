import React from 'react'
import './SomethingWrong.css';
import Header from '../../Components/Header/Header'

function SomethingWrong() {
    return (
        <div className='wrong-body'>
            <Header />
            <div className="wrong-box">
                <div className="wrong-msg">
                    <h1>Something has gone</h1>
                    <h1>seriously wrong</h1>
                    <p className='info'>It's always time for a coffee break. We should be back by the
                        <p>time you finish your coffee.</p></p>
                    <button className='go-back-btn'>
                        <i class="fa-solid fa-angle-left"></i>
                        Go back home
                    </button>
                </div>
                <div>
                    <img className='wrong-img' src="./image/Bg.png" alt="myimg" />
                </div>
            </div>
        </div>
    )
}

export default SomethingWrong

import React from 'react'
import './PageNotFound.css';
import Header from '../../Components/Header/Header'

function PageNotFound() {
    return (
        <div className='page-not-found-body'>
            <Header />
            <div className="page-not-found-box">
                <img className='not-found-img' src="./image/PageNotFound.png" alt="myimg" />
                <h1>Page Not found</h1>
                <p>oops! Looks like you followed a bad link. If you think this is a problem with us. please tell us.</p>
                <button className='go-back-btn1'>
                    <i class="fa-solid fa-angle-left"></i>
                    Go back home
                </button>
            </div>
        </div>
    )
}

export default PageNotFound

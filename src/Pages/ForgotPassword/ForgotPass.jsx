import React from 'react'
import './ForgotPass.css';
import Header from '../../Components/Header/Header'

function ForgotPass() {
  return (
    <div className="reset-pass-body">
      <Header />
      <div className="reset-pass-box">
        <div className="forgot-password">
          <h1>Forgot Your Password?</h1>
          <p>Don't fret! Just type in your email and we will send you a  
          <p>code to set your password!</p></p>
          <form action="#">
            <div className="email">
              <label htmlFor="">Your email</label>
              <input type="text" placeholder='name@example.com' />
            </div>
          </form>

          <button className='accbtn'>Reset Password</button>

        </div>
        <div>
          <img className='imagebox1' src="./image/Lock.jpg" alt="myimg" />
        </div>
      </div>
    </div>
  )
}

export default ForgotPass

import React from 'react'
import './ResetPass.css';
import Header from '../../Components/Header/Header'

function ResetPass() {
  return (
    <div className="reset-body">
      <Header />
      <div className="reset-box">
        <div>
          <img className='imagebox' src="./image/Login.jpg" alt="myimg" />
        </div>
        <div className="reset-password">
          <h1>Reset Password</h1>
          <form action="#">
            <div className="email">
              <label htmlFor="">Your email</label>
              <input type="text" placeholder='name@example.com' />
            </div>
            <div className="password">
              <label htmlFor="">Password</label>
              <input type="password" placeholder='************' />
            </div>
            <div className="con-pass">
              <label htmlFor="">Confirm New Pasword</label>
              <input type="password" placeholder='************' />
            </div>
          </form>
          <div className='terms-cond'>
            <input type="checkbox" id='checkbox' name='checkbox' required />
            <p>I accept the <span>Terms and Conditions</span></p>
          </div>

          <button className='accbtn'>Create Account</button>

        </div>
      </div>
    </div>
  )
}

export default ResetPass

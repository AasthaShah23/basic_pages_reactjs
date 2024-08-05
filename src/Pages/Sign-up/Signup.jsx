import React from 'react'
import './Signup.css';
import Header from '../../Components/Header/Header'

function Signup() {
  return (
    <div className="body">
      <Header />
      <div className="signup-box">
        <div>
          <img className='imagebox' src="./image/Login.jpg" alt="myimg" />
        </div>
        <div className="create-account">
          <h1>Create your free Account</h1>
          <form action="#">
            <div className="email">
              <label htmlFor="">Your email</label>
              <input type="text" placeholder='name@example.com' />
            </div>
            <div className="password">
              <label htmlFor="">Password</label>
              <input type="password" placeholder='**********' />
            </div>
            <div className="con-pass">
              <label htmlFor="">Confirm Pasword</label>
              <input type="password" placeholder='**********' />
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

export default Signup

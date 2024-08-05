import React from 'react'
import './Signin.css';
import Header from '../../Components/Header/Header'

function Signin() {
  return (
    <div className="sign-body">
      <Header />
      <div className="signin-box">
        <div>
          <img className='imagebox2' src="./image/Login.jpg" alt="myimg" />
        </div>
        <div className="sign-in-account">
          <h1>Sign In</h1>
          <form action="#">
            <div className="email">
              <label htmlFor="">Your email</label>
              <input type="text" placeholder='name@example.com' />
            </div>
            <div className="password">
              <label htmlFor="">Password</label>
              <input type="password" placeholder='***********' />
            </div>
          </form>
          <div className='terms-cond'>
            <input type="checkbox" id='checkbox' name='checkbox' required />
            <p>Remenber me</p>
          </div>

          <button className='accbtn'>Sign In</button>

        </div>
      </div> 
    </div>
  )
}

export default Signin

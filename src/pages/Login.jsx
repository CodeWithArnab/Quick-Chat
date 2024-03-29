import React, { useState } from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import {  Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate =useNavigate();
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }
  return (<>
    <div className='formContainer'>
    <div className='formWrapper'>
        <span className='logo'>Quick Chat</span>
        <span className='title'>Login</span>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            
            <button>Sign In</button>
        </form>
        {error && <span>Something went wrong!!</span>}
        <p>You don't have an account? <Link style={{color:"cyan",textDecoration:"none"}} to="/register">Register</Link></p>
    </div>

    </div>
  </>
  )
}

export default Login
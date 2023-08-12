import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';


const LOGIN_URL = '/auth/login'


const Login = () => {
  const { setAuth, persist, setPersist } = useAuth();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();


  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("Login form submitted")
    // make post request to the server and if the user exists then, 
    // log the user in, else return an error message
    try {
      const response = await axios.post(LOGIN_URL, 
        JSON.stringify({ username, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles
      console.log(roles)

      setAuth({ username, password, roles, accessToken });

      console.log(response?.data)
      setUsername('');
      setPassword('');

      //For now go to home page
      navigate("/")
      
      
    } catch (error) {
      if (error && !error.response) {
        toast.error('No server response')
      } else if (error.response?.status === 400) {
        toast.error('Missing username or password')
      } else if (error.response?.status === 401) {
        toast.error('Unauthorized')
      } else {
        toast.error('Login Failed');
      }
    } 
  
  }

  const togglePersist = () => {
    setPersist(!persist)
  }

  useEffect(() => {
    localStorage.setItem("persist", persist)
  }, [persist])

  return (
    <div className='log-in'>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
          {/* Same as */}
        <ToastContainer />
      <h1>Нэвтрэх</h1>
      <form className='log-in-form' onSubmit={handleLogin}>
        <input type="text" placeholder='Хэрэглэгчийн нэр' className='log-in-input' value={username} onChange={(e) => setUsername(e.target.value)} required></input>
        <input type="password" placeholder='Нууц үг' className='log-in-input' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
        <input type="submit" value="Нэвтрэх" className='log-in-submit-button'></input>
      </form>
      <div className='persistCheck'>
        <input 
          type="checkbox"
          id="persist"
          onChange={togglePersist}
          checked={persist}
        />
        <label htmlFor='persist'>Trust this device</label>
      </div>
      
      <p>Бүртгүүлэх үү? <a href="/sign-up">Бүртгүүлэх</a></p>
    </div>
  )
}

export default Login
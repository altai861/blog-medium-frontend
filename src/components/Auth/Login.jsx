import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setLogin } from './AuthSlice'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = async () => {
    const apiUrl = "http://localhost:3500/auth/login";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      })
    }
    try {
      const response = await fetch(apiUrl, requestOptions);
      if (!response.ok) {
        const error_data = await response.json();
        toast.error(error_data.message);
        return
      }
      const success_data = await response.json();
      console.log(success_data.accessToken);
      dispatch(setLogin(success_data.accessToken))
      navigate('/')

    } catch (error) {
      console.log(error.message)
    }

  }


  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login form submitted")
    // make post request to the server and if the user exists then, 
    // log the user in, else return an error message
    loginUser()
  
  }

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
      <p>Бүртгүүлэх үү? <a href="/sign-up">Бүртгүүлэх</a></p>
    </div>
  )
}

export default Login
import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login form submitted")
    // make post request to the server and if the user exists then, 
    // log the user in, else return an error message  
  
  }

  return (
    <div className='log-in'>
      <h1>Нэвтрэх</h1>
      <form className='log-in-form' onSubmit={handleLogin}>
        <input type="text" placeholder='Хэрэглэгчийн нэр' className='log-in-input' value={username} onChange={(e) => setUsername(e.target.value)} required></input>
        <input type="password" placeholder='Нууц үг' className='log-in-input' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
        <input type="submit" value="Нэвтрэх" className='log-in-submit-button'></input>
      </form>
      <p>Бүртгүүлсэх үү? <a href="/sign-up">Бүртгүүлэх</a></p>
    </div>
  )
}

export default Login
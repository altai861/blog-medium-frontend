import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignUp = (event) => {
    event.preventDefault()
    console.log("Sign up form submitted");
    // Register the user
    if (password !== confirmPassword) {
      console.log("Passwords are not matching")
    }
  }

  return (
    <div className='sign-up'>
      <h1>Бүртгүүлэх</h1>
      <form className='sign-up-form' onSubmit={handleSignUp}>
        <input type="text" placeholder='Хэрэглэгчийн нэр' className='sign-up-input' value={username} onChange={(e) => setUsername(e.target.value)} required></input>
        <input type="email" placeholder='Цахим шуудангийн хаяг' className='sign-up-input' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
        <input type="password" placeholder='Нууц үг' className='sign-up-input' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
        <input type="password" placeholder='Нууц үг бататгах' className='sign-up-input' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required></input>
        <input type="submit" value="Бүртгүүлэх" className='sign-up-submit-button'></input>
      </form>
      <p>Аль хэдийн бүртгүүлсэн үү? <a href="/login">Нэвтрэх</a></p>
    </div>
  )
}

export default SignUp
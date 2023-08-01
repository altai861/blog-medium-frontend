import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const signUpUser = async () => {
    const apiUrl = "http://localhost:3500/auth/sign-up";
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        "username": username,
        "email": email,
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
      navigate('/login')

    } catch (error) {
      console.log(error.message)
    }
  }

  const handleSignUp = (event) => {
    event.preventDefault()
    console.log("Sign up form submitted");
    // Register the user
    if (password !== confirmPassword) {
      toast.error('Нууц үгнүүд хоорондоо таарахгүй байна.'); 
      return 
    } else if (password.length < 8){
      toast.error('Нууц үг 8 болон түүнээс дээш тэмдэгт агуулах ёстой.'); 
      return 
    }

    signUpUser();

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
      </form>
      <p>Аль хэдийн бүртгүүлсэн үү? <a href="/login">Нэвтрэх</a></p>
    </div>
  )
}

export default SignUp
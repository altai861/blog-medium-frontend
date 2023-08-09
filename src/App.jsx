import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Homepage/Home'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route 
                exact path="/" element={<Home />}
            />
            <Route 
                path="login" element={<Login />}
            />
            <Route 
                path="sign-up" element={<SignUp />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

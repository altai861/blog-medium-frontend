import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Homepage/Home'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import { useSelector } from 'react-redux'


function App() {
  const token = useSelector((state) => state.token);
  console.log(token);
  let isAuth = token !== null ? true : false;
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route 
                exact path="/" element={ isAuth ? <Home /> : <Navigate to="/login"/>}
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

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Homepage/Home'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import RequireAuth from './components/Auth/RequireAuth'
import PersistLogin from './components/Auth/PersistLogin'
import Entertainment from './components/Entertainment/Entertainment'
import Education from './components/Education/Education'

const ROLES = {
  'User': 2001,
  'Admin': 1984
}


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>

            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                <Route 
                    exact path="/" element={<Home />}
                />
                <Route 
                  path="entertainment"
                  element={<Entertainment />}
                />
                <Route 
                  path="education"
                  element={<Education />}
                />
              </Route>
            </Route>
            
            
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

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Homepage/Home'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route 
                exact path="/" element={<Home />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

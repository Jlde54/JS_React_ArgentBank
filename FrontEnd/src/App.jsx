import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Sign_In from './pages/Sign-In.jsx'
import User from './pages/User.jsx'
import Profile from './pages/Profile.jsx'
import Error from './pages/Error.jsx'
import Footer from './components/Footer.jsx'
import './styles/App.module.scss'
import { useState } from 'react'

function App() {
    
  const ROUTES = {
    HOME: '/',
    SIGNIN: '/Sign-In',
    USER: '/User',
    PROFILE: '/Profile',
    ERROR: '*'
  }

  const [user, setUser] = useState ({
    token: null,
    firstName: "",
    lastName: "",
  })

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home user={user} setUser={setUser} />}/>
            <Route path={ROUTES.SIGNIN} element={<Sign_In user={user} setUser={setUser}/>}/>
            <Route path={ROUTES.USER} element={<User user={user} setUser={setUser}/>}/>
            <Route path={ROUTES.PROFILE} element={<Profile user={user} setUser={setUser}/>}/>
            <Route path={ROUTES.ERROR} element={<Error user={user} setUser={setUser}/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

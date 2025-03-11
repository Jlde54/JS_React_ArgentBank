import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Sign_In from './pages/Sign-In.jsx'
import User from './pages/User.jsx'
import EditUser from './pages/EditUser.jsx'
import Footer from './components/Footer.jsx'
import './styles/App.module.scss'

function App() {
    
  const ROUTES = {
    HOME: '/',
    SIGNIN: '/Sign-In',
    USER: '/User',
    EDITUSER: '/EditUser'
  }

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />}/>
            <Route path={ROUTES.SIGNIN} element={<Sign_In />}/>
            <Route path={ROUTES.USER} element={<User />}/>
            <Route path={ROUTES.EDITUSER} element={<EditUser />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App

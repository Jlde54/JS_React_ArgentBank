import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Sign_In from './pages/Sign-In.jsx'
import User from './pages/User.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './styles/App.module.scss'

function App() {
    
  const ROUTES = {
    HOME: '/',
    SIGNIN: '/Sign-In',
    USER: '/User'
  }

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />}/>
            <Route path={ROUTES.SIGNIN} element={<Sign_In />}/>
            <Route path={ROUTES.USER} element={<User />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App

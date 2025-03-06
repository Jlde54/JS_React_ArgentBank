import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import './styles/App.module.scss'

function App() {
    
  const ROUTES = {
    HOME: '/'
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

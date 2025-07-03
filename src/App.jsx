import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App

import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/intro'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ResetPasswordPage from './pages/ResetPasswordPage'

import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  // Masquer la navbar sur ces routes
  const hideNavbarRoutes = ['/login', '/register', '/reset-password']

  return (
    <div className="App">
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </div>
  )
}

export default App

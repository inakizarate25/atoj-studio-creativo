import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (

 <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/servicios" element={<Services/>} />
        <Route path="/contacto" element={<Contact/>} />
        <Route path="*" element={<h2>404 Not found</h2>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {


  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="*" element={<h2>404 Not found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    

  )
}

export default App
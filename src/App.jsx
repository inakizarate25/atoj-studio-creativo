import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import Compra from './components/compra/Compra'
import Descarga from './components/descarga/Descarga'
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
        <Route path="/compra" element={<Compra/>} />
        <Route path="/descarga" element={<Descarga/>} />
        <Route path='/descargable/:id' element={<Descarga/>} />
        <Route path="*" element={<h2>404 Not found</h2>} />
      </Routes>
    </BrowserRouter>
    

  )
}

export default App
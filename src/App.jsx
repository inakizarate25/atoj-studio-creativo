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
import products from './data'


const App = () => {


  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/shop" element={<Shop/>} />
        <Route exact path="/portfolio" element={<Portfolio/>} />
        <Route exact path="/compra" element={<Compra/>} />
        <Route exact path="/descargable/:id" element={<Descarga products={products}/>} />
        <Route path="*" element={<h2>404 Not found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    

  )
}

export default App
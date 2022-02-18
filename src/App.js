import React from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Topbar'

import Home from './vistas/Home'
import Nosotros from './vistas/Nosotros'
import Sucursales from './vistas/Sucursales'
import Tienda from './vistas/Tienda'

import {Routes, Route, Link} from 'react-router-dom'

export default function App() {
  return (
    <div>
      
    
      {/* <Navbar></Navbar>
      <Header></Header>
      <Content></Content>
      <Footer></Footer> */}

  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="nosotros" element={<Nosotros />} />
      <Route path="sucursales" element={<Sucursales />} />
      <Route path="tienda" element={<Tienda />} />
    </Routes>
    </div>
  )
}

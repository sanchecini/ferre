import React from 'react'
import Whatsapp from './Whatsapp'

export default function Topbar() {
  return (
  <div>
  <Whatsapp/>
    <nav className="navbar navbar-expand-lg bg-light navbar-light d-none d-lg-block" id="templatemo_nav_top">
  <div className="container text-light">
    <div className="w-100 d-flex justify-content-between">
      <div >
       
        <a className="navbar-sm-brand enlaces text-normal text-decoration-none" href="mailto:prueba@gmail.com">  <i className="fa fa-envelope mx-2" /> prueba@gmail.com</a>
       
        <a className="navbar-sm-brand enlaces text-normal text-decoration-none" href="tel:3171140976"> <i className="fa fa-phone mx-2" /> 3171140976</a>
      </div>
      <div>
        <a className="text-normal icon-facebook" href="https://fb.com/" target="_blank" rel="sponsored"><i style={{color: "blue"}} className="fab fa-facebook-f fa-sm fa-fw me-2" /></a>
        <a className="text-normal icon-facebook" href="https://fb.com/" target="_blank" rel="sponsored"><i style={{color: "blue"}} className="fab fa-facebook-f fa-sm fa-fw me-2" /></a>
        <a className="text-normal icon-facebook" href="https://fb.com/" target="_blank" rel="sponsored"><i style={{color: "blue"}} className="fab fa-facebook-f fa-sm fa-fw me-2" /></a>
        <a className="text-normal icon-facebook" href="https://fb.com/" target="_blank" rel="sponsored"><i style={{color: "blue"}} className="fab fa-facebook-f fa-sm fa-fw me-2" /></a>
      </div>
    </div>
  </div>
</nav>
  
</div>
    
  )
}

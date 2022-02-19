import React from 'react'
import { Link } from 'react-router-dom'
import Whatsapp from './Whatsapp'







export default function Header() {
  return (
   
   <div>

      
    

  {/* Header */}
  <nav className="navbar navbar-expand-lg navbar-light shadow">
    <div className="container d-flex justify-content-between align-items-center">
      <a className="navbar-brand text-success logo h1 align-self-center" href="index.html">
      <img className="logos-img" src="img/logos.jpg" alt />
      </a>
      <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
        <div className="flex-fill">
          <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
            <li className="nav-item">
             
              <Link to="/" className="nav-link">Inicio</Link> 
            </li>
            <li className="nav-item">
            <Link to="/nosotros" className="nav-link">Nosotros</Link> 
            </li>
            <li className="nav-item">
            <Link to="/tienda" className="nav-link">Tienda</Link> 
            </li>
            <li className="nav-item">
            <Link to="/sucursales" className="nav-link">Sucursales</Link> 
            </li>
          </ul>
        </div>
        <div className="navbar align-self-center d-flex">
          <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
            <div className="input-group">
              <input type="text" className="form-control" id="inputMobileSearch" placeholder="Buscar..." />
              <div className="input-group-text">
                <i className="fa fa-fw fa-search" />
              </div>
            </div>
          </div>
          <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
            <i className="fa fa-fw fa-search text-dark mr-2" />
          </a>
         
          <a className="nav-icon position-relative text-decoration-none" href="#">
          <i className="fa fa-phone mx-2" />
          <a className="navbar-sm-brand text-decoration-none" href="tel:3171140976">Llámanos</a>
          </a>
        </div>
      </div>
    </div>
  </nav>
  {/* Close Header */}
  {/* Modal */}
  <div className="modal fade bg-white" id="templatemo_search" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
      <div className="w-100 pt-1 mb-5 text-right">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <form action method="get" className="modal-content modal-body border-0 p-0">
        <div className="input-group mb-2">
          <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Buscar ..." />
          <button type="submit" className="input-group-text bg-success text-light">
            <i className="fa fa-fw fa-search text-white" />
          </button>
        </div>
      </form>
    </div>
  </div>
</div>




  )
}

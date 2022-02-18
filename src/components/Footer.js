import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-claro" id="tempaltemo_footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light logo">Ferreteria El Bosque</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw" />
                                AV. CIRCUNVALACIÓN PONIENTE 10

                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw" />
                                El Grullo, Jalisco, México
                            </li>
                            <li>
                                <i className="fa fa-phone fa-fw" />
                                <a className="text-decoration-none" href="tel:+523171140976">3171140976</a>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw" />
                                <a className="text-decoration-none" href="mailto:prueba@gmail.com">prueba@gmail.com</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Productos</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><a className="text-decoration-none" href="#">A</a></li>
                            <li><a className="text-decoration-none" href="#">B</a></li>
                            
                        </ul>
                    </div>
                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Informacion adicional</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>  <Link to="/" className="text-decoration-none">Inicio</Link> </li>
                            <li> <Link to="/nosotros" className="text-decoration-none">Nosotros</Link> </li>
                            <li> <Link to="/sucursales" className="text-decoration-none">Sucursales</Link> </li>
                            <li> <Link to="/tienda" className="text-decoration-none">Tienda</Link> </li>
                        </ul>
                    </div>
                </div>
                <div className="row text-light mb-4">
                    <div className="col-12 mb-3">
                        <div className="w-100 my-3 border-top border-light" />
                    </div>
                    <div className="col-auto me-auto">
                        <ul className="list-inline text-left footer-icons">
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw" /></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw" /></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw" /></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                         <p className="text-left text-light">
                         &copy; {new Date().getFullYear()} Ferreteria El bosque | Designed by nosotros
                        </p>
                    </div>
                </div>
            </div>
           
        </footer>

    )
}

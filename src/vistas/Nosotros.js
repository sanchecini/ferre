import React from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";


function Nosotros() {
  return (
    <div>
      <Topbar />
      <Header></Header>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center py-5">
            
            <div className="col-md-4 ">
              <img src="img/piezas.jpg" style={{width: 400 }} alt="Aboutus" />
            </div>

            <div className="col-md-8 text-normal">
              <h1>Nosotros</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            
          </div>
        </div>
      </section>




      <Footer></Footer>



    </div>
  );
}
export default Nosotros;
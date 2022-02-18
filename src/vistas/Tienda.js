import React from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

function Nosotros() {
  return (
    <div>


      <Topbar />
      <Header />

      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Tienda</h1>
          <p>
            Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Nosotros;
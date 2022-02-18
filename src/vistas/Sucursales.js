import React from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function Sucursales() {
  return (
    <div>
<Topbar/>
<Header/>
<div className="container-fluid bg-light py-5">
  <div className="col-md-6 m-auto text-center">
    <h1 className="h1">Sucursales</h1>
    <p>
      Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet.
    </p>
  </div>
</div>


     <MapContainer center={[19.807363042614707, -104.21958776191242]} zoom={15} style={{ height: 600, width: "100%" }} scrollWheelZoom={false}>
     <TileLayer
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
     <Marker position={[19.80839108171527, -104.22788637039615]}>
       <Popup>
       Avenida Circunvalación Poniente 10 <br /> El Grullo, Jal. 
       </Popup>
     </Marker>

     <Marker position={[19.80766352866639, -104.21730784065777]}>
       <Popup>
       Hidalgo 46 <br /> El Grullo, Jal
       </Popup>
     </Marker>

   </MapContainer>


<Footer/>
</div>
      



   
  );
}
export default Sucursales;
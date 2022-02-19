import React from 'react'
import FloatingWhatsApp from "react-floating-whatsapp";
import logoBosque from './images/logos.jpg'


export default function Whatsapp() {
  return (
    <FloatingWhatsApp 
    phoneNumber="+3171140976"
    avatar = {logoBosque}
    chatMessage="Hola! 🤝 En que podemos ayudarlo?"
    statusMessage="En linea"
    allowClickAway
    accountName="Ferremateriales El Bosque "
    placeholder="Escriba su mensaje"
    notificationSound
    height={300}
    notification={true}
    notificationDelay={30000}
    notificationSound = {true}
    
    
    />
  )
}

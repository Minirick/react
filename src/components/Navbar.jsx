import React, { useState } from "react"
import "../css/navbar.css"
import "../css/buttom_login.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  
  return (
    <>
      <nav className='navbar'>
        <h3 className='logo'>Palacio de los Fritos</h3>
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Inicio</li>
          </Link>
          <Link to='/product' className='services'>
            <li>Productos</li>
          </Link>
          
          <Link to='/contact' className='services'>
            <li>Contacto</li>
          </Link>

          <button className='button_login'>Ingresar</button>

          
        </ul>
        
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar
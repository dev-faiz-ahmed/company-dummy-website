import React from 'react'
import{ Link} from 'react-router-dom'
import logo from '../images/logo.png'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light ">
  <div className="container-fluid">
  <Link to="/" className="nav-link"><img src={logo} className='logo'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 navfield ">
        <li className="nav-item">
        <Link to="/" className="nav-link navfield ">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link navfield">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link navfield">Contact</Link>
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}

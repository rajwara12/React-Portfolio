import React from 'react'
 

import {
     NavLink
  } from "react-router-dom"; 
export default function Header() {
    return (
        <div>
            
            <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-10 mx-auto">

                 
            <nav className="navbar navbar-expand-lg navbar-light  ">
  <div className="container-fluid">
    <NavLink className="navbar-brand navbar" to="/">Pro Developers</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName='menu_active' exact    className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' exact   className="nav-link " to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active'  exact className="nav-link " to="/services"  >Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active'  exact className="nav-link " to="/contact"  >Contact</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</div>
              </div>
                
                </div> 
 </div>
    )
}

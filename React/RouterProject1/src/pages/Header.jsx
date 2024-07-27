import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink 
                to='/' 
                className="nav-link active" aria-current="page" 
              >
                Home
              </NavLink>

              <NavLink 
                to='/blogs' 
                className="nav-link active" aria-current="page" 
              >
                Blogs
              </NavLink>

              <NavLink 
                to='/about' 
                className="nav-link active" aria-current="page" 
              >
                About
              </NavLink>

              <NavLink 
                to='/github' 
                className="nav-link active" aria-current="page" 
              >
                GitHub
              </NavLink>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

import React from 'react';
import Home from './Home';
import Project from './Project';
import About from './About';
import Contact from './Contact';


const Navbar = () => {
  return (
    <>

<nav className="navbar navbar-expand-lg sticky-top shadow">
  <div className="container-fluid">
    <a className="navbar-brand text-light fw-bold" href="#" >MJ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-light fw-bold" aria-current="page" href="#" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fw-bold" href="#project">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fw-bold" href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fw-bold" href="#about">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <Home />
    <Project />
    <About />
    <Contact />

    </>
  );
}

export default Navbar;

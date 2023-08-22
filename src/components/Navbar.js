import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Project from './Project';
import About from './About';
import Contact from './Contact';


const Navbar = () => {
  return (
    <>

<nav class="navbar navbar-expand-lg sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand text-light fw-bold" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-light fw-bold" aria-current="page" href="#" >Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light fw-bold" href="#project">Project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light fw-bold" href="#contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light fw-bold" href="#about">About</a>
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

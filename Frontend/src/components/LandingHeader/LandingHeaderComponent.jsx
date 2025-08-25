import React from 'react';
import './LandingHeaderComponent.scss';
// Importerer navigation og slideshow komponenter
import NavComponent from '../NavComponent/NavComponent';
import Slideshow from '../Slideshow/Slideshow';

// Importerer logo billede
import Logo from '../../assets/images/Logo.svg';
// Tilføj NavLink import
import { NavLink } from 'react-router-dom';

// Header med logo, navigation og slideshow
export default function LandingHeaderComponent() {
  return (
    <div id='HeaderComponent'>
      <header id='GlobalHeader'>
        {/* Logo som link til landing page */}
        <NavLink to="/">
          <img src={Logo} alt="Site Logo" />
        </NavLink>

        {/* Navigation */}
        <div id='NavContainer'>
          <NavComponent />

        </div>
      </header>
      {/* Slideshow under header */}
      <Slideshow />
    </div>
  );
}
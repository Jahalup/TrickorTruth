import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


export const Navbarmap = props => (
  <nav className="navbar navmain">
    <span className="navbar-brand mb-0 h1 namelogo" ><img id="pump" alt="pumpkin" src={ require('./pumplogo.png') } />Trick or Truth</span>
    <Link className="navlinkmap" to='./'>Home</Link>
    
  </nav>
)


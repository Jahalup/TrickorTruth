import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


export const Nav = props => (
  <nav className="navbar navmain">
    <span className="navbar-brand mb-0 h1 namelogo" ><img id="pump" alt="pumpkin" src={ require('./pumplogo.png') } />Trick or Truth</span>
    <Link className="navlink" to={'/updatepage?username=' + props.name}>Update My Info</Link>
  </nav>
)


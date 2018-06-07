import React from "react";
import "./eachart.css";

export const SavedHouse = props => (


<div >

    <div >
    <div className="card maincard">
  <div className="card-body eachdiv">
    <h6 class="cardttl">{props.fulladdress}</h6>
    <p>Healthy treat: {props.healthy}</p>
    <p>Peanut-free treat: {props.peanutfree}</p>
    <p>Treat name: {props.treattype}</p>
  </div>
  </div>
  </div>
  </div>

    )

import React from "react";
import "./form.css";

export const Yesno = props => (

<div className="btn-group">
  <button type="button" className="btn btn-warning dropdown-toggle yesnobtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Yes/No
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item">Yes</a>
    <a className="dropdown-item">No</a>
    </div>
  
</div>
)

import React from "react";
import "./form.css";

export const Yesno = props => (
  <div>

  <div className="form-inline ">
 <label className="dropdownlabel" htmlFor="inputState ">{props.label}</label> 

<select {...props} id="inputState2" className="form-control " >

<option>Yes/No</option>
  <option>Yes</option>
  <option>No</option>

  </select>
</div>
</div>
)



/* <div className="btn-group">
  <button type="button" className="btn btn-warning dropdown-toggle yesnobtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Yes/No
  </button>
  <div className="dropdown-menu">
  <button class="dropdown-item" type="button">Yes</button>
  <button class="dropdown-item" type="button">No</button>
    {/* <a className="dropdown-item">No</a>
    </div>
  
</div> */

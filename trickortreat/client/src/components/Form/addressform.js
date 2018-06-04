import React from "react";
import "./form.css";

export const Address = props => (
    <div>
    <div className="form-group">
    <label htmlFor="inputAddress2">Address</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  {/* <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
  </div> */}
  </div>

)
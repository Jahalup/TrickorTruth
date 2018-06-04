import React from "react";
import "./form.css";

export const Zipcode = props => (
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
)
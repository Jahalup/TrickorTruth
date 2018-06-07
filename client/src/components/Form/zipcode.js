import React from "react";
import "./form.css";

export const Zipcode = props => (
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Zip</label>
      <input {...props} type="number" className="form-control" id="inputZip" />
    </div>
)
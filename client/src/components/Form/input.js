import React from "react";
import "./form.css";

export const Input = props => (
  <div id="inputmargin" className="input-group mb-3">
  <input {...props} type="text" className="form-control " placeholder={props.place} aria-label={props.place} aria-describedby="basic-addon1" />
  </div>
);


 

import React from "react";
import "./form.css";

export const City = props => (


    <div className="form-group col-md-6">
      <label htmlFor="inputCity">City</label>
      <input {...props} type="text" className="form-control" id="inputCity"/>
    </div>



    )
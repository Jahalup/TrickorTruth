
import React from "react";
import "./card.css";
  
export const Card = ({children}) => (
  <div className="card maincard ">
  <div className="card-body">
    {children}

  </div>
</div>
);
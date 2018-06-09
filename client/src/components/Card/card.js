
import React from "react";
import "./card.css";
  
export const Card = ({children}) => (
  <div className="card maincard shadow-lg p-3 mb-5 bg-white rounded " >
  <div className="card-body border border-warning rounded " >
    {children}

  </div>
</div>
);
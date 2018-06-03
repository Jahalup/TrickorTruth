import React from "react";
import "./grid.css";

export const Container = ({ fluid, children }) => (
  <div id="trick" className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
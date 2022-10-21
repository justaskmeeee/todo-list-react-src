import React from "react";
import { NavLink } from "react-router-dom";

const Filters = () => {
  return (
    <ul>
      <NavLink to='/'>All</NavLink>
      <NavLink to='active'>Active</NavLink>
      <NavLink to='completed'>Completed</NavLink>
    </ul>
  );
}

export default Filters;
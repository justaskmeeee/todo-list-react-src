import React from "react";
import { NavLink } from "react-router-dom";

const Filters = () => {
  return (
    <ul className='filters'>
      <NavLink className='filters__link' to='/' end>All</NavLink>
      <NavLink className='filters__link' to='active'>Active</NavLink>
      <NavLink className='filters__link' to='completed'>Completed</NavLink>
    </ul>
  );
}

export default Filters;
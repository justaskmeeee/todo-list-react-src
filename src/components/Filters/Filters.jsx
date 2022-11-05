import React from "react";
import { NavLink } from "react-router-dom";
import { changeFilter } from "../../store/slices/todoSlice";
import classNames from "classnames";
import s from './Filters.module.scss';

const Filters = () => {
  const filterLink = ({isActive}) => {
    return classNames(s.filter__link, {
      [s.active]: isActive,
      [s.inactive]: !isActive,
    });
  };

  return (
    <ul className={s.filter}>
      <NavLink className={filterLink} to='/' end onClick={() => changeFilter('')}>All</NavLink>
      <NavLink className={filterLink} to='active' onClick={() => changeFilter('active')}>Active</NavLink>
      <NavLink className={filterLink} to='completed' onClick={() => changeFilter('completed')}>Completed</NavLink>
    </ul>
  );
}

export default Filters;
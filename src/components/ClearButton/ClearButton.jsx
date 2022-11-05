import React from "react";
import { useDispatch } from "react-redux";
import { clearCompletedTodos } from "../../store/slices/todoSlice";
import classNames from "classnames";
import s from './ClearButton.module.scss';

const ClearButton = ({visibility}) => {
  const dispatch = useDispatch();

  const clearCompletedTodoItems = () => {
    dispatch(clearCompletedTodos());
  }
  
  const clear = classNames(s.clear, {
    [s.clear_show]: visibility,
    [s.clear_hide]: !visibility,
  });

  return (
    <button 
      className={clear}
      onClick={clearCompletedTodoItems}
    >
      Clear completed
    </button>
  );
}

export default ClearButton;
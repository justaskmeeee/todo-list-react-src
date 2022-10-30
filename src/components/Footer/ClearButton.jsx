import React from "react";
import { useDispatch } from "react-redux";
import { clearCompletedTodos } from "../../store/slices/todoSlice";

const ClearButton = ({visibility}) => {
  const dispatch = useDispatch();

  const clearCompletedTodoItems = () => {
    dispatch(clearCompletedTodos());
  }
  
  return (
    <button 
      className={visibility ? 'clear clear_show' : 'clear clear_hide'}
      onClick={() => clearCompletedTodoItems()}
    >
      Clear completed
    </button>
  );
}

export default ClearButton;
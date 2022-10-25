import React from "react";
import { useDispatch } from "react-redux";
import { clearCompletedTodos } from "../../store/slices/todoSlice";

const ClearButton = () => {
  const dispatch = useDispatch();

  const clearCompletedTodoItems = () => {
    dispatch(clearCompletedTodos());
  }
  
  return (
    <button className='clear' onClick={() => clearCompletedTodoItems()}>Clear completed</button>
  );
}

export default ClearButton;
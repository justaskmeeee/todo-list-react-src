import React from "react";
import { useDispatch } from "react-redux";
import { todoStatus, todoRemove } from "../../store/slices/todoSlice";

const Item = ({id, text, completed}) => {
  const dispatch = useDispatch();
  
  const setTodoStatus = (id) => {
    dispatch(todoStatus(id));
  }

  const removeTodoItem = (id) => {
    dispatch(todoRemove(id));
  }

  return (
    <li>
      <input 
        type='checkbox'
        checked={completed}
        onChange={() => setTodoStatus({id})}
      />
      <label>{text}</label>
      <button onClick={() => removeTodoItem({id})}>X</button>
    </li>
  );
}

export default Item;
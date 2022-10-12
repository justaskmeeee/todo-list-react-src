import React from "react";
import { useDispatch } from "react-redux";
import { todoRemove, todoStatus } from "../../store/slices/todoSlice";

const Item = ({id, text, completed}) => {
  const dispatch = useDispatch();
  
  const removeTodoItem = (id) => {
    dispatch(todoRemove(id));
  }

  const setTodoStatus = (id) => {
    dispatch(todoStatus(id))
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
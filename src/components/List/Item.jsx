import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoStatus, todoRemove, editTodo } from "../../store/slices/todoSlice";
import './Item.scss';

const Item = ({id, text, completed}) => {
  const [editValue, setEditValue] = useState(text);
  const [editing, setEditing] = useState(true);
  const dispatch = useDispatch();
  
  const setTodoStatus = (id) => {
    dispatch(todoStatus(id));
  }

  const editTodoItemText = (event) => {
    setEditValue(event.target.value);
  }

  const applyEditing = (event) => {
    if (event.key === 'Enter' && editValue.trim() !== '') {
      dispatch(editTodo({id, text: editValue}));
      setEditing(true);
    }
  }

  const cancelEditing = () => {
    dispatch(editTodo({id, text: editValue}));
    setEditing(true);
  }

  const removeTodoItem = (id) => {
    dispatch(todoRemove(id));
  }

  return (
    <li className={completed ? 'completed' : null}>
      <div>
        <input 
          type='checkbox'
          onChange={() => setTodoStatus({id})}
          checked={completed}
        />
        {editing 
            ? 
              <label onDoubleClick={() => setEditing(false)}>{editValue}</label> 
            :
              <input 
                type='text' 
                value={editValue} 
                onChange={(event) => editTodoItemText(event)} 
                onKeyDown={(event) => applyEditing(event)}
                onBlur={() => cancelEditing()}
                autoFocus
              />
        }
        <button onClick={() => removeTodoItem({id})}>X</button>
      </div>
    </li>
  );
}

export default Item;
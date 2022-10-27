import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoStatus, todoRemove, editTodo, cancelTodoEditing } from "../../store/slices/todoSlice";
import './Item.scss';

const Item = ({id, text, completed}) => {
  const [editValue, setEditValue] = useState(text);
  const [isEditing, setIsEditing] = useState(true);
  const [removeItemIsShown, setRemoveItemIsShown] = useState(false);
  const dispatch = useDispatch();
  
  const setTodoStatus = (id) => {
    dispatch(todoStatus(id));
  }

  const editTodoItemText = (event) => {
    setEditValue(event.target.value);
  }
  
  const trackingEditing = (event) => {
    switch (event.key) {
      case 'Enter':
        dispatch(editTodo({id, text: editValue}));
        setIsEditing(true)
        break;
      case 'Escape':
        dispatch(cancelTodoEditing({id, text: text}))
        setEditValue(text);
        setIsEditing(true);
        break;
    }
  }

  const cancelEditing = () => {
    dispatch(editTodo({id, text: editValue}));
    setIsEditing(true);
  }

  const removeTodoItem = (id) => {
    dispatch(todoRemove(id));
  }

  return (
    <li 
      onMouseEnter={() => setRemoveItemIsShown(true)}
      onMouseLeave={() => setRemoveItemIsShown(false)}
    >
      <div className="todo-item">
        {isEditing && (
          <input 
            type='checkbox'
            className='toggle'
            onChange={() => setTodoStatus({id})}
            checked={completed}
          />
        )}
        {isEditing ? 
          <label className='todo-item__text' onDoubleClick={() => setIsEditing(false)}>
            {editValue}
          </label> :
          <input 
            type='text'
            maxLength={100}
            className='todo-item__editing' 
            value={editValue} 
            onChange={(event) => editTodoItemText(event)} 
            onKeyDown={(event => trackingEditing(event))}
            onBlur={() => cancelEditing()}
            autoFocus
          />
        }
        {removeItemIsShown && (
          <button className='todo-item__remove' onClick={() => removeTodoItem({id})}></button>
        )}
      </div>
    </li>
  );
}

export default Item;
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoStatus, todoRemove, editTodo } from "../../store/slices/todoSlice";
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

  const applyEditing = (event) => {
    if (event.key === 'Enter' && editValue.trim() !== '') {
      dispatch(editTodo({id, text: editValue}));
      setIsEditing(true);
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
            className='todo-item__toggle'
            onChange={() => setTodoStatus({id})}
            checked={completed}
          />
        )}
        {isEditing 
            ? 
              <label className='todo-item__text' onDoubleClick={() => setIsEditing(false)}>{editValue}</label> 
            :
              <input 
                type='text'
                className='todo-item__editing' 
                value={editValue} 
                onChange={(event) => editTodoItemText(event)} 
                onKeyDown={(event) => applyEditing(event)}
                onBlur={() => cancelEditing()}
                autoFocus
              />
        }
        {removeItemIsShown && (
          <button className='todo-item__remove' onClick={() => removeTodoItem({id})}>
            X
          </button>
        )}
      </div>
    </li>
  );
}

export default Item;
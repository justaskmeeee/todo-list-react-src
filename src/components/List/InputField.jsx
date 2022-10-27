import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import './InputField.scss';
import { useEffect } from "react";

const checkTheCompletionOfAllTodoItems = (items) => {
  if (items.length === 0) return;

  return items.every(item => item.completed);
}

const InputField = ({text, handleInput, handleAddTodo, handleToggleAll}) => {
  const [toggleAllIsShown, setToggleAllIsShown] = useState(false);
  const [allTodoItemsCompleted, setAllTodoItemsCompleted] = useState(false);
  const todoItems = useSelector(state => state.todos.items);  

  useEffect(() => {
    const countOfTodoItems = todoItems.length;
    checkTheCompletionOfAllTodoItems(todoItems) ? setAllTodoItemsCompleted(true) : setAllTodoItemsCompleted(false);

    countOfTodoItems > 0 ? setToggleAllIsShown(true) : setToggleAllIsShown(false);
  }, [todoItems]);
  
  return (
    <div className='todo-input'>
      {toggleAllIsShown && (
        <input 
          type="checkbox" 
          className='toggle-all'
          onChange={handleToggleAll} 
          style={allTodoItemsCompleted ? {opacity: '1'} : {opacity: '.3'}}
        />
      )}
      <input 
        type="text"
        maxLength={100}
        className='create-todo' 
        value={text}
        onChange={handleInput} 
        onKeyDown={handleAddTodo}
        placeholder="What needs to be done?" 
        autoFocus
      />
    </div>
  );
}

export default InputField;
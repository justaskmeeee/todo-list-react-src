import React, {useState, useEffect} from "react";
import classNames from "classnames";
import s from './InputField.module.scss';

const InputField = ({items,isCompleted, text, handleInput, handleAddTodo, handleToggleAll}) => {
  const [toggleAllIsShown, setToggleAllIsShown] = useState(false);

  useEffect(() => {
    const countOfTodoItems = items.length;
    setToggleAllIsShown(countOfTodoItems > 0);
  }, [items]);

  const toggleAll = classNames(s.toggleAll, {
    [s.highlight]: isCompleted,
  })
  
  return (
    <div className={s.todoInput}>
      {toggleAllIsShown && (
        <input 
          type="checkbox" 
          className={toggleAll}
          onChange={handleToggleAll} 
        />
      )}
      <input 
        type="text"
        maxLength={100}
        className={s.createTodo} 
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
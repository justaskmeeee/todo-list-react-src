import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { selectTodoItems, checkTheCompletionOfAllTodoItems } from "../../store/selectors";
import classNames from "classnames";
import s from './InputField.module.scss';

const InputField = ({text, handleInput, handleAddTodo, handleToggleAll}) => {
  const [toggleAllIsShown, setToggleAllIsShown] = useState(false);
  const [allTodoItemsCompleted, setAllTodoItemsCompleted] = useState(false);
  const todoItems = useSelector(selectTodoItems);  
  const allTodoItemsIsCompleted = useSelector(checkTheCompletionOfAllTodoItems);

  useEffect(() => {
    const countOfTodoItems = todoItems.length;
    setAllTodoItemsCompleted(allTodoItemsIsCompleted);
    setToggleAllIsShown(countOfTodoItems > 0);
  }, [todoItems]);

  const toggleAll = classNames(s.toggleAll, {
    [s.highlight]: allTodoItemsCompleted,
    [s.hide]: !allTodoItemsCompleted,
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
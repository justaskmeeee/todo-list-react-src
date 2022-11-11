import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { todoAdd, toggleTodos } from "../../store/slices/todoSlice";
import { selectTodoItems, checkTheCompletionOfAllTodoItems } from "../../store/selectors";
import Title from "../Title/Title";
import InputField from "../InputField/InputField";
import Footer from "../Footer/Footer";
import s from './TodoApp.module.scss';

const TodoApp = () => {
  const [value, setValue] = useState('');
  const todoItems = useSelector(selectTodoItems);  
  const allTodoItemsIsCompleted = useSelector(checkTheCompletionOfAllTodoItems);
  const dispatch = useDispatch();

  const setInputValue = (event) => {
    setValue(event.target.value);
  }

  const addNewTodo = (event) => {
    if (event.key === 'Enter' && value.trim() !== '') {
      dispatch(todoAdd(value));
      setValue('');
    }
  }  

  const toggleAllTodoItems = () => {
    dispatch(toggleTodos());
  }

  return (
    <div className={s.container}>
      <Title />
      <InputField 
        items={todoItems}
        isCompleted={allTodoItemsIsCompleted}
        text={value}
        handleToggleAll={toggleAllTodoItems}
        handleInput={setInputValue} 
        handleAddTodo={addNewTodo}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default TodoApp;
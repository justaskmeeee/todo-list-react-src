import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { todoAdd, toggleTodos } from "../../store/slices/todoSlice";
import Title from "../Title/Title";
import InputField from "../InputField/InputField";
import Footer from "../Footer/Footer";
import s from './TodoApp.module.scss';

const TodoApp = () => {
  const [value, setValue] = useState('');
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
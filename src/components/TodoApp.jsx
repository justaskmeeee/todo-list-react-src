import { React, useState } from "react";
import Title from "./Title/Title";
import InputField from "./List/InputField";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import { useDispatch } from "react-redux";
import { todoAdd, toggleTodos } from "../store/slices/todoSlice";

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
    <div className="container">
      <Title />
      <InputField 
        text={value}
        handleToggleAll={() => toggleAllTodoItems()}
        handleInput={(event) => setInputValue(event)} 
        handleAddTodo={(event) => addNewTodo(event)}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default TodoApp;
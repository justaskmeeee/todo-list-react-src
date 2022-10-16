import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import Footer from './components/Footer/Footer';
import InputField from './components/TodoList/InputField';
import Title from './components/Title/Title';
import TodoList from './components/TodoList/TodoList';
import { todoAdd } from './store/slices/todoSlice';

function App() {
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

  return (
    <div className="App">
      <Title />
      <InputField 
        text={value} 
        handleInput={(event) => setInputValue(event)} 
        handleAddTodo={(event) => addNewTodo(event)} 
      />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;

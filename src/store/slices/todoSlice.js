import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid4 } from 'uuid';

const items = JSON.parse(localStorage.getItem('items')) || [];
const filter = JSON.parse(localStorage.getItem('filter')) || '';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items,
    filter, 
    count: 0,
  },
  reducers: {
    todoAdd(state, action) {
      const todoItem = {
        id: uuid4(),
        text: action.payload, 
        completed: false, 
      };
      
      state.items.push(todoItem);
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    todoRemove(state, action) {
      const todoItemId = action.payload.id;

      state.items = state.items.filter(item => item.id !== todoItemId);
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    todoStatus(state, action) {
      const currentTodoItem = state.items.find(item => item.id === action.payload.id);

      currentTodoItem.completed = !currentTodoItem.completed;
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    editTodo(state, action) {
      const currentTodoItem = state.items.find(item => item.id === action.payload.id);

      currentTodoItem.text = action.payload.text;
      state.items = state.items.filter(item => item.text.trim() !== '');
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    cancelTodoEditing(state, action) {
      const currentTodoItem = state.items.find(item => item.id === action.payload.id);

      currentTodoItem.text = action.payload.text;
    },
    toggleTodos(state) {
      const allItemsAreToggled = state.items.every(item => item.completed);
      
      state.items.forEach(item => item.completed = !allItemsAreToggled);
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    countTodo(state) {
      const { length } = state.items.filter(item => !item.completed); 
      state.count = length;
    },
    clearCompletedTodos(state) {
      state.items = state.items.filter(item => !item.completed);
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    changeFilter(state, action) {
      state.filter = action.payload;
      localStorage.setItem('filter', JSON.stringify(state.filter));
    }
  }
}) 

export const { 
  todoAdd, 
  todoRemove, 
  todoStatus, 
  editTodo, 
  cancelTodoEditing, 
  toggleTodos, 
  countTodo, 
  clearCompletedTodos, 
  changeFilter
} = todoSlice.actions;

export default todoSlice.reducer;
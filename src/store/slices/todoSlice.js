import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid4 } from 'uuid';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    count: 0
  },
  reducers: {
    todoAdd(state, action) {
      const todoItem = {
        id: uuid4(),
        text: action.payload, 
        completed: false, 
      };
      
      state.items.push(todoItem);
    },
    todoRemove(state, action) {
      const todoItemId = action.payload.id;
      state.items = state.items.filter(item => item.id !== todoItemId);
    },
    todoStatus(state, action) {
      const currentTodoItem = state.items.find(item => item.id === action.payload.id);

      currentTodoItem.completed = !currentTodoItem.completed;
    },
    editTodo(state, action) {
      let currentTodoItem = state.items.find(item => item.id === action.payload.id);

      currentTodoItem.text = action.payload.text;
    },
    toggleTodos(state) {
      const allItemsAreToggled = state.items.every(item => item.completed);
      
      !allItemsAreToggled ?
        state.items.forEach(item => item.completed = true) :
        state.items.forEach(item => item.completed = false);
    },
    countTodo(state) {
      const notCompletedTodos = state.items.filter(item => !item.completed); 
      state.count = notCompletedTodos.length;
    },
    clearCompletedTodos(state) {
      state.items = state.items.filter(item => !item.completed);
    }
  }
}) 

export const { todoAdd, todoRemove, todoStatus, editTodo, toggleTodos, countTodo, clearCompletedTodos } = todoSlice.actions;

export default todoSlice.reducer;
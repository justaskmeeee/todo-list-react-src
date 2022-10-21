import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid4 } from 'uuid';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    count: 0,
    filters: {
      active: [],
      completed: [],
    },
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
      state.items.filter(item => !item.completed);
    },
    filterActiveTodos(state) {      
      const activeItemsFilter = new Set(state.filters.active);
      const filteredActiveItems = state.items.filter(item => !item.completed);
      
      filteredActiveItems.forEach(item => {
        activeItemsFilter.add(item);
      });

      const activeItems = filteredActiveItems;
      state.filters.active = activeItems;
    },
    filterCompletedTodos(state) {
      const completedItemsFilter = new Set(state.filters.completed);
      const filteredCompletedItems = state.items.filter(item => item.completed);
      
      filteredCompletedItems.forEach(item => {
        completedItemsFilter.add(item);
      });

      const completedItems = filteredCompletedItems;
      state.filters.completed = completedItems;
    },
  }
}) 

export const { todoAdd, todoRemove, todoStatus, editTodo, toggleTodos, countTodo, clearCompletedTodos, filterActiveTodos, filterCompletedTodos } = todoSlice.actions;

export default todoSlice.reducer;
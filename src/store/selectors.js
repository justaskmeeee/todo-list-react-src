import { createSelector } from "@reduxjs/toolkit";

export const selectTodoItems = (state) => state.todos.items;
export const selectFilter = (state) => state.todos.filter;
export const selectTodoItemsCount = (state) => state.todos.count;
export const selectActiveTodoItems = (state) => state.todos.filters.active;
export const selectCompletedTodoItems = (state) => state.todos.filters.completed;

export const checkTheCompletionOfAllTodoItems = createSelector(
  selectTodoItems,
  items => {
    if (items.length === 0) return;
    return items.every(item => item.completed)
  }
);

export const todoItemCompletionCheck = createSelector(
  selectTodoItems,
  items => {
    return items.some(item => item.completed);
  }
)

export const currentTodoItemsFilter = createSelector(
  [selectTodoItems, selectFilter],
  (todos, currentFilter) => {
    // 'all' filter
    if (currentFilter === '') return todos;

    // 'active' filter
    if (currentFilter === 'active') {
      return todos.filter(item => !item.completed);
    }

    // 'completed' filter
    return todos.filter(item => item.completed);
  }
)
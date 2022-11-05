import React from "react"
import { useSelector } from "react-redux"
import { currentTodoItemsFilter } from "../../store/selectors"
import TodoList from "../TodoList/TodoList"

const TodoItemsFilter = () => {
  const todoItems = useSelector(currentTodoItemsFilter);

  return (
    <TodoList filter={todoItems} />
  )
} 

export default TodoItemsFilter;
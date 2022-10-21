import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List/List";
import { filterActiveTodos, countTodo } from "../store/slices/todoSlice";

const Active = () => {
  const todoItems = useSelector(state => state.todos.items);
  const activeItems = useSelector(state => state.todos.filters.active);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(filterActiveTodos());
  }, [todoItems]);

  return (
    <List filter={activeItems} />
  );
}

export default Active;
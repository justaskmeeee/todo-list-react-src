import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List/List";
import { clearCompletedTodos } from "../store/slices/todoSlice";

const All = () => {
  const items = useSelector(state => state.todos.items); 

  return (
    <List filter={items} /> 
  );
}

export default All;
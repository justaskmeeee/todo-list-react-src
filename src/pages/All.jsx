import React from "react";
import { useSelector } from "react-redux";
import List from "../components/List/List";

const All = () => {
  const items = useSelector(state => state.todos.items);
  
  return (
    <List filter={items} /> 
  );
}

export default All;
import React from "react"; 
import { useSelector } from "react-redux";
import Item from "./Item";

const TodoList = () => {
  const todoItems = useSelector(state => state.todos.items);

  return (
    <ul>
      {todoItems.map(item => {
        return <Item 
          {...item}
          key={item.id}
        />
      })}
    </ul>
  );
}

export default TodoList;
import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "../components/List/List";
import { filterCompletedTodos } from "../store/slices/todoSlice";

const Completed = () => {
  const todoItems = useSelector(state => state.todos.items);
  const completedItems = useSelector(state => state.todos.filters.completed);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(filterCompletedTodos());
  }, [todoItems]);

  return (
    <List filter={completedItems}/>
  );
}

export default Completed;
import { React, useEffect } from "react";
import Count from "./Count";
import Filters from "./Filters";
import ClearButton from "./ClearButton";
import { useDispatch, useSelector } from "react-redux";
import { countTodo } from "../../store/slices/todoSlice";

const Footer = () => {
  const todoItems = useSelector(state => state.todos.items);
  const countOfTodoItems = useSelector(state => state.todos.count);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countTodo());
  }, [todoItems]);

  return (
    <div>
      <Count value={countOfTodoItems} />
      <Filters />
      <ClearButton />
    </div>
  );
}

export default Footer;
import { React, useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { countTodo } from "../../store/slices/todoSlice";

const TodoList = () => {
  const todoItems = useSelector(state => state.todos.items);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(countTodo());
  }, [todoItems])

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
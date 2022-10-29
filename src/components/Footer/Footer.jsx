import { React, useEffect } from "react";
import Count from "./Count";
import Filters from "./Filters";
import ClearButton from "./ClearButton";
import { useDispatch, useSelector } from "react-redux";
import { countTodo } from "../../store/slices/todoSlice";
import './Footer.scss';
import { useState } from "react";

const todoItemCompletionCheck = (items) => {
  return items.some(item => item.completed);
}

const Footer = () => {
  const todoItems = useSelector(state => state.todos.items);
  const countOfTodoItems = useSelector(state => state.todos.count);
  const dispatch = useDispatch();
  const [footerIsShown, setFooterIsShown] = useState(false);
  const [buttonIsShown, setButtonIsShown] = useState(false);

  useEffect(() => {
    const currentCountOfTodoItems = todoItems.length;
    currentCountOfTodoItems > 0 ? setFooterIsShown(true) : setFooterIsShown(false);
    todoItemCompletionCheck(todoItems) ? setButtonIsShown(true) : setButtonIsShown(false);
    dispatch(countTodo());
  }, [todoItems]);

  return (
    <footer>
      {footerIsShown && (
        <div className="footer">
          <Count value={countOfTodoItems} />
          <Filters />
          <ClearButton visibility={buttonIsShown} />
        </div>
      )}
    </footer>
    
  );
}

export default Footer;
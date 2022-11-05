import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodoItems, selectTodoItemsCount, todoItemCompletionCheck } from "../../store/selectors";
import { countTodo } from "../../store/slices/todoSlice";
import Count from "../Count/Count";
import Filters from "../Filters/Filters";
import ClearButton from "../ClearButton/ClearButton";
import s from './Footer.module.scss';

const Footer = () => {
  const todoItems = useSelector(selectTodoItems);
  const countOfTodoItems = useSelector(selectTodoItemsCount);
  const dispatch = useDispatch();
  const [footerIsShown, setFooterIsShown] = useState(false);
  const [buttonIsShown, setButtonIsShown] = useState(false);
  const someTodoItemIsChecked = useSelector(todoItemCompletionCheck);

  useEffect(() => {
    const currentCountOfTodoItems = todoItems.length;
    setFooterIsShown(currentCountOfTodoItems > 0);
    setButtonIsShown(someTodoItemIsChecked);
    dispatch(countTodo());
  }, [todoItems]);

  return (
    <footer>
      {footerIsShown && (
        <div className={s.footer}>
          <Count value={countOfTodoItems} />
          <Filters />
          <ClearButton visibility={buttonIsShown} />
        </div>
      )}
    </footer>
    
  );
}

export default Footer;
import { React } from "react"; 
import Item from "../Item/Item";
import s from './TodoList.module.scss';

const TodoList = ({filter}) => {  
  return (
    <ul className={s.todoList}>
      {filter.map(item => {
        return <Item 
          {...item}
          key={item.id}
        />
      })}
    </ul>
  );
}

export default TodoList; 
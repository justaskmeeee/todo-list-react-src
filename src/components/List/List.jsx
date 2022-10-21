import { React, useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { countTodo } from "../../store/slices/todoSlice";

const List = ({filter}) => {  
  return (
    <ul>
      {filter.map(item => {
        return <Item 
          {...item}
          key={item.id}
        />
      })}
    </ul>
  );
}

export default List; 
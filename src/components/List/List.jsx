import { React } from "react"; 
import Item from "./Item";

const List = ({filter}) => {  
  return (
    <ul className='todo-list'>
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
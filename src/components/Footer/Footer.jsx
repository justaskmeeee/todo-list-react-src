import React from "react";
import { useSelector } from "react-redux";
import ClearButton from "./ClearButton";
import Count from "./Count";

const Footer = () => { 
  const numberOfTodos = useSelector(state => state.todos.count);

  return (
    <div>
      {numberOfTodos !== 0 ? <Count value={numberOfTodos} /> : ''}
      {/*  */}
      <ClearButton />
    </div>
  );
}

export default Footer;
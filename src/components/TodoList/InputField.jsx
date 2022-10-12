import React from "react";

const InputField = ({text, handleInput, handleAddTodo}) => {
  return (
    <input 
      type="text" 
      value={text}
      onChange={handleInput} 
      onKeyDown={handleAddTodo}
      placeholder="What needs to be done?" 
      autoFocus
    />
  );
}

export default InputField;
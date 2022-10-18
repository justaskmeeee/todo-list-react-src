import React from "react";

const InputField = ({text, handleInput, handleAddTodo, handleToggleAll}) => {
  return (
    <div>
      <button onClick={handleToggleAll}>Click</button>
      <input 
        type="text" 
        value={text}
        onChange={handleInput} 
        onKeyDown={handleAddTodo}
        placeholder="What needs to be done?" 
        autoFocus
      />
    </div>
  );
}

export default InputField;
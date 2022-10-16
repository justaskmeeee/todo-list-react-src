import React from "react";

const Count = ({value}) => {
  const setCountTemplate = () => {
    return value > 1 ? `${value} items left` : `${value} item left`;
  }
  
  return (
    <span>{setCountTemplate()}</span>
  );
}

export default Count;
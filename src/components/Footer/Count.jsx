import React from "react";

const setCountTemplate = (count) => {
  return count > 1 ? `${count} items left` : `${count} item left`;
}

const Count = ({value}) => {
  return (
    <span className='count'>{setCountTemplate(value)}</span>
  );
}

export default Count;
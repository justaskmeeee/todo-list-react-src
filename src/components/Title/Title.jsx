import React from "react";
import s from './Title.module.scss';

const Title = () => {
  return (
    <header>
      <h1 className={s.title}>TODOS</h1>
    </header>
  );
}

export default Title;
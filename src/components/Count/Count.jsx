import React from "react";
import setCountTemplate from "../../utils/setCountTemplate";
import s from '../../components/Count/Count.module.scss';

const Count = ({value}) => {
  return (
    <span className={s.count}>{setCountTemplate(value)}</span>
  );
}

export default Count;
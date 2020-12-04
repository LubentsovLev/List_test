import React from 'react';
import s from './filter.module.scss';
function Input(props) {
  const select = React.useRef(null);
  let handleChange = () => {
    props.sortByAll(select.current.value);
  };
  return (
    <div>
      <div className="item">
        <div className={s.item__title}>{props.title}</div>
        <select
          ref={select}
          onChange={() => {
            handleChange();
          }}
          className="item__comm"
        >
          <option>{props.type}</option>
          {props.option.map((i) => {
            return <option key={i}>{i}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Input;

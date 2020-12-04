import React from 'react';
import s from './Users.module.scss';

const User = (props) => {
  let inst = props.i;
  const inputEl = React.useRef(null);
  const [radio, setRadio] = React.useState(true);
  let radioStatus = '';
  let handleRadio = () => {
    setRadio(radio ? false : true);
  };

  return (
    <div className={s.user__container}>
      <input
        ref={inputEl}
        type="radio"
        name="prim"
        onClick={() => {
          props.handleInput(inst);
          handleRadio();
        }}
      />
      <div className={s.user}>
        <div className={s.panel__item}>{inst.id}</div>
        <div className={s.panel__item}>{inst.date}</div>
        <div className={s.panel__item}>{inst.FIO}</div>
        <div className={s.panel__item}>{inst.position}</div>
        <div className={s.panel__item}>{inst.login}</div>
        <div className={s.panel__item}>******</div>
        <div className={s.panel__item}>
          {inst.phone.substr(0, 6) + ' XXX XX XX'}
        </div>
      </div>
    </div>
  );
};

export default User;

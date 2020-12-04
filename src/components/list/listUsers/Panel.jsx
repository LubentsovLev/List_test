import React from 'react';
import s from './Users.module.scss';

function Panel() {
  return (
    <div>
      <div className={s.panel}>
        <div className={s.panel__item}>ID</div>
        <div className={s.panel__item}>Дата регистрации</div>
        <div className={s.panel__item}>ФИО</div>
        <div className={s.panel__item}>Должность</div>
        <div className={s.panel__item}>Почта(логин)</div>
        <div className={s.panel__item}>Пароль</div>
        <div className={s.panel__item}>Телефон, привязянный к мессенджеру</div>
      </div>
    </div>
  );
}

export default Panel;

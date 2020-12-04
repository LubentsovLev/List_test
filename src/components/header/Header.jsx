import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.scss';
const Header = () => {
  return (
    <div className={s.container}>
      <NavLink
        className={s.nav__link}
        to="/about"
        activeClassName={s.active_ln}
      >
        О платформе
      </NavLink>
      <NavLink
        className={s.nav__link}
        to="/users"
        activeClassName={s.active_ln}
      >
        Загрузка пользователей
      </NavLink>
      <NavLink className={s.nav__link} to="/list" activeClassName={s.active_ln}>
        Список пользователей
      </NavLink>
      <div className={s.supp}>Техподдержка</div>
    </div>
  );
};

export default Header;

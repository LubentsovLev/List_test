import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../../redux/users_reducer';
import Panel from './Panel';
import User from './User';
import s from './Users.module.scss';

function Users(props) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  let handleInput = (i) => {
    dispatch(setCurrentUser(i));
  };
  return (
    <div className={s.users}>
      <Panel />
      {props.users.map((i) => (
        <User handleInput={handleInput} key={i.id} i={i} />
      ))}
    </div>
  );
}

export default Users;
